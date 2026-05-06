var EVENTS = [

  /* ── 1958 ── */
  {
    year:1958, name:'NASA Founded',
    meta:'Washington D.C. · July 29, 1958',
    desc:'President Eisenhower signed the National Aeronautics and Space Act into law, driven by Cold War urgency after Sputnik shocked the world in October 1957. Eight thousand scientists and engineers — inherited from the old NACA — immediately began work on the greatest adventure in human history.',
    fact:"NASA was officially created just 11 months after Sputnik. Within 3 years, America had already launched their first astronaut towards the final frontier.",
    dyk:"🏛️ NASA almost didn't exist. Congress initially wanted a military space agency, not a civilian one. President Eisenhower insisted on a civilian agency to project peaceful intentions. NASA's founding document, the Space Act of 1958, remains the legal foundation for all US human spaceflight today.",
    locAdv:"NASA was signed into law by President Eisenhower and absorbed 8,000 employees from NACA. NASA's first annual budget was $100 million (today it's ~$25 billion).",
    dist:0, distLabel:'Earth Surface · 0 miles',
    photos:['https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg'],
    photoStyle:'object-fit:contain;background:#010d22;padding:22px;',
    photoCap:'NASA — established July 29, 1958',
    emoji:'🏛️',
    mapView:'usa',
    markers:[
      { lat:38.883, lng:-77.016, label:'NASA HQ · Washington D.C.', desc:'LOCATION PRO: Direct Congressional oversight | Proximity to policy makers',       col:'#ff3d21', type:'c' }
    ]
  },

  /* ── 1961 ── */
  {
    year:1961, name:'Freedom 7 — 1st American in Space',
    meta:'Cape Canaveral, FL · May 5, 1961',
    desc:"Alan Shepard climbed into a capsule barely bigger than a phone booth and rode a Redstone rocket 116 miles into space. His 15-minute flight proved humans could survive space travel. President Kennedy watched from the White House; only days later, he declared America would land on the Moon before the decade was out.",
    fact:"Shepard waited in the capsule 4 hours due to weather and technical delays. He famously radioed: 'Why don't you fix your little problem and light this candle!' He reached 5,134 mph and experienced 5 full minutes of weightlessness.",
    dyk:"🚀 The Redstone rocket that launched Shepard was originally designed as a nuclear ballistic missile. NASA's engineers had to convince military officials to let them use it for a human flight. The capsule was so small that Shepard had to be carefully folded inside — engineers called it 'wearing the spacecraft.'",
    locAdv:"America's Space Age began at Cape Canaveral's Launch Complex 5 at 9:34 AM on May 5, 1961. Several states away, Houston's Mission Control tracked every second of Shepard's historic 15-minute suborbital flight.",
    dist:116, distLabel:'116 miles — Suborbital Arc',
    photos:['img/Mercury_AlanShepard_Freedom7Capsule_1961.jpg'],
    photoCap:'Alan Shepard suited for Freedom 7, May 1961 (NASA)',
    emoji:'🚀',
    mapView:'usa-e',
    markers:[
      { lat:28.573, lng:-80.649, label:'Cape Canaveral · LC-5',          desc:"LOCATION PRO: over-ocean launch safety | vehicle velocity boost from Earth's rotation (maximized at low latitudes)", col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston JSC · Mission Control',  desc:'LOCATION PRO: Access to deep-water transport | Moderate climate | Nearby universities and industrial industry',         col:'#00d4ff', type:'c' },
      { lat:42.887, lng:-71.275, label:'East Derry, NH · Shepard born',  desc:'Alan Bartlett Shepard Jr. born November 18, 1923.',                         col:'#ffca28', type:'b' }
    ]
  },

  /* ── 1962 ── */
  {
    year:1962, name:'Friendship 7 — 1st American Orbit',
    meta:'Cape Canaveral, FL · February 20, 1962',
    desc:"John Glenn orbited Earth three times in 4 hours 55 minutes. A faulty sensor caused a mid-flight scare; it indicated his heat shield might be loose, a potentially fatal defect for reentry. Glenn kept his cool, trusted his training, and splashed down safely.",
    fact:"Glenn orbited at 17,500 mph, crossing 3 continents. He later served 24 years as a US Senator for Ohio. In 1998, at age 77, he flew again aboard Space Shuttle Discovery, the oldest person ever in space.",
    dyk:"🌍 The Perth, Australia 'City of Lights' moment became one of the most beloved stories in spaceflight history. As Glenn orbited over the Australian continent, the entire city of Perth switched on their lights — residents, farms, and even ships in the harbor. Glenn confirmed he could see them clearly from 100 miles up. To this day, Perth still calls itself the 'City of Light.'",
    locAdv:"The Atlas rocket lifted Glenn to orbit at 9:47 AM, February 20, 1962. The rocket's trajectory from Cape Canaveral was precisely calculated to pass over a global network of tracking stations in Bermuda, the Canary Islands, and Australia. Back in Houston, Mission Control managed the life-threatening heat shield alarm.",
    dist:162, distLabel:'162 miles — Earth Orbit',
    photos:['https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/John_Glenn_-_restoration.jpg/480px-John_Glenn_-_restoration.jpg'],
    photoCap:'John Glenn, Friendship 7, February 1962 (NASA)',
    emoji:'🌍',
    mapView:'usa-e',
    markers:[
      { lat:28.573, lng:-80.649, label:'Cape Canaveral · LC-14',        desc:"LOCATION PRO: over-ocean launch safety | vehicle velocity boost from Earth's rotation (maximized at low latitudes)", col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston · Mission Control',     desc:'LOCATION PRO: Access to deep-water transport | Moderate climate | Nearby industrial industry and universities', col:'#00d4ff', type:'c' },
      { lat:39.962, lng:-82.999, label:'Cambridge, OH · Glenn born',    desc:'John Herschel Glenn Jr. born July 18, 1921.', col:'#ffca28', type:'b' }
    ]
  },

  /* ── 1965 ── */
  {
    year:1965, name:'Gemini IV — 1st American Spacewalk',
    meta:'Cape Canaveral, FL · June 3, 1965',
    desc:"The Mercury missions proved humanity could survive in the unforgiving environment of space. The Gemini missions put that survival to the test. Each mission was a wild experiment that tested the limits of both rocket and man. Gemini IV launched June 3, 1965 with Ed White and Jim McDivitt. Once in orbit, Ed White floated free outside Gemini IV for 23 glorious minutes over the Pacific Ocean, 100 miles up. He used a small handheld oxygen jet gun to maneuver and called it 'the most comfortable part of the mission.' Flight Director Chris Kraft eventually had to order him back inside. White said re-entering was 'the saddest moment of my life.'",
    fact:"White's jet gun ran out of fuel with 10 minutes of scheduled EVA remaining - he had to pull himself back to the capsule via the tether. White would later lose his life in the Apollo I launchpad fire on January 27, 1967 alongside Gus Grissom and Roger Chaffee. Their sacrifice - NASA's first tragedy - reshaped the safety culture of space exploration forever.",
    dyk:"🧑‍🚀 White's spacewalk was unplanned until 3 days before launch. NASA decided to add the EVA only after Alexei Leonov, a Soviet cosmonaut, sucessfully completed humanity's first spacewalk 10 weeks earlier. NASA engineers hastily added a handheld maneuvering unit to Gemini IV's payload - White's jet gun. The photos of White floating free above Earth would go on to become some of the most iconic images in space history.",
    locAdv:"Launch Complex 19 at Cape Canaveral was specifically built for the Gemini program. Two parallel pads enabled NASA to rapidly fly 10 crewed Gemini missions in just 20 months, rapidly learning the skills needed for Apollo.",
    dist:175, distLabel:'175 miles — Gemini Orbit',
    photos:['img/Gemini_EdwardWhiteGeminiTitan4_1965.jpg'],
    photoCap:'Ed White — 1st American spacewalk, Gemini IV, June 1965 (NASA)',
    emoji:'🧑‍🚀',
    mapView:'usa-e',
    markers:[
      { lat:28.573, lng:-80.649, label:'Kennedy Space Center · Launch Complex 19',        desc:"LOCATION PRO: over-ocean launch safety | vehicle velocity boost from Earth's rotation (maximized at low latitudes) | moderate climate | nearby supporting industry", col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston · Mission Control',      desc:"LOCATION PRO: Access to deep-water transport | Moderate climate | Nearby universities and industrial industry",  col:'#00d4ff', type:'c' },
      { lat:29.424, lng:-98.493, label:'San Antonio, TX · White born',   desc:'Edward Higgins White II born November 14, 1930.',                  col:'#ffca28', type:'b' }
    ]
  },

  /* ── 1969 ── */
  {
    year:1969, name:'Apollo 11 — One Small Step, One Giant Leap',
    meta:'Sea of Tranquility · July 20, 1969',
    desc:"'The Eagle has landed.' At 4:17 PM EDT on July 20, 1969, Neil Armstrong and Buzz Aldrin touched down on the Moon's surface while Michael Collins stayed in lunar orbit above. With the eyes of the entire world watching, Armstrong stepped onto the lunar surface: 'That's one small step for man, one giant leap for mankind.'",
    fact:"The Apollo Guidance Computer had 64KB of memory - nearly a billion times less than today's smartphones. During lunar touchdown, Armstrong manually piloted around a boulder field with only 20 seconds of fuel remaining. Before leaving the Moon's surface, the crew left a plaque: 'We came in peace for all mankind.'",
    dyk:"🌕 The Apollo 11 lunar module's single ascent engine had one start switch. If it failed, Armstrong and Aldrin would be stranded on the Moon with no rescue possible. NASA engineer Don Eyles stayed up 36 hours straight writing a software patch when a computer alarm triggered during landing. He fixed it. It worked. Nobody told the astronauts how close they came to disaster.",
    locAdv:"Kennedy Space Center's massive VAB (Vehicle Assembly Building) was built specifically for Saturn V. At 526 feet tall, it's one of the largest buildings on Earth by volume. Its coastal location allowed finished rockets to be floated by barge from Michoud in Louisiana.",
    dist:238855, distLabel:'238,855 miles — The Moon',
    photos:['img/Apollo_Apollo11Aldrin_1969.jpg'],
    photoCap:'Buzz Aldrin on the lunar surface — July 20, 1969 (NASA / Neil Armstrong)',
    emoji:'🌕',
    mapView:'usa-s',
    markers:[
      { lat:28.573, lng:-80.649, label:'Kennedy Space Center · Launch Complex 39A', desc:"LOCATION PRO: over-ocean launch safety | vehicle velocity boost from Earth's rotation (maximized at low latitudes) | moderate climate | nearby supporting industry",   col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston · Mission Control',      desc:'LOCATION PRO: Access to deep-water transport | Moderate climate | Nearby universities and industrial industry', col:'#ffca28', type:'c' },
      { lat:30.390, lng:-89.090, label:'Stennis Space Center · MS',      desc:'LOCATION PRO: Waterway transport access | Massive buffer zone to protect nearby communities from rocket testing noises and vibrations', col:'#00e5a0', type:'c' },
      { lat:29.978, lng:-90.054, label:'Michoud Assembly Facility · New Orleans, LA',      desc:'LOCATION PRO: Deep-water port for transportation of rockets', col:'#00e5a0', type:'c' },
      { lat:40.564, lng:-84.194, label:'Wapakoneta, OH · Armstrong born',desc:'Neil Alden Armstrong born August 5, 1930.',  col:'#ffca28', type:'b' },
      { lat:40.807, lng:-74.153, label:'Glen Ridge, NJ · Aldrin born',   desc:'Buzz Aldrin born January 20, 1930.',          col:'#ffca28', type:'b' }
    ]
  },

  /* ── 1970 ── */
  {
    year:1970, name:"Apollo 13 — 'Houston, We\'ve Had a Problem'",
    meta:'Lunar Far Side · April 14–15, 1970',
    desc:"'Houston, we've had a problem.' An oxygen tank exploded 56 hours into Apollo 13's flight, 200,000 miles from Earth. Commander Jim Lovell, Jack Swigert, and Fred Haise powered down to near-darkness, used the lunar module as a lifeboat, and navigated home by starlight. Mission Control worked 87 consecutive hours. After a harrowing 5 days 22 hours 54 minutes and 41 seconds, the three atronauts splashed down safe and sound.",
    fact:"The crew traveled 248,655 miles from Earth's surface while looping around the far side of the Moon - the farthest humanity ventured from our planet until Artemis II. It was not a cozy ride. Temperatures dropped to near freezing and the men survived on 6 oz of water per day.",
    dyk:"🏆 LONG-TIME DISTANCE RECORD: Apollo 13's accidental 248,655-mile record (an incidental achievement of the emergency response trajectory) held for 52 years - the longest-standing record in spaceflight history. The crew had to manually navigate using Earth and the Moon as reference points, like ancient mariners using stars, because most instruments were off to conserve power. The CO₂ scrubber fix built from a sock, cardboard, and a plastic bag saved their lives.",
    locAdv:"During Apollo 13, 22 separate Mission Control shifts worked around the clock to bring the crew home - one of the greatest team rescues in engineering history.",
    dist:248655, distLabel:'248,655 mi · ★ DISTANCE RECORD UNTIL 2026 ★',
    photos:['img/Apollo_Apollo13SpaceModule_1970.jpg'],
    photoCap:'Apollo 13 lunar module Aquarius — the lifeboat that saved three lives (NASA)',
    emoji:'💥',
    mapView:'usa-s',
    markers:[
      { lat:28.573, lng:-80.649, label:'Kennedy Space Center',           desc:"LOCATION PRO: over-ocean launch safety | vehicle velocity boost from Earth's rotation (maximized at low latitudes) | moderate climate | nearby supporting industry", col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston · Mission Control',      desc:'LOCATION PRO: Access to deep-water transport | Moderate climate | Nearby universities and industrial industry', col:'#ffca28', type:'c' },
      { lat:41.499, lng:-81.694, label:'Cleveland, OH · Lovell born',    desc:'James Arthur Lovell Jr. born March 25, 1928.', col:'#ffca28', type:'b' }
    ]
  },

  /* ── 1972 ── */
  {
    year:1972, name:'Apollo 17 — Last Footprints on the Moon',
    meta:'Taurus-Littrow Valley · December 1972',
    desc:"Gene Cernan and geologist Harrison Schmitt spent 3 days exploring the lunar surface while Ron Evans orbited above. On December 14, Cernan paused at the ladder: 'As I take these last steps from the surface for some time to come, I believe history will record that America's challenge of today has forged man's destiny of tomorrow.' He climbed in. The hatch closed.",
    fact:"The 'Blue Marble' — the first photograph of a fully-lit Earth was taken by the Apollo 17 crew from 28,000 miles away on December 7, 1972. It is the most reproduced photograph in human history.",
    dyk:"🌎 The Blue Marble photo changed how humanity sees Earth. Before Apollo 17, there was no single photograph showing our entire planet fully illuminated. The photo was so powerful that Greenpeace used it, the first Earth Day was inspired partly by it, and it appeared on the cover of the Whole Earth Catalog. Cernan was the last human to walk on the Moon and whispered his daughter's initials (TDC) into the lunar dust before leaving.",
    locAdv:"Apollo 17 was the only night launch in Apollo history. The Saturn V's launch was so bright, people could see it from 500 miles away. Once on the Moon, Cernan, Schmitt, and Evans drove the Lunar Rover a record 22 miles across the Taurus-Littrow Valley, collecting 243 pounds of Moon rocks.",
    dist:238855, distLabel:'238,855 miles — The Moon',
    photos:['https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/480px-The_Earth_seen_from_Apollo_17.jpg'],
    photoCap:'"The Blue Marble" Earth from Apollo 17, December 7, 1972 (NASA)',
    emoji:'🌎',
    mapView:'usa-s',
    markers:[
      { lat:28.573, lng:-80.649, label:'Kennedy Space Center · LC-39A Night Launch',    desc:"LOCATION PRO: over-ocean launch safety | vehicle velocity boost from Earth's rotation (maximized at low latitudes) | moderate climate | nearby supporting industry", col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston JSC · Mission Control',  desc:'LOCATION PRO: Access to deep-water transport | Moderate climate | Nearby universities and industrial industry',                  col:'#00d4ff', type:'c' }
    ]
  },

  /* ── 1981 ── */
  {
    year:1981, name:'Space Shuttle — First Flight STS-1',
    meta:'Kennedy Space Center · April 12, 1981',
    desc:"Space Shuttle Columbia roared to life on April 12, 1981 — exactly 20 years after Soviet cosmonaut Yuri Gagarin's first human space flight. John Young and Bob Crippen rode the world's first reusable spacecraft into orbit, marking the start of 30 years of Space Shuttle operations: 135 missions, construction of the International Space Station, Hubble Space Telescope deployed, and an entire generation of astronauts and scientists.",
    fact:"The Shuttle's three main engines always ran at 109% of rated thrust. They could drain an Olympic swimming pool in 25 seconds. The orbiter landed as a 240,000-pound unpowered glider — no engine, no second chance, no go-around. Pilots had one shot. Over the course of 135 missions, not one Shuttle pilot missed their mark.",
    dyk:"🛸 The Space Shuttle was the world's first reusable spacecraft — but it was never meant to fly 135 missions. NASA originally projected each orbiter would fly up to 100 times before retirement. Columbia flew only 27 times. The heat shield's ceramic tiles — 24,000 of them on each orbiter — had to be hand-inspected between every single flight. Each tile was unique, like a fingerprint.",
    locAdv:"The Shuttle's solid rocket boosters were manufactured in Utah and shipped by rail to the Kennedy Space Center. All 135 Shuttle External Tanks were built at Michoud in New Orleans and floated by barge around Florida. Over 1,100 Shuttle main engine hot-fire tests were performed at Stennis Space Center in Mississippi. This supply chain touched five Gulf Coast states — making the Shuttle a true product of southeastern America.",
    dist:250, distLabel:'250 miles — Low Earth Orbit',
    photos:['https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/STS-1_launch.jpg/480px-STS-1_launch.jpg'],
    photoCap:'Space Shuttle Columbia · STS-1, April 12, 1981 (NASA)',
    emoji:'🛸',
    mapView:'usa-s',
    markers:[
      { lat:28.573, lng:-80.649, label:'Kennedy Space Center · LC-39A — Shuttle Launch',  desc:"LOCATION PRO: over-ocean launch safety | vehicle velocity boost from Earth's rotation (maximized at low latitudes) | moderate climate | nearby supporting industry",      col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston JSC · Mission Control',  desc:'LOCATION PRO: Access to deep-water transport | Moderate climate | Nearby universities and industrial industry',       col:'#00d4ff', type:'c' },
      { lat:30.390, lng:-89.090, label:'Stennis SC · Mississippi',       desc:'LOCATION PRO: Waterway transport access | Massive buffer zone to protect nearby communities from rocket testing noises and vibrations',        col:'#ffca28', type:'c' },
      { lat:29.978, lng:-90.054, label:'Michoud · New Orleans, LA',      desc:'LOCATION PRO: Deep-water port for transportation of rockets',         col:'#00e5a0', type:'c' },
      { lat:34.631, lng:-86.661, label:'Marshall Space Flight Center · Huntsville, AL',  desc:"LOCATION PRO: Est. in 1960 within the U.S. Army's Redstone Arsenal (missile facility) | nearby missile and propulsion industry expertise",              col:'#ffca28', type:'c' }
    ]
  },

  /* ── 1998 ── */
  {
    year:1998, name:'International Space Station',
    meta:'Low Earth Orbit · November 20, 1998',
    desc:"Russia's Zarya module launched on November 20, 1998, marking an end to the US-Soviet Space Race and beginning humanity's greatest international engineering collaboration - a partnership that is ongoing today! In the following years, sixteen nations worked together to build a football-field-sized laboratory 254 miles above Earth. Continuously inhabited since November 2, 2000, humanity has now lived in space for over 25 consecutive years without interruption. The ISS Flight Control Room in Houston monitors the station 24/7/365.'",
    fact:"ISS astronauts see 16 sunrises every single day. Zooming along at 17,500 mph, they complete an Earth orbit every 90 minutes. The station spans 361 feet across - about the length of an American football field. Over 280 people from 23 countries have visited. If you watch closely on a clear night, you can spot it with the naked eye: a small speck orbiting peacefully high above.",
    dyk:"🛰️ The ISS is the most expensive object ever built by humans $150 billion across all participating nations. It was assembled piece by piece over 13 years and 42 assembly flights. The station's science has given us water-purification technology, improved cancer treatments, and fire-resistant textiles. Every single water molecule aboard is recycled including sweat and urine achieving 93% water recovery efficiency.",
    locAdv:"The ISS orbit was carefully chosen at 51.6° inclination, steep enough to fly over most partner nations (US, Russia, Europe, Japan, Canada) while still allowing launch trajectories from multiple sites around the world. The station passes over 90% of Earth's populated areas.",
    dist:254, distLabel:'254 miles — ISS Orbital Altitude', 
    photos:['https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/International_Space_Station_after_undocking_of_STS-132.jpg/800px-International_Space_Station_after_undocking_of_STS-132.jpg'],
    photoCap:'The International Space Station from Space Shuttle Atlantis (NASA)',
    emoji:'🛰️',
    mapView:'world',
    markers:[
      { lat:28.573, lng:-80.649, label:'Kennedy Space Center',         desc:"LOCATION PRO: over-ocean launch safety | vehicle velocity boost from Earth's rotation (maximized at low latitudes) | moderate climate | nearby supporting industry", col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston JSC · ISS Control',   desc:'LOCATION PRO: Access to deep-water transport | Moderate climate | Nearby universities and industrial industry', col:'#00d4ff', type:'c' },
      { lat:45.965, lng: 63.305, label:'Baikonur Cosmodrome · Kazakhstan',       desc:"LOCATION PRO: Relative low latitude | Surrounding desert allows safety and security | Nearby railway transport for rockets and parts", col:'#ffca28', type:'c' },
      { lat:36.130, lng:138.360, label:'JAXA · Tsukuba, Japan',       desc:"LOCATION PRO: Proximity to Tokyo | Surrounding industry, research institutes, and universities", col:'#00e5a0', type:'c' }
    ]
  },

  /* ── 2022 ── */
  {
    year:2022, name:'Artemis I — First Step Back to the Moon',
    meta:'Kennedy Space Center · November 16, 2022',
    desc:"NASA's Space Launch System, the most powerful rocket ever built, lit up the Florida night on November 16, 2022. The uncrewed Orion capsule traveled 268,553 miles from Earth on a 26 day journey around the Moon, a dry run of future crewed lunar missions. The mission ended with a perfect splashdown on December 11, confirming the Orion capsule is spaceworthy and ready to carry astronauts to the Moon.",
    fact:"SLS produced 8.8 million pounds of thrust at liftoff, 15% more than the Saturn V, the previous record holder. The 322-foot rocket burned through 733,000 gallons of propellant in 8 minutes.",
    dyk:"🌙 Artemis I carried 10 small CubeSat satellites as secondary payloads, including one designed to search for water ice at lunar poles. The Orion capsule experienced re-entry temperatures of 5,000°F — half the temperature of the Sun's surface. Its heat shield worked flawlessly.",
    locAdv:"SLS launched from KSC's Pad 39B — the same complex family as Saturn V. Pad 39B was rebuilt specifically for SLS — requiring removal of the Shuttle era lightning towers and installation of a new flame trench drainage system. The mobile launcher tower, standing 380 feet tall, is the tallest structure ever used for a NASA rocket.",
    dist:268553, distLabel:'268,553 miles — Distant Retrograde Orbit, Moon',
    photos:['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Artemis_I_Launch_-_NHQ202211160006.jpg/480px-Artemis_I_Launch_-_NHQ202211160006.jpg'],
    photoCap:'Artemis I night launch · November 16, 2022 · Kennedy Space Center (NASA)',
    emoji:'🌙',
    mapView:'usa-s',
    markers:[
      { lat:28.573, lng:-80.649, label:'Kennedy Space Center · LC-39B — Artemis Launch', desc:"LOCATION PRO: over-ocean launch safety | vehicle velocity boost from Earth's rotation (maximized at low latitudes) | moderate climate | nearby supporting industry",         col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston JSC · Artemis Control', desc:'LOCATION PRO: Access to deep-water transport | Moderate climate | Nearby universities and industrial industry',         col:'#00d4ff', type:'c' },
      { lat:30.390, lng:-89.090, label:'Stennis SC · Engine Testing',   desc:'LOCATION PRO: Waterway transport access | Massive buffer zone to protect nearby communities from rocket testing noises and vibrations',    col:'#ffca28', type:'c' },
      { lat:29.978, lng:-90.054, label:'Michoud · SLS Core Stage',      desc:'LOCATION PRO: Deep-water port for transportation of rockets',    col:'#00e5a0', type:'c' },
      { lat:34.631, lng:-86.661, label:'Marshall SFC · Huntsville',     desc:"LOCATION PRO: Est. in 1960 within the U.S. Army's Redstone Arsenal (missile facility) | nearby missile and propulsion industry expertise", col:'#ffca28', type:'c' }
    ]
  },

  /* ── 2024 ── */
  {
    year:2024, name:'Polaris Dawn — Commercial Spacewalk',
    meta:'Kennedy Space Center · September 10, 2024',
    desc:"In recent years, several new space powers have joined NASA on the playing field. SpaceX and the Polaris program made history on September 12, 2024 when Jared Isaacman and Sarah Gillis performed the first-ever commercial spacewalk from a Dragon capsule orbiting at 870 miles altitude — the highest crewed flight since the Apollo era. All four crew members spent 5 days in orbit in brand-new SpaceX EVA suits.",
    fact:"At 870 miles altitude, Polaris Dawn crossed directly through the Van Allen radiation belt — a zone of intense particle radiation that most crewed missions deliberately avoid. The crew received a radiation dose roughly equivalent to 24 chest X-rays. The mission proved private astronauts can conduct complex EVA operations. Though the crew trained with SpaceX in California, NASA provided critical support throughout the mission.",
    dyk:"⭐ Polaris Dawn had the fastest pace of any private spaceflight mission. Isaacman and Gillis became the first people to perform a spacewalk without an airlock — the Dragon hatch simply opened to space and they floated out, tethered to the capsule. The suits they wore were designed entirely by SpaceX — the first non-NASA spacesuit used for an actual spacewalk in US spaceflight history.",
    locAdv:"SpaceX's Pad 39A at Kennedy Space Center — the same pad that launched Apollo 11 to the Moon — is now leased by SpaceX and has launched more crewed missions than any other pad in history. Its proximity to SpaceX's Hawthorne, CA design facility and Cape facilities creates an integrated rapid-launch capability.",
    dist:870, distLabel:'870 miles — Highest Crewed Orbit Since Apollo',
    photos:['https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Polaris_Dawn_mission_patch.png/480px-Polaris_Dawn_mission_patch.png'],
    photoCap:'Polaris Dawn mission patch — first commercial spacewalk, September 2024',
    emoji:'⭐',
    mapView:'usa-s',
    markers:[
      { lat:28.573, lng:-80.649, label:'Kennedy Space Center · LC-39A — SpaceX Pad',     desc:"LOCATION PRO: over-ocean launch safety | vehicle velocity boost from Earth's rotation (maximized at low latitudes) | moderate climate | nearby supporting industry", col:'#00d4ff', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston JSC',                   desc:'LOCATION PRO: Access to deep-water transport | Moderate climate | Nearby universities and industrial industry',   col:'#00e5a0', type:'c' },
      { lat:40.735, lng:-74.172, label:'Westfield, NJ · Isaacman born', desc:'Mission commander Jared Isaacman born February 11, 1983.',                   col:'#ffca28', type:'b' }
    ]
  },

  /* ── 2026 ── */
  {
    year:2026, name:'Artemis II — Moon Joy For All Humanity',
    meta:'Kennedy Space Center · April 1-11, 2026',
    desc:"Four astronauts — Reid Wiseman, Victor Glover, Christina Koch, and Canadian Jeremy Hansen — brought humanity back to lunar orbit aboard NASA's Orion capsule atop the Space Launch System. This was the first crewed lunar voyage since Apollo 17 in December 1972, over 53 years before. The crew stretched the boundary of human space exploration by traveling 252,756 miles from the Earth's surface - breaking Apollo 13's long-standing record by nearly 4,100 miles.",
    fact:"Christina Koch is no stranger to pushing boundaries. Now the first woman to fly to the moon, she also holds the record for the longest single spaceflight by a woman: 328 consecutive days on the ISS in 2019–2020. Her crewmembers also hold their own records: Victor Glover became the first African American and Jeremy Hansen of Canada became the first non-American to travel to the Moon.",
    dyk:"🌕 For the first time since December 1972 — over 53 years — humans left Earth orbit and traveled to the Moon. Artemis II is the pathfinder for Artemis III, which will land astronauts on the lunar south pole to search for water ice that could support permanent human presence on the lunar surface. If water ice is confirmed in useful quantities, it changes everything — rocket fuel, drinking water, and oxygen can all be made from lunar ice.",
    locAdv:"The Artemis crew trains at both Johnson Space Center in Houston (mission simulations, EVA training in the Neutral Buoyancy Lab) and at Kennedy Space Center (launch vehicle familiarization and emergency egress procedures). The Gulf Coast corridor from KSC to Marshall to Michoud to Stennis to JSC represents the complete Artemis supply chain.",
    dist:238855, distLabel:'238,855 miles — First Crew to Moon Since 1972',
    photos:['img/christinakoch_braidsinorbit.jpg'],
    photoStyle:'object-fit:contain;background:#010d22;padding:22px;',
    photoCap:'"First braids to leave Earth orbit. (unconfirmed)" - Artemis II Christina Koch gazes at Earth from the Orion capsule, April 2026 (NASA/astro_christina on Instagram)',
    emoji:'🌕',
    mapView:'usa-s',
    markers:[
      { lat:28.573, lng:-80.649, label:'KSC · LC-39B — Artemis II',     desc:"LOCATION PRO: over-ocean launch safety | vehicle velocity boost from Earth's rotation (maximized at low latitudes) | moderate climate | nearby supporting industry",              col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston JSC · Crew Training',   desc:'LOCATION PRO: Access to deep-water transport | Moderate climate | Nearby universities and industrial industry',    col:'#00d4ff', type:'c' },
      { lat:30.390, lng:-89.090, label:'Stennis · Engine Certification', desc:'LOCATION PRO: Waterway transport access | Massive buffer zone to protect nearby communities from rocket testing noises and vibrations',                  col:'#ffca28', type:'c' },
      { lat:34.631, lng:-86.661, label:'Marshall SFC · Huntsville, AL', desc:"LOCATION PRO: Est. in 1960 within the U.S. Army's Redstone Arsenal (missile facility) | nearby missile and propulsion industry expertise",                   col:'#00e5a0', type:'c' },
      { lat:29.978, lng:-90.054, label:'Michoud · New Orleans, LA',     desc:'LOCATION PRO: Deep-water port for transportation of rockets',                   col:'#00e5a0', type:'c' },
      { lat:42.232, lng:-83.352, label:'Grand Rapids, MI · Koch born',  desc:'Christina Koch — record-holding female astronaut, Artemis II crew.',       col:'#ffca28', type:'b' },
      { lat:34.058, lng:-117.288,label:'Pomona, CA · Glover born',      desc:'Victor Glover — 1st African American astronaut to travel to the Moon.',               col:'#ffca28', type:'b' }
    ]
  }

];

var NASA_CENTERS = [
  { lat:28.573, lng:-80.649, name:'Kennedy Space Center',       abbr:'KSC',  state:'FL', role:'Launch site for ALL crewed NASA missions since 1961',                     col:'#ff3d21' },
  { lat:29.559, lng:-95.089, name:'Johnson Space Center',       abbr:'JSC',  state:'TX', role:'Mission Control & astronaut training — heart of human spaceflight',        col:'#00d4ff' },
  { lat:30.390, lng:-89.090, name:'Stennis Space Center',       abbr:'SSC',  state:'MS', role:'Rocket engine testing — Saturn V, Shuttle & SLS all tested here',          col:'#ffca28' },
  { lat:34.631, lng:-86.661, name:'Marshall Space Flight Ctr',  abbr:'MSFC', state:'AL', role:'Propulsion engineering — birthplace of Saturn V and SLS',                  col:'#ffca28' },
  { lat:29.978, lng:-90.054, name:'Michoud Assembly Facility',  abbr:'MAF',  state:'LA', role:'Manufacturing — Shuttle tanks & SLS core stage built here',                col:'#00e5a0' },
  { lat:38.883, lng:-77.016, name:'NASA Headquarters',          abbr:'HQ',   state:'DC', role:'Central administration, policy, and budget since 1958',                    col:'#ff3d21' },
  { lat:38.991, lng:-76.848, name:'Goddard Space Flight Ctr',   abbr:'GSFC', state:'MD', role:'Earth science, Hubble & James Webb telescope operations',                  col:'#b06fff' },
  { lat:37.098, lng:-76.384, name:'Langley Research Center',    abbr:'LaRC', state:'VA', role:"NASA's oldest center — aeronautics research since 1917",                   col:'#b06fff' },
  { lat:41.977, lng:-87.901, name:'Glenn Research Center',      abbr:'GRC',  state:'OH', role:'Propulsion, power systems & communications research',                      col:'#00d4ff' },
  { lat:37.416, lng:-122.053,name:'Ames Research Center',       abbr:'ARC',  state:'CA', role:'Aeronautics, astrobiology & high-performance computing',                   col:'#00e5a0' },
  { lat:34.959, lng:-117.189,name:'Armstrong Flight Research',  abbr:'AFRC', state:'CA', role:'Advanced aircraft & experimental vehicle flight testing',                  col:'#00e5a0' },
  { lat:32.303, lng:-106.768,name:'White Sands Test Facility',  abbr:'WSTF', state:'NM', role:'Propulsion & hazardous materials testing',                                 col:'#00e5a0' },
];

/* ━━━━━━━━━━━━━━━━ ASTRONAUT BIRTHPLACES ━━━━━━━━━━━━━━━━ */
// var ASTRONAUT_BIRTHS = [
//   { lat:40.564, lng:-84.194, name:'Neil Armstrong',    mission:'Apollo 11 — 1st Human on the Moon',            born:'Wapakoneta, OH' },
//   { lat:40.807, lng:-74.153, name:'Buzz Aldrin',       mission:'Apollo 11 — 2nd Human on the Moon',            born:'Glen Ridge, NJ' },
//   { lat:42.887, lng:-71.275, name:'Alan Shepard',      mission:'Freedom 7 — 1st American in Space',            born:'East Derry, NH' },
//   { lat:39.962, lng:-82.999, name:'John Glenn',        mission:'Friendship 7 — 1st American to Orbit',         born:'Cambridge, OH' },
//   { lat:41.499, lng:-81.694, name:'Jim Lovell',        mission:'Apollo 13 — Saved crew from disaster',         born:'Cleveland, OH' },
//   { lat:29.424, lng:-98.493, name:'Ed White',          mission:'Gemini IV — 1st American Spacewalk',           born:'San Antonio, TX' },
//   { lat:34.052, lng:-118.243,name:'Sally Ride',        mission:'STS-7 — 1st American Woman in Space',          born:'Los Angeles, CA' },
//   { lat:34.606, lng:-86.983, name:'Mae Jemison',       mission:'STS-47 — 1st Black Woman in Space',            born:'Decatur, AL' },
//   { lat:38.731, lng:-86.474, name:'Gus Grissom',       mission:'Mercury / Gemini pioneer',                     born:'Mitchell, IN' },
//   { lat:42.232, lng:-83.352, name:'Christina Koch',    mission:'Artemis II — record female spaceflight 328 days', born:'Grand Rapids, MI' },
//   { lat:34.058, lng:-117.288,name:'Victor Glover',     mission:'Artemis II — 1st Black astronaut to Moon orbit',  born:'Pomona, CA' },
//   { lat:40.735, lng:-74.172, name:'Jared Isaacman',    mission:'Polaris Dawn — 1st commercial spacewalk 2024', born:'Westfield, NJ' },
// ];