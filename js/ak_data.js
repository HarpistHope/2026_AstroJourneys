/* data.js — Mission events, NASA center locations, astronaut birthplaces */

/* ── NASA FACILITY LOCATIONS ── */
const NASA_CENTERS = [
  { lat:28.573, lng:-80.649, name:'Kennedy Space Center',    abbr:'KSC',  state:'FL', role:'Launch site for ALL NASA human spaceflight missions',             col:'#ff3d21' },
  { lat:29.559, lng:-95.089, name:'Johnson Space Center',    abbr:'JSC',  state:'TX', role:'Mission Control and astronaut training — heart of human spaceflight', col:'#00d4ff' },
  { lat:30.390, lng:-89.090, name:'Stennis Space Center',    abbr:'SSC',  state:'MS', role:'Rocket engine testing — Saturn V, Shuttle and SLS all tested here', col:'#ffca28' },
  { lat:35.402, lng:-86.671, name:'Marshall Space Flight Ctr',abbr:'MSFC',state:'AL', role:'Propulsion — birthplace of the Saturn V and SLS rockets',          col:'#ffca28' },
  { lat:29.978, lng:-90.054, name:'Michoud Assembly Facility',abbr:'MAF', state:'LA', role:'Manufacturing — Shuttle External Tanks and SLS Core Stage built here',col:'#00e5a0' },
  { lat:38.883, lng:-77.016, name:'NASA Headquarters',       abbr:'HQ',   state:'DC', role:'Central administration since 1958',                                col:'#ff3d21' },
  { lat:38.991, lng:-76.848, name:'Goddard Space Flight Ctr',abbr:'GSFC', state:'MD', role:'Earth science, Hubble Space Telescope and James Webb operations',   col:'#b06fff' },
  { lat:37.098, lng:-76.384, name:'Langley Research Center', abbr:'LaRC', state:'VA', role:"NASA's oldest center — aeronautics research since 1917",            col:'#b06fff' },
  { lat:41.977, lng:-87.901, name:'Glenn Research Center',   abbr:'GRC',  state:'OH', role:'Propulsion, power systems and communications research',            col:'#00d4ff' },
  { lat:37.416, lng:-122.053,name:'Ames Research Center',    abbr:'ARC',  state:'CA', role:'Aeronautics, astrobiology and supercomputing',                     col:'#00e5a0' },
  { lat:34.959, lng:-117.189,name:'Armstrong Flight Research',abbr:'AFRC',state:'CA', role:'Advanced aircraft and experimental vehicle testing',               col:'#00e5a0' },
  { lat:32.303, lng:-106.768,name:'White Sands Test Facility',abbr:'WSTF',state:'NM', role:'Propulsion and hazardous materials testing',                       col:'#00e5a0' },
];

/* ── ASTRONAUT BIRTHPLACES ── */
const ASTRONAUT_BIRTHS = [
  { lat:40.564, lng:-84.194, name:'Neil Armstrong',    mission:'Apollo 11 — 1st Human on the Moon',               born:'Wapakoneta, OH' },
  { lat:40.807, lng:-74.153, name:'Buzz Aldrin',       mission:'Apollo 11 — 2nd Human on the Moon',               born:'Glen Ridge, NJ' },
  { lat:42.887, lng:-71.275, name:'Alan Shepard',      mission:'Freedom 7 — 1st American in Space',               born:'East Derry, NH' },
  { lat:39.962, lng:-82.999, name:'John Glenn',        mission:'Friendship 7 — 1st American to Orbit Earth',      born:'Cambridge, OH' },
  { lat:41.499, lng:-81.694, name:'Jim Lovell',        mission:'Apollo 13 Commander',                              born:'Cleveland, OH' },
  { lat:29.424, lng:-98.493, name:'Ed White',          mission:'Gemini IV — 1st American Spacewalk',              born:'San Antonio, TX' },
  { lat:34.052, lng:-118.243,name:'Sally Ride',        mission:'STS-7 — 1st American Woman in Space',             born:'Los Angeles, CA' },
  { lat:34.606, lng:-86.983, name:'Mae Jemison',       mission:'STS-47 — 1st Black Woman in Space',               born:'Decatur, AL' },
  { lat:38.731, lng:-86.474, name:'Gus Grissom',       mission:'Mercury and Gemini pioneer',                      born:'Mitchell, IN' },
  { lat:42.232, lng:-83.352, name:'Christina Koch',    mission:'Artemis II — record 328-day ISS mission',         born:'Grand Rapids, MI' },
  { lat:34.058, lng:-117.288,name:'Victor Glover',     mission:'Artemis II — 1st Black astronaut to the Moon',    born:'Pomona, CA' },
  { lat:40.735, lng:-74.172, name:'Jared Isaacman',   mission:'Polaris Dawn — 1st commercial spacewalk (2024)',   born:'Westfield, NJ' },
];

