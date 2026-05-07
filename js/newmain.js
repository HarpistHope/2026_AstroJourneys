/* main.js — NASA Giant Leaps application logic */

// Note from HKM: Thanks for writing this, Akhila! I am having a bit of trouble incorporating the geojsons with d3, I think your coding skills are a bit too advanced for me lol. I will keep working on it! 
// Notes from group meeting 04/28/26
// Add location advantage to location popups 
// add legend/color context for NASA center markers colors
// make distance tracker graphic bigger
// standardize distance
// edit+add events to ak_data.js
// default view should only highlight/mark relevant NASA centers; include all centers + astronaut birthplaces as extra 
// make map frame smaller to allow more legible detail with disttracker and info boxes
// Do the marker colors have relevance? If so, maybe make a legend?
// Incorporate Image context,make images more prominent?
// dehighlight south east states 
// fix astronaut birth places button and Did You Know buttons?

/* STARFIELD  */
(function initStars() {
  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const stars = Array.from({ length: 280 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.3 + 0.2,
    a: Math.random(),
    speed: Math.random() * 0.005 + 0.002
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.a += s.speed;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(185,215,255,${Math.abs(Math.sin(s.a))})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();


/*  MAP PROJECTION  */
const VIEWS = {
  usa:   { ln0:-125, ln1:-66,  lt0:50,  lt1:23, bias: 0 },   // full continental US
  use:   { ln0:-98,  ln1:-66,  lt0:47,  lt1:24, bias: 0  },   // eastern US
  uss:   { ln0:-108, ln1:-74,  lt0:38,  lt1:24.5, bias: 0 },  // southeastern US 
  world: { ln0:-180, ln1:180,  lt0:82,  lt1:-56, bias: -0.035 }   // world
};

let MAP_W = 0, MAP_H = 0;

const MAP_COMPRESS = 0.94;

// replace original project function to prevent maps/geojsons from strecthing with view changes
function project(lat, lng, view) {
  const v = VIEWS[view] || VIEWS.usa;

  const lonSpan = v.ln1 - v.ln0;
  const latSpan = v.lt0 - v.lt1;

  const baseScale = Math.min(
    MAP_W / lonSpan,
    MAP_H / latSpan
  );

  const scale = baseScale * MAP_COMPRESS;

  const offsetX = (MAP_W - lonSpan * scale) / 2;
  const verticalBias = v.bias || 0; // moves the world map frame slightly higher for better visual balance
  const offsetY =
    (MAP_H - latSpan * scale) / 2 +
    MAP_H * verticalBias;

  const x = (lng - v.ln0) * scale + offsetX;
  const y = (v.lt0 - lat) * scale + offsetY;

  return [x, y];
};

function buildPathD(coords, view) {
  return coords.map((c, i) => {
    const [x, y] = project(c[1], c[0], view);
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join('') + 'Z';
}

// fetch geojsons as US_STATES and WORLD_OUTLINES
let US_STATES = [];
let WORLD_OUTLINES = [];

async function loadjsons() {
  const [usRes, worldRes] = await Promise.all([
    fetch('data/us_48states.json'),
    fetch('data/worldcountries_eqEarth.json')
  ]);

  const usGeo = await usRes.json();
  const worldGeo = await worldRes.json();

  US_STATES = convertStates(usGeo);
  WORLD_OUTLINES = convertWorld(worldGeo);

  console.log('states loaded:', US_STATES.length);
  console.log('world loaded:', WORLD_OUTLINES.length);
};


// convert states geojson to match existing format
function convertStates(usGeo) {
  const states = [];

  usGeo.features.forEach(f => {
    const abbr =
      f.properties.STUSPS ||
      f.properties.NAME;

    const geom = f.geometry;

    if (geom.type === 'Polygon') {
      states.push([abbr, geom.coordinates[0]]);
    }

    if (geom.type === 'MultiPolygon') {
      geom.coordinates.forEach(poly => {
        states.push([abbr, poly[0]]);
      });
    }
  });

  return states;
}

// convert world geojson to match existing format
function convertWorld(worldGeo) {
  const countries = [];

  worldGeo.features.forEach(f => {
    const geom = f.geometry;

    if (!geom) return;

    // Polygon countries
    if (geom.type === 'Polygon') {
      geom.coordinates.forEach(ring => {
        countries.push(ring);
      });
    }

    // MultiPolygon countries
    if (geom.type === 'MultiPolygon') {
      geom.coordinates.forEach(poly => {
        poly.forEach(ring => {
          countries.push(ring);
        });
      });
    }
  });

  return countries;
}

/* MAP RENDERING */
let ACTIVE_TAB  = 'c'; // 'c' = centers, 'a' = astronauts
let CURRENT_IDX = 0;

function drawMap(view, eventMarkers) {
  const wrap = document.getElementById('map-wrap');
  MAP_W = wrap.offsetWidth  || 800;
  MAP_H = wrap.offsetHeight || 500;

  const svg = document.getElementById('map-svg');
  svg.setAttribute('viewBox', `0 0 ${MAP_W} ${MAP_H}`);
  svg.setAttribute('width',  MAP_W);
  svg.setAttribute('height', MAP_H);
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

  let s = '';

  //Ocean background
  s += `<rect width="${MAP_W}" height="${MAP_H}" fill="#010a1a"/>`;

  // Subtle grid
  const gw = MAP_W / 10, gh = MAP_H / 7;
  for (let gx = 0; gx <= MAP_W; gx += gw)
    s += `<line x1="${gx.toFixed(0)}" y1="0" x2="${gx.toFixed(0)}" y2="${MAP_H}" stroke="rgba(0,212,255,0.03)" stroke-width="1"/>`;
  for (let gy = 0; gy <= MAP_H; gy += gh)
    s += `<line x1="0" y1="${gy.toFixed(0)}" x2="${MAP_W}" y2="${gy.toFixed(0)}" stroke="rgba(0,212,255,0.03)" stroke-width="1"/>`;

  if (view === 'world') {
    // World continents
    WORLD_OUTLINES.forEach(pts => {
      s += `<path d="${buildPathD(pts, view)}" class="world-land"/>`;
    });
    // Water labels
    const labels = [
      // [30, -20, 'Atlantic Ocean'],
      // [10, 180, 'Pacific Ocean'],
      // [-15, 75, 'Indian Ocean']
    ];
    labels.forEach(([lat, lng, txt]) => {
      const [lx, ly] = project(lat, lng, view);
      s += `<text x="${lx.toFixed(0)}" y="${ly.toFixed(0)}" class="water-label" text-anchor="middle">${txt}</text>`;
    });
  } else {
    // US States
    US_STATES.forEach(([abbr, coords]) => {
      const cls = SOUTH_STATES.has(abbr) ? 'state-south' : 'state-base';
      s += `<path d="${buildPathD(coords, view)}" class="${cls}"/>`;
    });
    // Outer glow border
    s += `<rect width="${MAP_W}" height="${MAP_H}" fill="none" stroke="rgba(0, 213, 255, 0.12)" stroke-width="3"/>`;
    // Water labels
    if (view !== 'usa' || MAP_W > 600) {
      const [gl_x, gl_y] = project(26, -89, view);
      s += `<text x="${gl_x.toFixed(0)}" y="${gl_y.toFixed(0)}" class="water-label" text-anchor="middle">Gulf of Mexico</text>`;
    }
    // if (view === 'usa') {
    //   const [pa_x, pa_y] = project(40, -128, view);
    //   s += `<text x="${pa_x.toFixed(0)}" y="${pa_y.toFixed(0)}" class="water-label" text-anchor="middle">Pacific Ocean</text>`;
    //   const [at_x, at_y] = project(34, -64, view);
    //   s += `<text x="${at_x.toFixed(0)}" y="${at_y.toFixed(0)}" class="water-label" text-anchor="middle">Atlantic</text>`;
    // }
  }

  // Permanent layer (centers or astronaut birthplaces)
  const permList = ACTIVE_TAB === 'c' ? NASA_CENTERS : ASTRONAUT_BIRTHS;
  permList.forEach(p => {
    const [cx, cy] = project(p.lat, p.lng, view);
    if (cx < -15 || cx > MAP_W + 15 || cy < -15 || cy > MAP_H + 15) return;
    const col   = p.col || '#ffca28';
    const label = p.abbr || p.name.split(' ')[0];
    const desc  = ACTIVE_TAB === 'c' ? p.role : p.mission;
    const tag   = ACTIVE_TAB === 'c' ? `NASA CENTER · ${p.state}` : `Born: ${p.born}`;
    s += makePermDot(cx, cy, col, 4.5, true, p.name, desc, tag, label, ACTIVE_TAB === 'a');
  });

  // Event-specific markers 
  eventMarkers.forEach(m => {
    const [cx, cy] = project(m.lat, m.lng, view);
    if (cx < -15 || cx > MAP_W + 15 || cy < -15 || cy > MAP_H + 15) return;
    const short = (m.label || '').split(',')[0].trim().split(' ').slice(0, 2).join(' ');
    s += makeEventDot(cx, cy, m.col, m.type === 'b' ? 5.5 : 7.5, false, m.label, m.desc,
                 m.type === 'b' ? 'BIRTHPLACE' : 'NASA FACILITY', short, m.type === 'b')
  });

  svg.innerHTML = s;
  attachTooltips();
}




function makeEventDot(x, y, col, r, perm, lbl, desc, tag, shortLabel, isBirth) {
  const opacity = perm ? 0.72 : 1;
  const dur     = perm ? '3.5s' : '2.3s';
  const L = (lbl  || '').replace(/"/g, "'");
  const D = (desc || '').replace(/"/g, "'");
  const T = (tag  || '').replace(/"/g, "'");
  const glow = perm ? 3 : 5;

  let s = `<g opacity="${opacity}">`;

  // Pulse rings
  s += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="none" stroke="${col}" stroke-width="${perm ? 1.2 : 1.8}">
    <animate attributeName="r" values="${r};${r + 13};${r}" dur="${dur}" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.8;0;0.8" dur="${dur}" repeatCount="indefinite"/>
  </circle>`;
  s += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="none" stroke="${col}" stroke-width=".9">
    <animate attributeName="r" values="${r};${r + 7};${r}" dur="${dur}" begin=".8s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.5;0;0.5" dur="${dur}" begin=".8s" repeatCount="indefinite"/>
  </circle>`;
  
  // Core dot — data attributes for tooltip
  s += `<circle class="map-dot" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}"
    fill="${col}" stroke="rgba(255,255,255,0.5)" stroke-width="1.3"
    style="cursor:pointer;filter:drop-shadow(0 0 ${glow}px ${col})"
    data-l="${L}" data-d="${D}" data-t="${T}"/>`;

  // Star symbol for birthplace markers
  if (isBirth) {
    s += `<text x="${x.toFixed(1)}" y="${(y + 4).toFixed(1)}" text-anchor="middle"
      font-size="${(r * 1.1).toFixed(1)}" fill="#010c1e"
      style="pointer-events:none;font-weight:bold">&#9733;</text>`;
  }

  // Short label for event-specific (non-permanent) markers
  if (!perm) {
    s += `<text x="${(x + r + 4).toFixed(1)}" y="${(y + 4).toFixed(1)}"
      font-family="Share Tech Mono,Courier New,monospace" font-size="8"
      fill="${col}" opacity=".88" style="pointer-events:none">${shortLabel}</text>`;
  }

  s += '</g>';
  return s;
}

function makePermDot(x, y, col, r, perm, lbl, desc, tag, shortLabel, isBirth) {
  const opacity = perm ? 0.72 : 1;
  const dur     = perm ? '3.5s' : '2.3s';
  const L = (lbl  || '').replace(/"/g, "'");
  const D = (desc || '').replace(/"/g, "'");
  const T = (tag  || '').replace(/"/g, "'");
  const glow = perm ? 3 : 5;

  let s = `<g opacity="${opacity}">`;

  // // Pulse rings
  // s += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="none" stroke="${col}" stroke-width="${perm ? 1.2 : 1.8}">
  //   <animate attributeName="r" values="${r};${r + 13};${r}" dur="${dur}" repeatCount="indefinite"/>
  //   <animate attributeName="opacity" values="0.8;0;0.8" dur="${dur}" repeatCount="indefinite"/>
  // </circle>`;
  // s += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="none" stroke="${col}" stroke-width=".9">
  //   <animate attributeName="r" values="${r};${r + 7};${r}" dur="${dur}" begin=".8s" repeatCount="indefinite"/>
  //   <animate attributeName="opacity" values="0.5;0;0.5" dur="${dur}" begin=".8s" repeatCount="indefinite"/>
  // </circle>`;

  // Core dot — data attributes for tooltip
  s += `<circle class="map-dot" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}"
    fill="${col}" stroke="rgba(255,255,255,0.5)" stroke-width="1.3"
    style="cursor:pointer;filter:drop-shadow(0 0 ${glow}px ${col})"
    data-l="${L}" data-d="${D}" data-t="${T}"/>`;

  // Star symbol for birthplace markers
  if (isBirth) {
    s += `<text x="${x.toFixed(1)}" y="${(y + 4).toFixed(1)}" text-anchor="middle"
      font-size="${(r * 1.1).toFixed(1)}" fill="#010c1e"
      style="pointer-events:none;font-weight:bold">&#9733;</text>`;
  }

  // Short label for event-specific (non-permanent) markers
  if (!perm) {
    s += `<text x="${(x + r + 4).toFixed(1)}" y="${(y + 4).toFixed(1)}"
      font-family="Share Tech Mono,Courier New,monospace" font-size="8"
      fill="${col}" opacity=".88" style="pointer-events:none">${shortLabel}</text>`;
  }

  s += '</g>';
  return s;
}

function attachTooltips() {
  const tip  = document.getElementById('map-tooltip');
  const tipT = document.getElementById('tip-title');
  const tipB = document.getElementById('tip-body');
  const tipG = document.getElementById('tip-tag');
  const closeBtn = document.getElementById('close-btn');


  document.getElementById('map-svg').querySelectorAll('.map-dot').forEach(dot => {
    dot.addEventListener('mouseenter', e => {
      tipT.textContent = dot.dataset.l;
      tipB.textContent = dot.dataset.d;
      tipG.textContent = dot.dataset.t;

      const wr  = document.getElementById('map-wrap').getBoundingClientRect();
      let tx = e.clientX - wr.left + 14;
      let ty = e.clientY - wr.top  - 12;
      if (tx + 230 > MAP_W) tx = e.clientX - wr.left - 242;
      if (ty + 90  > MAP_H) ty = e.clientY - wr.top  - 90;

      tip.style.left = tx + 'px';
      tip.style.top  = ty + 'px';
      tip.classList.add('on');
    });
    dot.addEventListener('mouseleave', () => tip.classList.remove('on'));
  });
}

// document.getElementById('close-btn').addEventListener('click', () => {
//       document.getElementById('map-tooltip').classList.remove('on'); 
//     });

function switchTab(t) {
  ACTIVE_TAB = t;
  document.getElementById('tab-c').classList.toggle('on', t === 'c');
  document.getElementById('tab-a').classList.toggle('on', t === 'a');
  document.getElementById('map-hud').textContent =
    t === 'a' ? 'ASTRONAUT BIRTHPLACES · HOVER STARS FOR INFO'
               : 'NASA CENTERS · SOUTHEASTERN OPERATIONS CORRIDOR';
  drawMap(EVENTS[CURRENT_IDX].mapView, EVENTS[CURRENT_IDX].markers);
}


function renderDistTracker(idx){
  var svgEl=document.getElementById('dist-svg');
  var W=svgEl.parentElement.offsetWidth||420, H=290;
  svgEl.setAttribute('viewBox','0 0 '+W+' '+H);
  svgEl.style.height=H+'px';

  var cur=EVENTS[idx];
  var MAX_D=270000, logMax=Math.log10(MAX_D+1);
  var mc=cur.dist>=248000?'#ff3d21':cur.dist>=200000?'#ffca28':cur.dist>=800?'#00e5a0':'#00d4ff';

  /* Earth is at x=EX, centered vertically */
  var EX=75, EY=H/2, ER=34;

  // /* All notable points we always show */ -- Comment from Hope: I commented out all but the Moon so they weren't always glowing in the background; I'm not sure how to add them to EVENTS properly...
  var POINTS=[
    // {dist:254,    lbl:'ISS',       sub:'254 mi',       col:'#00d4ff', r:8,  emoji:'🛰️',  ya:-1},
    // {dist:870,    lbl:'POLARIS',   sub:'870 mi',        col:'#00e5a0', r:9,  emoji:'⭐',  ya:1},
    {dist:238855, lbl:'THE MOON',  sub:'238,855 mi',    col:'#c8d8f0', r:22, emoji:'🌕',  ya:-1},
    // {dist:268553, lbl:'ARTEMIS I', sub:'268,553 mi ★',  col:'#00e5a0', r:14, emoji:'🚀',  ya:1},
  ];

  /* Compute x positions using log scale stretched across available width */
  var SCENE_W = W - EX - 75;
  POINTS.forEach(function(p){
    p.x = EX + ER + 8 + (Math.log10(p.dist+1)/logMax)*SCENE_W * 0.88;
  });

  var s='<defs>';
  s+='<radialGradient id="bgG" cx="30%" cy="50%"><stop offset="0%" stop-color="#0a1a35"/><stop offset="100%" stop-color="#010814"/></radialGradient>';
  s+='<radialGradient id="eG" cx="38%" cy="32%"><stop offset="0%" stop-color="#6ab4ff"/><stop offset="40%" stop-color="#1560d8"/><stop offset="100%" stop-color="#020e28"/></radialGradient>';
  s+='<radialGradient id="eGl" cx="50%" cy="50%"><stop offset="0%" stop-color="rgba(80,150,255,0.4)"/><stop offset="100%" stop-color="rgba(0,0,0,0)"/></radialGradient>';
  s+='<radialGradient id="moonG" cx="35%" cy="30%"><stop offset="0%" stop-color="#d8e4f4"/><stop offset="30%" stop-color="#8a9db8"/><stop offset="100%" stop-color="#2a3545"/></radialGradient>';
  s+='<filter id="glo"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>';
  s+='<filter id="glo2"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>';
  s+='<filter id="glo3"><feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>';
  s+='</defs>';

  /* Space background */
  s+='<rect width="'+W+'" height="'+H+'" fill="url(#bgG)"/>';

  /* Stars — scattered, varied sizes */
  var starseed=[[8,12,0.9],[22,55,0.7],[58,9,1.1],[95,22,0.6],[130,8,0.8],[160,45,0.7],[200,18,1.0],[240,35,0.6],[290,12,0.9],[330,50,0.7],[370,22,0.8],[395,40,0.6],[42,78,0.5],[88,68,0.8],[145,75,0.6],[195,82,0.9],[260,65,0.7],[310,80,0.5],[355,72,0.8],[18,130,0.7],[70,125,0.9],[120,118,0.6],[175,140,0.8],[230,128,0.5],[280,145,0.7],[340,135,0.9],[380,150,0.6],[50,175,0.8],[100,168,0.6],[155,180,0.9],[210,172,0.7],[265,185,0.5],[315,178,0.8],[360,195,0.6],[25,218,0.9],[75,228,0.7],[125,240,0.5],[185,222,0.8],[235,245,0.6],[285,235,0.9],[335,250,0.7],[375,240,0.5]];
  starseed.forEach(function(p){s+='<circle cx="'+p[0]+'" cy="'+p[1]+'" r="'+p[2]+'" fill="white" opacity="'+(0.06+p[2]*0.09)+'"/>';});

  /* Faint nebula-like glow in background */
  s+='<ellipse cx="'+(W*0.65)+'" cy="'+(H*0.4)+'" rx="120" ry="60" fill="rgba(0,50,120,0.08)"/>';
  s+='<ellipse cx="'+(W*0.82)+'" cy="'+(H*0.6)+'" rx="80" ry="50" fill="rgba(0,80,80,0.07)"/>';

  /* Dashed baseline line from Earth to far right */
  s+='<line x1="'+(EX+ER)+'" y1="'+EY+'" x2="'+(W-75)+'" y2="'+EY+'" stroke="rgba(255,255,255,0.12)" stroke-width="1" stroke-dasharray="6,5"/>';

  /* DRAW EACH POINT */
  POINTS.forEach(function(p){
    var isActive=(Math.abs(p.dist-cur.dist)<2||
      (cur.dist>=248000&&cur.dist<268000&&p.dist===248000)||
      (cur.dist>=268000&&p.dist===268553)||
      (cur.dist>=200000&&cur.dist<248000&&p.dist===238855)||
      (cur.dist>=800&&cur.dist<200000&&p.dist===870)||
      (cur.dist>=100&&cur.dist<800&&p.dist===254)||
      (cur.dist===0&&false));
    // Special: if current event dist matches exactly
    if(cur.dist===p.dist) isActive=true;

    var op=isActive?1:0.28;
    var px=p.x, py=EY;

    /* Connecting arrow line */
    s+='<line x1="'+(EX+ER*0.7)+'" y1="'+EY+'" x2="'+(px-p.r-4)+'" y2="'+EY+'" stroke="rgba(255,255,255,'+(isActive?0.55:0.12)+')" stroke-width="'+(isActive?1.5:0.8)+'" marker-end="url(#arr)" opacity="'+op+'"/>';

    /* Object glow */
    if(isActive){
      s+='<circle cx="'+px+'" cy="'+py+'" r="'+(p.r+12)+'" fill="'+p.col+'" opacity="0.12" filter="url(#glo3)"/>';
    }

    /* Moon gets special rendering */
    if(p.dist===238855){
      s+='<circle cx="'+px+'" cy="'+py+'" r="'+p.r+'" fill="url(#moonG)" opacity="'+op+'" '+(isActive?'filter="url(#glo2)"':'')+'/>';
      /* Moon surface detail craters */
      if(op>0.5){
        s+='<circle cx="'+(px-7)+'" cy="'+(py-8)+'" r="4" fill="rgba(0,0,0,0.25)"/>';
        s+='<circle cx="'+(px+5)+'" cy="'+(py+6)+'" r="3" fill="rgba(0,0,0,0.2)"/>';
        s+='<circle cx="'+(px-2)+'" cy="'+(py+4)+'" r="2" fill="rgba(0,0,0,0.18)"/>';
      }
    } else {
      /* Other objects */
      s+='<circle cx="'+px+'" cy="'+py+'" r="'+p.r+'" fill="'+p.col+'" opacity="'+op+'" '+(isActive?'filter="url(#glo2)"':'')+'/>';
      /* ISS detail */
      if(p.dist===254&&isActive){
        s+='<rect x="'+(px-8)+'" y="'+(py-2.5)+'" width="16" height="5" rx="1" fill="rgba(200,230,255,0.9)" opacity="0.9"/>';
        s+='<rect x="'+(px-2.5)+'" y="'+(py-8)+'" width="5" height="16" rx="1" fill="rgba(200,230,255,0.9)" opacity="0.9"/>';
        s+='<rect x="'+(px-11)+'" y="'+(py-1.5)+'" width="7" height="3" fill="rgba(100,180,255,0.8)" opacity="0.9"/>';
        s+='<rect x="'+(px+4)+'" y="'+(py-1.5)+'" width="7" height="3" fill="rgba(100,180,255,0.8)" opacity="0.9"/>';
      }
    }

    /* Label above/below depending on ya flag */
    var labelY = p.ya<0 ? py-p.r-22 : py+p.r+22;
    var subY   = p.ya<0 ? labelY+13  : labelY+13;

    s+='<text x="'+px+'" y="'+labelY+'" text-anchor="middle" font-family="Impact,Arial Black,sans-serif" font-size="11" fill="'+p.col+'" opacity="'+op+'" letter-spacing="1">'+p.lbl+'</text>';
    s+='<text x="'+px+'" y="'+subY+'" text-anchor="middle" font-family="Courier New,monospace" font-size="8" fill="rgba(255,255,255,'+(op*0.7)+')" opacity="'+op+'">'+p.sub+'</text>';

    /* Vertical tick on baseline */
    s+='<line x1="'+px+'" y1="'+(EY-3)+'" x2="'+px+'" y2="'+(EY+3)+'" stroke="rgba(255,255,255,'+(isActive?0.6:0.15)+')" stroke-width="1.5"/>';
  });

  /* ── CURRENT MISSION rocket dot if not already a POINT ── */
  var knownDists=[0,238855];
  var isKnown=knownDists.indexOf(cur.dist)>-1;
  if(cur.dist>0&&!isKnown){
    var rx=EX+ER+8+(Math.log10(cur.dist+1)/logMax)*SCENE_W*0.88;
    var ry=EY;
    s+='<circle cx="'+rx+'" cy="'+ry+'" r="10" fill="none" stroke="'+mc+'" stroke-width="2"><animate attributeName="r" values="10;24;10" dur="2.3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.9;0;0.9" dur="2.3s" repeatCount="indefinite"/></circle>';
    s+='<circle cx="'+rx+'" cy="'+ry+'" r="7" fill="'+mc+'" stroke="white" stroke-width="1.5" filter="url(#glo)"/>';
    s+='<text x="'+rx+'" y="'+(ry-20)+'" text-anchor="middle" font-family="Impact,Arial Black,sans-serif" font-size="10" fill="'+mc+'" letter-spacing="1">'+cur.name.split(' ')[0].toUpperCase()+'</text>';
    s+='<text x="'+rx+'" y="'+(ry+30)+'" text-anchor="middle" font-family="Courier New,monospace" font-size="10" fill="rgb(255, 255, 255)">'+cur.dist+' mi</text>';
    /* Line from Earth */
    s+='<line x1="'+(EX+ER*0.7)+'" y1="'+EY+'" x2="'+(rx-9)+'" y2="'+EY+'" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"/>';
  }

  /* ── EARTH — rendered last so it's on top ── */
  s+='<circle cx="'+EX+'" cy="'+EY+'" r="'+(ER+18)+'" fill="url(#eGl)"/>';
  s+='<circle cx="'+EX+'" cy="'+EY+'" r="'+ER+'" fill="url(#eG)" stroke="rgba(100,170,255,0.5)" stroke-width="2" filter="url(#glo2)"/>';
  /* Continent patches */
  s+='<ellipse cx="'+(EX-12)+'" cy="'+(EY-10)+'" rx="11" ry="8" fill="rgba(0,130,55,0.65)"/>';
  s+='<ellipse cx="'+(EX+6)+'" cy="'+(EY-5)+'" rx="8" ry="6" fill="rgba(0,120,50,0.60)"/>';
  s+='<ellipse cx="'+(EX+8)+'" cy="'+(EY+10)+'" rx="6" ry="5" fill="rgba(0,110,45,0.55)"/>';
  s+='<ellipse cx="'+(EX-8)+'" cy="'+(EY+10)+'" rx="9" ry="4" fill="rgba(0,100,40,0.55)"/>';
  /* Atmosphere halo */
  s+='<circle cx="'+EX+'" cy="'+EY+'" r="'+(ER+4)+'" fill="none" stroke="rgba(120,200,255,0.25)" stroke-width="4"/>';
  /* Earth label */
  s+='<text x="'+EX+'" y="'+(EY+ER+17)+'" text-anchor="middle" font-family="Impact,Arial Black,sans-serif" font-size="12" fill="rgba(180,220,255,0.8)" letter-spacing="2">EARTH</text>';

  /* Current mission label at very bottom */
  s+='<text x="'+(W/2)+'" y="'+(H-6)+'" text-anchor="middle" font-family="Impact,Arial Black,sans-serif" font-size="15" fill="'+mc+'">'+cur.distLabel+'</text>';

  svgEl.innerHTML=s;
}


/* IMAGE LOADER WITH FALLBACK */
function loadImageWithFallback(imgEl, urlList, emoji, caption) {
  let attempt = 0;

  const tryNext = () => {
    if (attempt >= urlList.length) {
      // All URLs failed — show styled emoji placeholder
      const wrap = imgEl.parentElement;
      if (wrap) {
        wrap.innerHTML =
          `<div style="width:100%;height:100%;display:flex;flex-direction:column;
              align-items:center;justify-content:center;
              background:linear-gradient(135deg,#061228,#020810);gap:8px">
            <div style="font-size:2.6rem">${emoji}</div>
            <div style="font-family:Share Tech Mono,Courier New,monospace;font-size:.55rem;
                color:rgba(0,212,255,.4);letter-spacing:.1rem;text-align:center;padding:0 12px">
              ${caption}</div>
            <div style="font-family:Share Tech Mono,Courier New,monospace;font-size:.48rem;
                color:rgba(255,202,40,.3);letter-spacing:.1rem">
              NASA PUBLIC DOMAIN ARCHIVE</div>
          </div>`;
      }
      return;
    }
    imgEl.onerror = () => { attempt++; tryNext(); };
    imgEl.src = urlList[attempt];
  };

  tryNext();
}


function renderInfo(ev){
    let h = `<div class="event-img-wrap">
    <img class="event-img" id="ev-photo" alt="${ev.photoCap}" style="${ev.photoStyle || ''}"/>
    <div class="img-overlay"></div>
    <div class="img-caption">${ev.photoCap}</div>
    </div>`;
  
  h +='<div class="event-body">'
    +'<div class="event-name">'+ev.name+'</div>'
    +'<div class="event-meta">'+ev.meta+'</div>'
    +'<div class="event-desc">'+ev.desc+'</div>'
    +'<div class="fact-block"><div class="fact-label">★ Historical Fact</div><div class="fact-text">'+ev.fact+'</div></div>';
  if(ev.locAdv) h+='<div class="loc-adv"><div class="loc-adv-label">📍 Of Note</div><div class="loc-adv-txt">'+ev.locAdv+'</div></div>';
  h+='<button class="dyk-btn" onclick="toggleDyk(this)">✦ &nbsp;Did You Know?</button>'
    +'<div class="dyk-panel" id="dyk-panel">'+ev.dyk+'</div>'
    +'</div>';
  document.getElementById('info-inner').innerHTML=h;

   //Load image with multi-URL fallback
  const img = document.getElementById('ev-photo');
  if (img) loadImageWithFallback(img, ev.photos, ev.emoji, ev.photoCap);
}

window.toggleDyk=function(btn){
  var p=document.getElementById('dyk-panel');
  p.classList.toggle('on');
  btn.innerHTML=p.classList.contains('on')?'✕ &nbsp;Close':'✦ &nbsp;Did You Know?';
};



// /* INFO PANEL*/
// function renderInfo(ev) {
//   let h = `<div class="event-img-wrap">
//     <img class="event-img" id="ev-photo" alt="${ev.photoCap}" style="${ev.photoStyle || ''}"/>
//     <div class="img-overlay"></div>
//     <div class="img-caption">${ev.photoCap}</div>
//   </div>`;

//   h += `<div class="event-body">
//     <div class="event-name">${ev.name}</div>
//     <div class="event-meta">${ev.meta}</div>
//     <div class="event-desc">${ev.desc}</div>
//     <div class="fact-block">
//       <div class="fact-label">★ Historical Fact</div>
//       <div class="fact-text">${ev.fact}</div>
//     </div>`;

//   if (ev.dyk) {
//     h += `<button class="dyk-btn" onclick="toggleDyk(this)">✦ &nbsp;Did You Know?</button>
//           <div class="dyk-panel" id="dyk-panel">${ev.dyk}</div>`;
//   }
//   h += '</div>';

//   document.getElementById('info-inner').innerHTML = h;

//   // Load image with multi-URL fallback
//   const img = document.getElementById('ev-photo');
//   if (img) loadImageWithFallback(img, ev.photos, ev.emoji, ev.photoCap);
// }

// function toggleDyk(btn) {
//   const panel = document.getElementById('dyk-panel');
//   panel.classList.toggle('on');
//   btn.innerHTML = panel.classList.contains('on') ? '✕ &nbsp;Close' : '✦ &nbsp;Did You Know?';
// }


/* TIMELINE */
function buildTimeline() {
  const container = document.getElementById('tl-nodes');
  container.innerHTML = '';

  EVENTS.forEach((ev, i) => {
    const pct  = i / (EVENTS.length - 1) * 100;
    const node = document.createElement('div');
    node.className = 'tl-node';
    node.style.left = pct + '%';
    node.title = `${ev.year} — ${ev.name}`;
    node.innerHTML = `<span class="tl-year">${ev.year}</span>`;
    node.addEventListener('click', () => goTo(i));
    container.appendChild(node);
  });
}

function updateTimeline() {
  document.querySelectorAll('.tl-node').forEach((node, i) => {
    node.classList.toggle('on',   i === CURRENT_IDX);
    node.classList.toggle('done', i <  CURRENT_IDX);
  });
  document.getElementById('tl-fill').style.width = (CURRENT_IDX / (EVENTS.length - 1) * 100) + '%';
  document.getElementById('btn-prev').disabled = (CURRENT_IDX === 0);
  document.getElementById('btn-next').disabled = (CURRENT_IDX === EVENTS.length - 1);
}


/* NAVIGATE TO EVENT */
function goTo(idx, instant) {
  CURRENT_IDX = idx;
  const ev = EVENTS[idx];

  document.getElementById('year-display').textContent = ev.year;
  document.getElementById('event-display').textContent = ev.name;
  updateTimeline();
  drawMap(ev.mapView, ev.markers);
  renderDistTracker(idx);

  document.getElementById('map-hud').textContent =
    ACTIVE_TAB === 'a' ? 'ASTRONAUT BIRTHPLACES · HOVER STARS FOR INFO'
    : ev.mapView === 'world' ? 'GLOBAL VIEW · INTERNATIONAL PARTNER SITES'
    : 'NASA OPERATIONS CORRIDOR · SOUTHEASTERN USA';

  const infoWrap = document.getElementById('info-wrap');
  if (instant) {
    renderInfo(ev);
    return;
  }
  infoWrap.classList.add('fading');
  setTimeout(() => {
    renderInfo(ev);
    infoWrap.classList.remove('fading');
  }, 260);
}

/* BOOT */
document.getElementById('btn-start').addEventListener('click', () => {
  loadjsons().then(() => {   // load geojsons

    document.getElementById('landing').classList.add('out');
    document.getElementById('app').classList.add('on');
    buildTimeline();
    setTimeout(() => goTo(0, true), 120);
  });
});

document.getElementById('btn-reset').addEventListener('click', () => {
  document.getElementById('app').classList.remove('on');
  document.getElementById('landing').classList.remove('out');
  CURRENT_IDX = 0;
});

document.getElementById('btn-prev').addEventListener('click', () => {
  if (CURRENT_IDX > 0) goTo(CURRENT_IDX - 1);
});

document.getElementById('btn-next').addEventListener('click', () => {
  if (CURRENT_IDX < EVENTS.length - 1) goTo(CURRENT_IDX + 1);
});

document.addEventListener('keydown', e => {
  if (!document.getElementById('app').classList.contains('on')) return;
  if (e.key === 'ArrowRight' && CURRENT_IDX < EVENTS.length - 1) goTo(CURRENT_IDX + 1);
  if (e.key === 'ArrowLeft'  && CURRENT_IDX > 0)                 goTo(CURRENT_IDX - 1);
});

window.addEventListener('resize', () => {
  if (document.getElementById('app').classList.contains('on'))
    drawMap(EVENTS[CURRENT_IDX].mapView, EVENTS[CURRENT_IDX].markers);
});