/* ── MISSION EVENTS ── */
const EVENTS = [
  {
    year: 1958,
    name: 'NASA Founded',
    meta: 'Washington D.C. · July 29, 1958',
    desc: 'President Eisenhower signed NASA into existence, driven by Cold War urgency after Sputnik shocked the world in 1957. Eight thousand scientists and engineers — inherited from NACA — immediately began preparing for the greatest adventure in human history.',
    fact: "NASA was created just 11 months after Sputnik. Its first annual budget was $100 million. Today it receives roughly $25 billion per year. Within 3 years of its founding, it had launched an American into space.",
    dyk:  null,
    dist: 0,
    distLabel: 'Earth Surface · 0 miles',
    photos: ['https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg'],
    photoStyle: 'object-fit:contain;background:#010d22;padding:22px;',
    photoCap: 'NASA — established July 29, 1958',
    emoji: '🏛️',
    mapView: 'usa',
    markers: [
      { lat:38.883, lng:-77.016, label:'NASA HQ, Washington D.C.', desc:'Signed into law by President Eisenhower. NASA absorbed 8,000 employees from the old NACA.', col:'#ff3d21', type:'c' }
    ]
  },
  {
    year: 1961,
    name: 'Freedom 7 — 1st American in Space',
    meta: 'Cape Canaveral, FL · May 5, 1961',
    desc: "Alan Shepard climbed into a capsule barely bigger than a phone booth and rode a Redstone rocket 116 miles into space. His 15-minute flight proved humans could survive space travel. President Kennedy watched from the White House — and days later declared America would land on the Moon.",
    fact: "Shepard waited in the capsule for 4 hours due to weather delays. He had to urinate in his suit because they hadn't planned for that. He radioed: 'Fix your little problem and light this candle!' He reached 5,134 mph.",
    dyk:  null,
    dist: 116,
    distLabel: '116 miles — Suborbital Arc',
    photos: ['https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Alan_Shepard_in_spacesuit.jpg/480px-Alan_Shepard_in_spacesuit.jpg',
             'https://upload.wikimedia.org/wikipedia/commons/4/47/Alan_Shepard_in_spacesuit.jpg'],
    photoCap: 'Alan Shepard suited for Freedom 7, May 1961 (NASA)',
    emoji: '🚀',
    mapView: 'use',
    markers: [
      { lat:28.573, lng:-80.649, label:'Cape Canaveral, LC-5',         desc:"America's Space Age began here at 9:34 AM on May 5, 1961.",       col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston JSC, Mission Control', desc:'Tracked every second of the historic 15-minute flight.',           col:'#00d4ff', type:'c' },
      { lat:42.887, lng:-71.275, label:'East Derry, NH — birthplace',  desc:'Alan Shepard born November 18, 1923.',                            col:'#ffca28', type:'b' }
    ]
  },
  {
    year: 1962,
    name: 'Friendship 7 — 1st American Orbit',
    meta: 'Cape Canaveral, FL · February 20, 1962',
    desc: "John Glenn circled Earth three times in 4 hours 55 minutes. A faulty sensor suggested his heat shield might be loose — potentially fatal. Glenn kept calm, trusted his training, and splashed down safely. Australians in Perth turned on all city lights so he could see them from orbit. He could.",
    fact: "Glenn orbited at 17,500 mph. He became a US Senator for 25 years. In 1998 he flew again on the Space Shuttle at age 77, becoming the oldest person ever to fly in space.",
    dyk:  null,
    dist: 162,
    distLabel: '162 miles — Earth Orbit',
    photos: ['https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/John_Glenn_-_restoration.jpg/480px-John_Glenn_-_restoration.jpg',
             'https://upload.wikimedia.org/wikipedia/commons/2/26/John_Glenn_-_restoration.jpg'],
    photoCap: 'John Glenn, Friendship 7, February 1962 (NASA)',
    emoji: '🌍',
    mapView: 'use',
    markers: [
      { lat:28.573, lng:-80.649, label:'Cape Canaveral, LC-14', desc:'Atlas rocket lifted Glenn to orbit at 9:47 AM, February 20, 1962.', col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston JSC',            desc:'Mission Control managed the heat-shield alarm and guided Glenn home.', col:'#00d4ff', type:'c' },
      { lat:39.962, lng:-82.999, label:'Cambridge, OH — birthplace', desc:'John Herschel Glenn Jr. born July 18, 1921.',                  col:'#ffca28', type:'b' }
    ]
  },
  {
    year: 1965,
    name: 'Gemini IV — 1st American Spacewalk',
    meta: 'Cape Canaveral, FL · June 3, 1965',
    desc: "Ed White floated free outside Gemini IV for 23 glorious minutes, becoming the first American to walk in space. Armed with a handheld oxygen jet gun 100 miles up, he tumbled above the Pacific Ocean. Flight Director Chris Kraft ordered him back inside. White called returning to the capsule 'the saddest moment of my life.'",
    fact: "White's jet gun ran out of fuel and he had to pull himself back by his tether. He died in the Apollo 1 launchpad fire on January 27, 1967 — a tragedy that led to sweeping safety reforms that made the Moon landing possible.",
    dyk:  null,
    dist: 175,
    distLabel: '175 miles — Gemini Orbit',
    photos: ['img/Mercury_Original7_1959.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Ed_White_first_American_spacewalk.jpg/480px-Ed_White_first_American_spacewalk.jpg',
             'https://upload.wikimedia.org/wikipedia/commons/4/45/Ed_White_first_American_spacewalk.jpg'],
    photoCap: 'Ed White — first American spacewalk, Gemini IV, June 1965 (NASA)',
    emoji: '🧑‍🚀',
    mapView: 'use',
    markers: [
      { lat:28.573, lng:-80.649, label:'Kennedy Space Center, Pad 19', desc:'Gemini IV launched June 3, 1965 carrying Ed White and Jim McDivitt.', col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston, Mission Control',     desc:"Chris Kraft's team guided the 4-day Gemini IV mission.",             col:'#00d4ff', type:'c' },
      { lat:29.424, lng:-98.493, label:'San Antonio, TX — birthplace', desc:'Ed White born November 14, 1930.',                                  col:'#ffca28', type:'b' }
    ]
  },
  {
    year: 1969,
    name: 'Apollo 11 — First Moon Landing',
    meta: 'Sea of Tranquility · July 20, 1969',
    desc: "'The Eagle has landed.' At 4:17 PM EDT on July 20, 1969, Neil Armstrong and Buzz Aldrin touched down on the Moon. Six hours later Armstrong stepped onto the lunar surface: 'One small step for man, one giant leap for mankind.' Over 600 million people watched — one-fifth of all humanity.",
    fact: "The Apollo Guidance Computer had 64KB of memory at 0.043 MHz — a billion times less powerful than a smartphone. Armstrong manually flew around boulders with only 20 seconds of fuel remaining. His heart rate peaked at 150 bpm on landing.",
    dyk:  "Apollo 11 traveled 238,855 miles to the Moon — a journey of 3 days, 3 hours, 49 minutes. The lunar module's single ascent engine had just one start switch. If it failed, Armstrong and Aldrin would be stranded on the Moon forever. It worked perfectly.",
    dist: 238855,
    distLabel: '238,855 miles — The Moon',
    photos: ['https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Aldrin_Apollo_11_original.jpg/480px-Aldrin_Apollo_11_original.jpg',
             'https://upload.wikimedia.org/wikipedia/commons/9/98/Aldrin_Apollo_11_original.jpg'],
    photoCap: 'Buzz Aldrin on the lunar surface — July 20, 1969 (NASA / Neil Armstrong)',
    emoji: '🌕',
    mapView: 'uss',
    markers: [
      { lat:28.573, lng:-80.649, label:'Kennedy Space Center, LC-39A',     desc:'Apollo 11 launched July 16, 1969 — the most watched launch in history.',     col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston, Mission Control',          desc:'"Houston, Tranquility Base here. The Eagle has landed." — July 20, 1969.', col:'#ffca28', type:'c' },
      { lat:30.390, lng:-89.090, label:'Stennis Space Center',              desc:'All Saturn V first-stage engines tested here before every Apollo mission.',  col:'#00e5a0', type:'c' },
      { lat:40.564, lng:-84.194, label:'Wapakoneta, OH — Armstrong birth',  desc:'Neil Armstrong born August 5, 1930.',                                       col:'#ffca28', type:'b' },
      { lat:40.807, lng:-74.153, label:'Glen Ridge, NJ — Aldrin birth',     desc:'Buzz Aldrin born January 20, 1930.',                                        col:'#ffca28', type:'b' }
    ]
  },
  {
    year: 1970,
    name: 'Apollo 13 — Farthest Humans Ever',
    meta: 'Lunar Far Side · April 14–15, 1970',
    desc: "'Houston, we've had a problem.' An oxygen tank exploded 200,000 miles from Earth. Jim Lovell, Jack Swigert, and Fred Haise powered down to near-darkness, used the lunar module as a lifeboat, and navigated home by starlight. Mission Control worked 87 hours without sleep. All three came home alive.",
    fact: "The crew reached 248,655 miles from Earth while looping the lunar far side — the farthest any human has EVER traveled from our planet. Temperature dropped near freezing. They survived on 6 oz of water per day. This record still stands 56+ years later.",
    dyk:  "🏆 ALL-TIME RECORD: Apollo 13 took humans 248,655 miles from Earth — farther than anyone before or since. The crew looped the Moon's dark far side, using lunar gravity to slingshot them home. NASA called the successful rescue 'our finest hour.'",
    dist: 248655,
    distLabel: '248,655 mi · FARTHEST HUMANS EVER ★',
    photos: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Apollo_13_original.jpg/480px-Apollo_13_original.jpg',
             'https://upload.wikimedia.org/wikipedia/commons/0/0e/Apollo_13_original.jpg'],
    photoCap: 'Apollo 13 lunar module Aquarius — the lifeboat that saved three lives (NASA)',
    emoji: '💥',
    mapView: 'uss',
    markers: [
      { lat:28.573, lng:-80.649, label:'Kennedy Space Center',       desc:'Apollo 13 launched April 11, 1970. Explosion struck 56 hours into the flight.', col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston, Mission Control',   desc:'"Houston, we have had a problem." The world held its breath for 87 hours.',     col:'#ffca28', type:'c' },
      { lat:41.499, lng:-81.694, label:'Cleveland, OH — Lovell birth',desc:'Jim Lovell born March 25, 1928.',                                              col:'#ffca28', type:'b' }
    ]
  },
  {
    year: 1972,
    name: 'Apollo 17 — Last Footprints on the Moon',
    meta: 'Taurus-Littrow Valley · December 1972',
    desc: "Gene Cernan became the last human to walk on the Moon on December 14, 1972: 'We shall return.' The crew also captured the 'Blue Marble' — Earth as a fragile sphere in the black void — the most reproduced photograph in history. As of 2026, we are finally going back.",
    fact: "The 'Blue Marble' was shot with a Hasselblad camera from 28,000 miles away on December 7, 1972. It became the defining image of the environmental movement. No human has stood on the lunar surface since that December day.",
    dyk:  "🌍 The Blue Marble changed how humanity sees Earth — the first photograph of a fully illuminated planet. Artemis III will return humans to the lunar surface in 2026, 54 years after Apollo 17's final steps.",
    dist: 238855,
    distLabel: '238,855 miles — The Moon',
    photos: ['https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/480px-The_Earth_seen_from_Apollo_17.jpg',
             'https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg'],
    photoCap: '"The Blue Marble" — Earth from Apollo 17, December 7, 1972 (NASA)',
    emoji: '🌎',
    mapView: 'use',
    markers: [
      { lat:28.573, lng:-80.649, label:'Kennedy Space Center, LC-39A', desc:'Apollo 17 launched December 7, 1972 — the only Apollo night launch.',        col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston JSC',                  desc:"Mission Control watched Cernan take humanity's last steps on the Moon.",     col:'#00d4ff', type:'c' }
    ]
  },
  {
    year: 1981,
    name: 'Space Shuttle — First Flight',
    meta: 'Kennedy Space Center · April 12, 1981',
    desc: "Space Shuttle Columbia launched April 12, 1981 — exactly 20 years after Gagarin's first spaceflight. John Young and Bob Crippen opened 30 years of reusable Shuttle operations: 135 missions, building the ISS, deploying Hubble, and carrying the dreams of a generation.",
    fact: "The Shuttle's three main engines always ran at 109% of rated thrust. They could drain an Olympic swimming pool in 25 seconds. The orbiter landed as a 240,000-lb unpowered glider with no engine and no second chance.",
    dyk:  null,
    dist: 250,
    distLabel: '250 miles — Low Earth Orbit',
    photos: ['https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/STS-1_launch.jpg/480px-STS-1_launch.jpg',
             'https://upload.wikimedia.org/wikipedia/commons/9/9f/STS-1_launch.jpg'],
    photoCap: 'Space Shuttle Columbia — STS-1 launch, April 12, 1981 (NASA)',
    emoji: '🛸',
    mapView: 'uss',
    markers: [
      { lat:28.573, lng:-80.649, label:'Kennedy Space Center, LC-39A',     desc:'Home of all 135 Shuttle missions. The stack stood 184 feet tall.',          col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston JSC',                      desc:'All 135 Shuttle missions controlled from Mission Control in Houston.',        col:'#00d4ff', type:'c' },
      { lat:30.390, lng:-89.090, label:'Stennis SC, Mississippi',          desc:'Over 1,100 Shuttle main engine hot-fire tests performed here.',              col:'#ffca28', type:'c' },
      { lat:29.978, lng:-90.054, label:'Michoud, New Orleans, LA',         desc:'All 135 Shuttle External Tanks manufactured at Michoud Assembly Facility.',  col:'#ffca28', type:'c' },
      { lat:35.402, lng:-86.671, label:'Marshall SFC, Huntsville, AL',     desc:'Designed and managed all Shuttle propulsion systems.',                       col:'#00e5a0', type:'c' }
    ]
  },
  {
    year: 1998,
    name: 'International Space Station',
    meta: 'Low Earth Orbit · November 20, 1998',
    desc: "Russia's Zarya module launched November 20, 1998, beginning humanity's greatest engineering collaboration. Sixteen nations built a football-field-sized laboratory 254 miles above Earth. Continuously inhabited since November 2, 2000 — humanity has lived in space for over 25 years without interruption.",
    fact: "ISS astronauts see 16 sunrises every day, orbiting at 17,500 mph every 90 minutes. The station spans 357 feet across. Over 280 people from 23 countries have visited. You can spot it with the naked eye — it's the third brightest object in the sky.",
    dyk:  null,
    dist: 254,
    distLabel: '254 miles — ISS Orbital Altitude',
    photos: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/International_Space_Station_after_undocking_of_STS-132.jpg/800px-International_Space_Station_after_undocking_of_STS-132.jpg',
             'https://upload.wikimedia.org/wikipedia/commons/0/04/International_Space_Station_after_undocking_of_STS-132.jpg'],
    photoCap: 'The International Space Station photographed from Space Shuttle Atlantis (NASA)',
    emoji: '🛰️',
    mapView: 'world',
    markers: [
      { lat:28.573, lng:-80.649, label:'Kennedy Space Center',        desc:'All US ISS modules launched from KSC aboard Space Shuttles.',         col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston JSC, ISS Control',   desc:'ISS Flight Control Room monitors the station 24/7/365.',              col:'#00d4ff', type:'c' },
      { lat:45.965, lng:63.305,  label:'Baikonur, Kazakhstan',        desc:"Russia's historic launch site — all Soyuz crew missions depart here.", col:'#ffca28', type:'c' },
      { lat:36.130, lng:138.360, label:'JAXA, Tsukuba, Japan',        desc:"Japan's Space Center controls the ISS Kibo laboratory module.",        col:'#00e5a0', type:'c' }
    ]
  },
  {
    year: 2022,
    name: 'Artemis I — Moon & Distance Record',
    meta: 'Kennedy Space Center · November 16, 2022',
    desc: "NASA's Space Launch System — the most powerful rocket ever built — lit up the Florida night on November 16, 2022. The uncrewed Orion capsule traveled 268,553 miles from Earth on a 26-day voyage around the Moon, setting a new record for the farthest any crew-rated spacecraft has ever traveled.",
    fact: "SLS produced 8.8 million pounds of thrust — 15% more than the Saturn V. The mission ended with a splashdown on December 11, 2022. Artemis I broke Apollo 13's 52-year human-rated distance record and confirmed Orion is ready to carry astronauts.",
    dyk:  "🚀 Artemis I broke Apollo 13's 52-year-old distance record — traveling 268,553 miles from Earth in a spacecraft rated for humans. Artemis II will carry 4 astronauts on this same path. Artemis III will land them on the Moon's south pole to search for water ice.",
    dist: 268553,
    distLabel: '268,553 mi — New Spacecraft Record',
    photos: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Artemis_I_Launch_-_NHQ202211160006.jpg/480px-Artemis_I_Launch_-_NHQ202211160006.jpg',
             'https://upload.wikimedia.org/wikipedia/commons/b/b9/Artemis_I_Launch_-_NHQ202211160006.jpg'],
    photoCap: 'Artemis I night launch — November 16, 2022, Kennedy Space Center (NASA)',
    emoji: '',
    mapView: 'uss',
    markers: [
      { lat:28.573, lng:-80.649, label:'Kennedy Space Center, LC-39B',  desc:'Artemis launches from Pad 39B — same complex family as Saturn V.',           col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston JSC, Artemis Control',  desc:'JSC trains Artemis astronauts and manages all mission operations.',          col:'#00d4ff', type:'c' },
      { lat:30.390, lng:-89.090, label:'Stennis Space Center',          desc:'SLS core stage engines hot-fire tested for over 8 continuous minutes.',       col:'#ffca28', type:'c' },
      { lat:29.978, lng:-90.054, label:'Michoud, New Orleans',          desc:'SLS core stage — backbone of every Artemis mission — manufactured here.',    col:'#00e5a0', type:'c' },
      { lat:35.402, lng:-86.671, label:'Marshall SFC, Huntsville',      desc:'MSFC leads all SLS rocket development and systems engineering.',              col:'#00e5a0', type:'c' }
    ]
  },
  {
    year: 2024,
    name: 'Polaris Dawn — 1st Commercial Spacewalk',
    meta: 'Kennedy Space Center · September 10, 2024',
    desc: "SpaceX and the Polaris program made history on September 12, 2024 when Jared Isaacman and Sarah Gillis performed the first-ever commercial spacewalk from a Dragon capsule orbiting at 870 miles — the highest crewed orbit since the Apollo era. Four crew members spent 5 days in orbit wearing brand-new SpaceX EVA suits.",
    fact: "At 870 miles, Polaris Dawn crossed the Van Allen radiation belt — a zone of intense radiation most crewed missions avoid entirely. The mission proved private astronauts can conduct complex EVA operations completely independent of any space station.",
    dyk:  "Polaris Dawn reached 870 miles altitude — compare that to the ISS at only 254 miles. Isaacman and Gillis became the first private citizens to perform a spacewalk, floating above Earth tethered only to a Dragon capsule and wearing a brand-new SpaceX spacesuit.",
    dist: 870,
    distLabel: '870 miles — Highest Crewed Orbit Since Apollo',
    photos: ['https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Polaris_Dawn_mission_patch.png/480px-Polaris_Dawn_mission_patch.png',
             'https://upload.wikimedia.org/wikipedia/commons/1/1d/Polaris_Dawn_mission_patch.png'],
    photoCap: 'Polaris Dawn mission patch — first commercial spacewalk, September 2024',
    emoji: '⭐',
    mapView: 'uss',
    markers: [
      { lat:28.573, lng:-80.649, label:'Kennedy Space Center, LC-39A',   desc:'SpaceX Falcon 9 launched Polaris Dawn from Pad 39A on September 10, 2024.', col:'#00d4ff', type:'c' },
      { lat:40.735, lng:-74.172, label:'Westfield, NJ — Isaacman birth', desc:'Mission commander Jared Isaacman born February 11, 1983.',                 col:'#ffca28', type:'b' }
    ]
  },
  {
    year: 2025,
    name: 'Artemis II — First Crew to the Moon Since 1972',
    meta: 'Kennedy Space Center · 2025',
    desc: "Four astronauts — Reid Wiseman, Victor Glover, Christina Koch, and Canadian Jeremy Hansen — will fly around the Moon aboard NASA's Orion capsule. The first crewed lunar voyage since Apollo 17 in December 1972. Victor Glover becomes the first Black astronaut to travel to the Moon. Jeremy Hansen is the first non-American to fly there.",
    fact: "Christina Koch holds the record for the longest single spaceflight by a woman: 328 consecutive days on the ISS in 2019–2020. The mission flies a free-return trajectory — no landing, but the crew travels farther than any humans since Apollo 13's all-time distance record.",
    dyk:  "For the first time since December 1972 — over 53 years — humans will travel to the Moon. Artemis II is the pathfinder for Artemis III, which will land on the lunar south pole to search for water ice. These missions are humanity's gateway to Mars.",
    dist: 238855,
    distLabel: '238,855 miles — 1st Crew to Moon Since 1972',
    photos: ['https://images-assets.nasa.gov/image/NHQ202209120003/NHQ202209120003~thumb.jpg',
             'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg'],
    photoCap: 'Artemis II crew: Wiseman, Glover, Koch, Hansen — humanity returns to the Moon (NASA)',
    emoji: '🌕',
    mapView: 'uss',
    markers: [
      { lat:28.573, lng:-80.649, label:'Kennedy Space Center, LC-39B',   desc:'Artemis II will launch from Pad 39B on the Space Launch System.',            col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston JSC, Crew HQ',           desc:'All 4 Artemis II astronauts trained at Johnson Space Center in Houston.',     col:'#00d4ff', type:'c' },
      { lat:30.390, lng:-89.090, label:'Stennis Space Center',           desc:'Artemis II SLS engines certified at Stennis Space Center.',                  col:'#ffca28', type:'c' },
      { lat:35.402, lng:-86.671, label:'Marshall SFC, Huntsville',       desc:'Marshall Space Flight Center leads all SLS rocket development.',             col:'#00e5a0', type:'c' },
      { lat:42.232, lng:-83.352, label:'Grand Rapids, MI — Koch birth',  desc:'Christina Koch — record female spaceflight, Artemis II crew member.',        col:'#ffca28', type:'b' },
      { lat:34.058, lng:-117.288,label:'Pomona, CA — Glover birth',      desc:'Victor Glover — 1st Black astronaut to travel to the Moon.',                 col:'#ffca28', type:'b' }
    ]
  }
];



// Another possible structure? more event objects below
// {
//   id: string,
//   title: string,
//   subtitle: string,
//   type: "event" | "mission" | "program" | "era" | "record",

//   startYear: number,
//   endYear: number | null,

//   dateLabel: string, // human-readable original date text

//   location: {
//     name: string,
//     coords: [lng, lat] | null
//   },

//   metrics: {
//     distance: number | null,
//     distanceUnit: "mi" | "km" | null,
//     durationSec: number | null,
//     altitude: number | null
//   },

//   people: string[],

//   media: {
//     hero: string | null,
//     info: string[]
//   },

//   description: string,
//   funFact: string | null
// }

// {
//   id: "wright_1903",
//   title: "First Powered Flight",
//   subtitle: "Wilbur and Orville Wright",
//   type: "event",

//   startYear: 1903,
//   endYear: null,
//   dateLabel: "Dec 17, 1903",

//   location: {
//     name: "Kill Devil Hills, Kitty Hawk, NC",
//     coords: [-75.6776147, 36.0321186]
//   },

//   metrics: {
//     distance: 0.16,
//     distanceUnit: "mi",
//     durationSec: 59,
//     altitude: 10
//   },

//   people: ["Wilbur Wright", "Orville Wright"],

//   media: {
//     hero: "WrightBros_FirstFlight_1903.jpg",
//     info: ["WrightBros_GliderKited_1901.jpg"]
//   },

//   description: "First successful powered flight.",
//   funFact: "The Wright brothers designed their own wind tunnel and engine."
// },
// {
//   id: "nasa_1958",
//   title: "NASA is Born",
//   subtitle: null,
//   type: "event",

//   startYear: 1958,

//   dateLabel: "Oct 1, 1958",

//   location: {
//     name: "Washington, DC",
//     coords: [-77.0363849, 38.8950982]
//   },

//   metrics: {},

//   people: [],

//   media: {
//     hero: "NASA_FirstHeadquarters1958.jpg",
//     info: []
//   },

//   description: "NASA officially begins operations.",
//   funFact: "Built on the foundation of NACA (founded 1915)."
// },
// {
//   id: "mercury_7",
//   title: "The Original Seven",
//   subtitle: "First NASA Astronaut Class",
//   type: "program",

//   startYear: 1959,

//   dateLabel: "Apr 9, 1959",

//   location: {
//     name: "Washington, DC",
//     coords: [-77.0363849, 38.8950982]
//   },

//   people: [
//     "John Glenn",
//     "Alan Shepard",
//     "Gus Grissom",
//     "Scott Carpenter",
//     "Gordon Cooper",
//     "Deke Slayton",
//     "Wally Schirra"
//   ],

//   media: {
//     hero: "Mercury_Original7_1959.jpg",
//     info: ["Mercury_Original7bw_1959.jpg"]
//   },

//   description: "NASA’s first astronaut selection.",
//   funFact: null
// },
// {
//   id: "mercury_program",
//   title: "Project Mercury",
//   subtitle: "First Human Spaceflight Program",
//   type: "program",

//   startYear: 1961,
//   endYear: 1963,

//   dateLabel: "1961–1963",

//   location: {
//     name: "Cape Canaveral, FL",
//     coords: [-80.6, 28.5]
//   },

//   metrics: {
//     durationSec: 34 * 3600
//   },

//   people: ["Alan Shepard", "John Glenn"],

//   media: {
//     hero: "Mercury_MissionControl_1962.jpg",
//     info: []
//   },

//   description: "Proved humans can survive spaceflight.",
//   funFact: "Six crewed missions proved basic human spaceflight viability."
// },
// {
//   id: "shepard_1961",
//   title: "First American in Space",
//   subtitle: "Freedom 7",
//   type: "mission",

//   startYear: 1961,
//   dateLabel: "May 5, 1961",

//   location: {
//     name: "Cape Canaveral, FL",
//     coords: [-80.6, 28.5]
//   },

//   metrics: {
//     durationSec: 928
//   },

//   people: ["Alan Shepard"],

//   media: {
//     hero: "Mercury_AlanShepard_1961.jpg",
//     info: []
//   },

//   description: "First US human spaceflight.",
//   funFact: null
// },
// {
//   id: "glenn_1962",
//   title: "First U.S. Orbit of Earth",
//   subtitle: "Friendship 7",
//   type: "mission",

//   startYear: 1962,
//   dateLabel: "Feb 20, 1962",

//   location: {
//     name: "Cape Canaveral, FL",
//     coords: [-80.6, 28.5]
//   },

//   metrics: {
//     durationSec: 17723
//   },

//   people: ["John Glenn"],

//   media: {
//     hero: "Mercury_Atlas6_1962.jpg",
//     info: []
//   },

//   description: "First American orbital flight.",
//   funFact: null
// }, 
// {
//   id: "gemini_program",
//   title: "Project Gemini",
//   subtitle: "Spacewalks & docking",
//   type: "program",

//   startYear: 1961,
//   endYear: 1966,

//   dateLabel: "1961–1966",

//   location: {
//     name: "Houston, TX (MSC)",
//     coords: [-95.0, 29.6]
//   },

//   metrics: {},

//   people: [],

//   media: {
//     hero: "Gemini_MissionControlHouston_1965.jpg",
//     info: []
//   },

//   description: "Bridged Mercury to Apollo.",
//   funFact: null
// },
// {
//   id: "white_eva_1965",
//   title: "First American Spacewalk",
//   subtitle: "Gemini IV",
//   type: "mission",

//   startYear: 1965,
//   dateLabel: "June 3, 1965",

//   location: {
//     name: "Low Earth Orbit",
//     coords: null
//   },

//   metrics: {
//     durationSec: 97 * 3600 + 56 * 60 + 12
//   },

//   people: ["Ed White"],

//   media: {
//     hero: "Gemini_EdWhiteEVA_1965.jpg",
//     info: []
//   },

//   description: "First U.S. EVA.",
//   funFact: null
// },
// {
//   id: "apollo1",
//   title: "Apollo 1: Our First Loss",
//   subtitle: "Launchpad fire tragedy",
//   type: "mission",

//   startYear: 1967,
//   dateLabel: "Jan 27, 1967",

//   location: {
//     name: "Cape Canaveral, FL",
//     coords: [-80.6, 28.5]
//   },

//   metrics: {},

//   people: ["Gus Grissom", "Ed White", "Roger Chaffee"],

//   media: {
//     hero: "Apollo_Apollo1Crew_1966.jpg",
//     info: []
//   },

//   description: "Fire during ground test killed three astronauts.",
//   funFact: "Led to major redesign of Apollo safety systems."
// },
// {
//   id: "apollo8",
//   title: "First Humans to Orbit the Moon",
//   subtitle: "Apollo 8",
//   type: "mission",

//   startYear: 1968,
//   dateLabel: "Dec 21–27, 1968",

//   location: {
//     name: "Lunar Orbit",
//     coords: null
//   },

//   metrics: {
//     durationSec: 6 * 24 * 3600
//   },

//   people: ["Frank Borman", "James Lovell", "William Anders"],

//   media: {
//     hero: "Apollo8_Earthrise.jpg",
//     info: []
//   },

//   description: "First crew to leave Earth orbit.",
//   funFact: "Famous 'Earthrise' photo taken during this mission."
// },
// {
//   id: "apollo11",
//   title: "One Giant Leap",
//   subtitle: "Moon Landing",
//   type: "mission",

//   startYear: 1969,
//   dateLabel: "July 20, 1969",

//   location: {
//     name: "Moon",
//     coords: null
//   },

//   metrics: {
//     distance: 238855,
//     distanceUnit: "mi"
//   },

//   people: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins"],

//   media: {
//     hero: "apollo11.jpg",
//     info: []
//   },

//   description: "First human landing on the Moon.",
//   funFact: "Michael Collins remained in lunar orbit alone."
// },
// {
//   id: "whitson_record",
//   title: "Most Time in Space",
//   type: "record",
//   startYear: 2020,
//   dateLabel: "Ongoing record",

//   metrics: {
//     durationSec: 665 * 24 * 3600
//   }
// },
// {
//   id: "artemis2",
//   title: "Artemis II",
//   subtitle: "Return to the Moon Era Begins",
//   type: "mission",

//   startYear: 2026,
//   dateLabel: "April 2026",

//   location: {
//     name: "Deep Space / Lunar Trajectory",
//     coords: null
//   },

//   metrics: {
//     distance: 252756,
//     distanceUnit: "mi",
//     durationSec: 10 * 24 * 3600
//   },

//   people: [
//     "Reid Wiseman",
//     "Victor Glover",
//     "Christina Koch",
//     "Jeremy Hansen"
//   ],

//   media: {
//     hero: "artemisII.jpg",
//     info: []
//   },

//   description: "First crewed Artemis mission around the Moon.",
//   funFact: "Marks humanity’s return to deep space after Apollo."
// }];
