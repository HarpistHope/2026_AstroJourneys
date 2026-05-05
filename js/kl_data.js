var EVENTS = [

  /* ── 1958 ── */
  {
    year:1958, name:'NASA Founded',
    meta:'Washington D.C. · July 29, 1958',
    desc:'President Eisenhower signed the National Aeronautics and Space Act into law, driven by Cold War urgency after Sputnik shocked the world in October 1957. Eight thousand scientists and engineers — inherited from the old NACA — immediately began the greatest adventure in human history.',
    fact:"NASA was created just 11 months after Sputnik. Its first annual budget was $100 million (today it's ~$25 billion). Within 3 years it had launched an American into space.",
    dyk:"🏛️ NASA almost didn't exist. Congress initially wanted a military space agency, not a civilian one. President Eisenhower insisted on a civilian agency to project peaceful intentions. NASA's founding document, the Space Act of 1958, remains the legal foundation for all US human spaceflight today.",
    locAdv:"Washington D.C. was chosen for NASA HQ for direct Congressional oversight and proximity to policy makers — critical for securing the massive budgets needed to reach the Moon.",
    dist:0, distLabel:'Earth Surface · 0 miles',
    photos:['https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg'],
    photoStyle:'object-fit:contain;background:#010d22;padding:22px;',
    photoCap:'NASA — established July 29, 1958',
    emoji:'🏛️',
    mapView:'usa',
    markers:[
      { lat:38.883, lng:-77.016, label:'NASA HQ · Washington D.C.', desc:'Signed into law by President Eisenhower. NASA absorbed 8,000 employees from NACA.',       col:'#ff3d21', type:'c' }
    ]
  },

  /* ── 1961 ── */
  {
    year:1961, name:'Freedom 7 — 1st American in Space',
    meta:'Cape Canaveral, FL · May 5, 1961',
    desc:"Alan Shepard climbed into a capsule barely bigger than a phone booth and rode a Redstone rocket 116 miles into space. His 15-minute flight proved humans could survive space travel. Kennedy watched from the White House — and days later declared America would land on the Moon before the decade was out.",
    fact:"Shepard waited in the capsule 4 hours due to weather and technical delays. He famously radioed: 'Why don't you fix your little problem and light this candle!' He reached 5,134 mph and experienced 5 full minutes of weightlessness.",
    dyk:"🚀 The Redstone rocket that launched Shepard was originally designed as a nuclear ballistic missile. NASA's engineers had to convince military officials to let them use it for a human flight. The capsule was so small that Shepard had to be carefully folded inside — engineers called it 'wearing the spacecraft.'",
    locAdv:"Cape Canaveral's location at 28.5° latitude — as far south as possible in the continental US — gives rockets a crucial speed boost from Earth's rotation, reducing fuel needed to reach orbit by ~900 mph.",
    dist:116, distLabel:'116 miles — Suborbital Arc',
    photos:['https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Alan_Shepard_in_spacesuit.jpg/480px-Alan_Shepard_in_spacesuit.jpg'],
    photoCap:'Alan Shepard suited for Freedom 7, May 1961 (NASA)',
    emoji:'🚀',
    mapView:'usa-e',
    markers:[
      { lat:28.573, lng:-80.649, label:'Cape Canaveral · LC-5',          desc:"America's Space Age began here at 9:34 AM on May 5, 1961.", col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston JSC · Mission Control',  desc:'Tracked every second of the historic 15-minute suborbital flight.',         col:'#00d4ff', type:'c' },
      { lat:42.887, lng:-71.275, label:'East Derry, NH · Shepard born',  desc:'Alan Bartlett Shepard Jr. born November 18, 1923.',                         col:'#ffca28', type:'b' }
    ]
  },

  /* ── 1962 ── */
  {
    year:1962, name:'Friendship 7 — 1st American Orbit',
    meta:'Cape Canaveral, FL · February 20, 1962',
    desc:"John Glenn circled Earth three times in 4 hours 55 minutes. A faulty sensor mid-flight suggested his heat shield might be loose potentially fatal on reentry. Glenn kept his cool, trusted his training, and splashed down safely. Australians in Perth turned on all their city lights so he could see them from orbit. He could.",
    fact:"Glenn orbited at 17,500 mph, crossing 3 continents. He later served 24 years as a US Senator for Ohio. In 1998, at age 77, he flew again aboard Space Shuttle Discovery the oldest person ever in space.",
    dyk:"🌍 The Perth, Australia 'City of Lights' moment became one of the most beloved stories in spaceflight history. As Glenn passed over at night, the entire city switched on their lights — residents, farms, and even ships in the harbor. Glenn confirmed he could see them clearly from 100 miles up. Perth still calls itself the 'City of Light.'",
    locAdv:"The Atlas rocket's trajectory from Cape Canaveral was calculated to pass over tracking stations in Bermuda, the Canary Islands, and Australia,a global network that made orbital missions possible.",
    dist:162, distLabel:'162 miles — Earth Orbit',
    photos:['https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/John_Glenn_-_restoration.jpg/480px-John_Glenn_-_restoration.jpg'],
    photoCap:'John Glenn, Friendship 7, February 1962 (NASA)',
    emoji:'🌍',
    mapView:'usa-e',
    markers:[
      { lat:28.573, lng:-80.649, label:'Cape Canaveral · LC-14',        desc:'Atlas rocket lifted Glenn to orbit at 9:47 AM, February 20, 1962.', col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston · Mission Control',     desc:'Mission Control managed the life-threatening heat shield alarm.', col:'#00d4ff', type:'c' },
      { lat:39.962, lng:-82.999, label:'Cambridge, OH · Glenn born',    desc:'John Herschel Glenn Jr. born July 18, 1921.', col:'#ffca28', type:'b' }
    ]
  },

  /* ── 1965 ── */
  {
    year:1965, name:'Gemini IV — 1st American Spacewalk',
    meta:'Cape Canaveral, FL · June 3, 1965',
    desc:"Ed White floated free outside Gemini IV for 23 glorious minutes over the Pacific Ocean, 100 miles up. He used a small handheld oxygen jet gun to maneuver and called it 'the most comfortable part of the mission.' Flight Director Chris Kraft eventually had to order him back inside. White said re-entering was 'the saddest moment of my life.'",
    fact:"White's jet gun ran out of fuel with 10 minutes of EVA remaining and he had to pull himself back via the tether. He died in the Apollo 1 launchpad fire on January 27, 1967 alongside Gus Grissom and Roger Chaffee a tragedy that reshaped NASA safety culture.",
    dyk:"🧑‍🚀 White's spacewalk was unplanned until 3 days before launch. NASA only decided to add the EVA after Alexei Leonov's Soviet spacewalk 10 weeks earlier. Engineers hastily added a handheld maneuvering unit. The photos White took with one hand while floating free became some of the most iconic images in space history.",
    locAdv:"Launch Complex 19 at Cape Canaveral was specifically built for the Gemini program two pads in parallel that enabled NASA to rapidly fly 10 crewed Gemini missions in just 20 months, learning the skills needed for Apollo.",
    dist:175, distLabel:'175 miles — Gemini Orbit',
    photos:['https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Ed_White_first_American_spacewalk.jpg/480px-Ed_White_first_American_spacewalk.jpg'],
    photoCap:'Ed White — 1st American spacewalk, Gemini IV, June 1965 (NASA)',
    emoji:'🧑‍🚀',
    mapView:'usa-e',
    markers:[
      { lat:28.573, lng:-80.649, label:'KSC · Launch Complex 19',        desc:'Gemini IV launched June 3, 1965 with Ed White and Jim McDivitt.', col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston · Mission Control',      desc:"Chris Kraft's team guided the 4-day Gemini IV mission from JSC.",  col:'#00d4ff', type:'c' },
      { lat:29.424, lng:-98.493, label:'San Antonio, TX · White born',   desc:'Edward Higgins White II born November 14, 1930.',                  col:'#ffca28', type:'b' }
    ]
  },

  /* ── 1969 ── */
  {
    year:1969, name:'Apollo 11 — First Moon Landing',
    meta:'Sea of Tranquility · July 20, 1969',
    desc:"'The Eagle has landed.' At 4:17 PM EDT on July 20, 1969, Neil Armstrong and Buzz Aldrin touched down on the Moon while Michael Collins orbited above. Six hours later, Armstrong stepped onto the lunar surface: 'One small step for man, one giant leap for mankind.' An estimated 600 million people watched one-fifth of all humanity.",
    fact:"The Apollo Guidance Computer had 64KB of memory a billion times less than today's smartphones. Armstrong manually piloted around a boulder field with only 20 seconds of fuel remaining. The crew left a plaque: 'We came in peace for all mankind.'",
    dyk:"🌕 The Apollo 11 lunar module's single ascent engine had one start switch. If it failed, Armstrong and Aldrin would be stranded on the Moon with no rescue possible. NASA engineer Don Eyles stayed up 36 hours straight writing a software patch when a computer alarm triggered during landing. He fixed it. It worked. Nobody told the astronauts how close they came.",
    locAdv:"Kennedy Space Center's massive VAB (Vehicle Assembly Building) was built specifically for Saturn V at 526 feet tall, it's one of the largest buildings on Earth by volume. Its coastal location allowed finished rockets to be floated by barge from Michoud in Louisiana.",
    dist:238855, distLabel:'238,855 miles — The Moon',
    photos:['https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Aldrin_Apollo_11_original.jpg/480px-Aldrin_Apollo_11_original.jpg'],
    photoCap:'Buzz Aldrin on the lunar surface — July 20, 1969 (NASA / Neil Armstrong)',
    emoji:'🌕',
    mapView:'usa-s',
    markers:[
      { lat:28.573, lng:-80.649, label:'KSC · Launch Complex 39A',       desc:'Apollo 11 launched July 16, 1969 the most watched event in history.',   col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston · Mission Control',      desc:'"Houston, Tranquility Base here. The Eagle has landed." July 20, 1969.', col:'#ffca28', type:'c' },
      { lat:30.390, lng:-89.090, label:'Stennis SC · MS',                desc:'All Saturn V first-stage F-1 engines tested here before every Apollo mission.', col:'#00e5a0', type:'c' },
      { lat:29.978, lng:-90.054, label:'Michoud · New Orleans, LA',      desc:'Saturn V S-IC first stage the most powerful rocket stage ever built manufactured here.', col:'#00e5a0', type:'c' },
      { lat:40.564, lng:-84.194, label:'Wapakoneta, OH · Armstrong born',desc:'Neil Alden Armstrong born August 5, 1930.',  col:'#ffca28', type:'b' },
      { lat:40.807, lng:-74.153, label:'Glen Ridge, NJ · Aldrin born',   desc:'Buzz Aldrin born January 20, 1930.',          col:'#ffca28', type:'b' }
    ]
  },

  /* ── 1970 ── */
  {
    year:1970, name:'Apollo 13 — Farthest Humans Ever',
    meta:'Lunar Far Side · April 14–15, 1970',
    desc:"'Houston, we've had a problem.' An oxygen tank exploded 200,000 miles from Earth. Commander Jim Lovell, Jack Swigert, and Fred Haise powered down to near-darkness, used the lunar module as a lifeboat, and navigated home by starlight. Mission Control worked 87 consecutive hours. All three splashed down alive.",
    fact:"The crew reached 248,655 miles from Earth while looping the lunar far side the farthest any human has EVER traveled from our planet. Temperature dropped to near freezing. They survived on 6 oz of water per day. This distance record stood 52 years until Artemis I broke it in 2022.",
    dyk:"🏆 ALL-TIME HUMAN DISTANCE RECORD: Apollo 13's 248,655-mile record held for 52 years the longest-standing record in spaceflight history. The crew had to manually navigate using Earth and the Moon as reference points, like ancient mariners using stars, because most instruments were off to conserve power. The CO₂ scrubber fix built from a sock, cardboard, and a plastic bag saved their lives.",
    locAdv:"Mission Control's location in Houston was chosen partly because of its proximity to Gulf Coast manufacturing and NASA's human spaceflight teams. During Apollo 13, 22 separate Mission Control shifts worked around the clock to bring the crew home the greatest team rescue in engineering history.",
    dist:248655, distLabel:'248,655 mi · ★ FARTHEST HUMANS EVER ★',
    photos:['https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Apollo_13_original.jpg/480px-Apollo_13_original.jpg'],
    photoCap:'Apollo 13 lunar module Aquarius — the lifeboat that saved three lives (NASA)',
    emoji:'💥',
    mapView:'usa-s',
    markers:[
      { lat:28.573, lng:-80.649, label:'Kennedy Space Center',           desc:'Apollo 13 launched April 11, 1970. Explosion struck 56 hours into flight.', col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston · Mission Control',      desc:'"Houston, we\'ve had a problem." 87 hours of non-stop crisis management.', col:'#ffca28', type:'c' },
      { lat:41.499, lng:-81.694, label:'Cleveland, OH · Lovell born',    desc:'James Arthur Lovell Jr. born March 25, 1928.', col:'#ffca28', type:'b' }
    ]
  },

  /* ── 1972 ── */
  {
    year:1972, name:'Apollo 17 — Last Footprints on the Moon',
    meta:'Taurus-Littrow Valley · December 1972',
    desc:"Gene Cernan and geologist Harrison Schmitt spent 3 days exploring the lunar surface while Ron Evans orbited above. On December 14, Cernan paused at the ladder: 'As I take these last steps from the surface for some time to come I believe history will record that America's challenge of today has forged man's destiny of tomorrow.' Then he climbed in. The hatch closed.",
    fact:"The 'Blue Marble' — the first photograph of a fully lit Earth was taken by the Apollo 17 crew from 28,000 miles away on December 7, 1972. It is the most reproduced photograph in human history. It launched the environmental movement. No human has returned to the Moon's surface since.",
    dyk:"🌎 The Blue Marble photo changed how humanity sees Earth. Before Apollo 17, there was no single photograph showing our entire planet fully illuminated. The photo was so powerful that Greenpeace used it, the first Earth Day was inspired partly by it, and it appeared on the cover of the Whole Earth Catalog. Cernan was the last human to walk on the Moon and whispered his daughter's initials (TDC) into the lunar dust before leaving.",
    locAdv:"Apollo 17 was the only night launch in Apollo history the Saturn V lit up the sky so brightly it was visible from 500 miles away. Cernan, Schmitt, and Evans drove the Lunar Rover a record 22 miles across the Taurus-Littrow Valley, collecting 243 pounds of Moon rocks.",
    dist:238855, distLabel:'238,855 miles — The Moon',
    photos:['https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/480px-The_Earth_seen_from_Apollo_17.jpg'],
    photoCap:'"The Blue Marble" Earth from Apollo 17, December 7, 1972 (NASA)',
    emoji:'🌎',
    mapView:'usa-s',
    markers:[
      { lat:28.573, lng:-80.649, label:'KSC · LC-39A Night Launch',    desc:'Apollo 17 launched December 7, 1972 only Apollo night launch, seen 500 miles away.', col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston JSC · Mission Control',  desc:"Mission Control watched Cernan take humanity's last steps on the Moon.",                  col:'#00d4ff', type:'c' }
    ]
  },

  /* ── 1981 ── */
  {
    year:1981, name:'Space Shuttle — First Flight STS-1',
    meta:'Kennedy Space Center · April 12, 1981',
    desc:"Space Shuttle Columbia roared to life on April 12, 1981 — exactly 20 years after Gagarin's first flight. John Young and Bob Crippen rode the world's first reusable spacecraft into orbit, opening 30 years of Shuttle operations: 135 missions, the International Space Station built, Hubble Space Telescope deployed, and an entire generation of astronauts.",
    fact:"The Shuttle's three main engines always ran at 109% of rated thrust. They could drain an Olympic swimming pool in 25 seconds. The orbiter landed as a 240,000-pound unpowered glider — no engine, no second chance, no go-around. Pilots had one shot.",
    dyk:"🛸 The Space Shuttle was the world's first reusable spacecraft — but it was never meant to fly 135 missions. NASA originally projected each orbiter would fly up to 100 times before retirement. Columbia flew only 27 times. The heat shield's ceramic tiles — 24,000 of them on each orbiter — had to be hand-inspected between every single flight. Each tile was unique, like a fingerprint.",
    locAdv:"The Shuttle's solid rocket boosters were manufactured in Utah and shipped by rail to the Kennedy Space Center. The external tank was built at Michoud in New Orleans and floated by barge around Florida. This supply chain touched five Gulf Coast states — making the Shuttle a true product of southeastern America.",
    dist:250, distLabel:'250 miles — Low Earth Orbit',
    photos:['https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/STS-1_launch.jpg/480px-STS-1_launch.jpg'],
    photoCap:'Space Shuttle Columbia · STS-1, April 12, 1981 (NASA)',
    emoji:'🛸',
    mapView:'usa-s',
    markers:[
      { lat:28.573, lng:-80.649, label:'KSC · LC-39A — Shuttle Launch',  desc:'Home of all 135 Shuttle missions. Vehicle stack stood 184 feet tall.',      col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston JSC · Mission Control',  desc:'All 135 Shuttle missions controlled from Mission Control in Houston.',       col:'#00d4ff', type:'c' },
      { lat:30.390, lng:-89.090, label:'Stennis SC · Mississippi',       desc:'Over 1,100 Shuttle main engine hot-fire tests performed at Stennis.',        col:'#ffca28', type:'c' },
      { lat:29.978, lng:-90.054, label:'Michoud · New Orleans, LA',      desc:'All 135 Shuttle External Tanks manufactured and tested at Michoud.',         col:'#00e5a0', type:'c' },
      { lat:35.402, lng:-86.671, label:'Marshall SFC · Huntsville, AL',  desc:'Marshall designed and managed all Shuttle propulsion systems.',              col:'#ffca28', type:'c' }
    ]
  },

  /* ── 1998 ── */
  {
    year:1998, name:'International Space Station',
    meta:'Low Earth Orbit · November 20, 1998',
    desc:"Russia's Zarya module launched November 20, 1998, beginning humanity's greatest engineering collaboration. Sixteen nations built a football-field-sized laboratory 254 miles above Earth. Continuously inhabited since November 2, 2000 humanity has now lived in space for over 25 consecutive years without interruption.",
    fact:"ISS astronauts see 16 sunrises every single day, orbiting at 17,500 mph every 90 minutes. The station spans 357 feet across wider than a football field. Over 280 people from 23 countries have visited. You can spot it with the naked eye it's the third-brightest object in the night sky after the Sun and Moon.",
    dyk:"🛰️ The ISS is the most expensive object ever built by humans $150 billion across all participating nations. It was assembled piece by piece over 13 years and 42 assembly flights. The station's science has given us water-purification technology, improved cancer treatments, and fire-resistant textiles. Every single water molecule aboard is recycled including sweat and urine achieving 93% water recovery efficiency.",
    locAdv:"The ISS orbit was carefully chosen at 51.6° inclination steep enough to fly over most partner nations (US, Russia, Europe, Japan, Canada) while still allowing launch from multiple sites around the world. It passes over 90% of Earth's populated areas.",
    dist:254, distLabel:'254 miles — ISS Orbital Altitude',
    photos:['https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/International_Space_Station_after_undocking_of_STS-132.jpg/800px-International_Space_Station_after_undocking_of_STS-132.jpg'],
    photoCap:'The International Space Station from Space Shuttle Atlantis (NASA)',
    emoji:'🛰️',
    mapView:'world',
    markers:[
      { lat:28.573, lng:-80.649, label:'Kennedy Space Center',         desc:'All US ISS modules launched from KSC aboard Space Shuttles.', col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston JSC · ISS Control',   desc:'ISS Flight Control Room in Houston monitors the station 24/7/365.', col:'#00d4ff', type:'c' },
      { lat:45.965, lng: 63.305, label:'Baikonur · Kazakhstan',       desc:"Russia's historic launch site all Soyuz crew missions to ISS depart here.", col:'#ffca28', type:'c' },
      { lat:36.130, lng:138.360, label:'JAXA · Tsukuba, Japan',       desc:"Japan's Space Center controls the ISS Kibo laboratory module.", col:'#00e5a0', type:'c' }
    ]
  },

  /* ── 2022 ── */
  {
    year:2022, name:'Artemis I — New Distance Record',
    meta:'Kennedy Space Center · November 16, 2022',
    desc:"NASA's Space Launch System the most powerful rocket ever built lit up the Florida night on November 16, 2022. The uncrewed Orion capsule traveled 268,553 miles from Earth on a 26 day journey around the Moon, breaking Apollo 13's 52-year distance record. The mission ended with a perfect splashdown on December 11, confirming Orion is ready for crew.",
    fact:"SLS produced 8.8 million pounds of thrust at liftoff 15% more than the Saturn V, the previous record holder. The 322-foot rocket burned through 733,000 gallons of propellant in 8 minutes. Orion flew farther from Earth than any spacecraft designed to carry humans.",
    dyk:"🌙 Artemis I carried 10 small CubeSat satellites as secondary payloads, including one searching for water ice at lunar poles. The Orion capsule experienced re-entry temperatures of 5,000°F — half the temperature of the Sun's surface — and its heat shield worked flawlessly. The night launch was visible from 100 miles away across Florida.",
    locAdv:"Pad 39B at Kennedy Space Center was rebuilt specifically for SLS — requiring removal of the Shuttle era lightning towers and installation of a new flame trench drainage system. The mobile launcher tower, standing 380 feet tall, is the tallest structure ever used for a NASA rocket.",
    dist:268553, distLabel:'268,553 mi · Spacecraft Distance Record 🏆',
    photos:['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Artemis_I_Launch_-_NHQ202211160006.jpg/480px-Artemis_I_Launch_-_NHQ202211160006.jpg'],
    photoCap:'Artemis I night launch · November 16, 2022 · Kennedy Space Center (NASA)',
    emoji:'🌙',
    mapView:'usa-s',
    markers:[
      { lat:28.573, lng:-80.649, label:'KSC · LC-39B — Artemis Launch', desc:'SLS launched from Pad 39B — same complex family as Saturn V.',         col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston JSC · Artemis Control', desc:'JSC manages all Artemis mission operations and crew training.',         col:'#00d4ff', type:'c' },
      { lat:30.390, lng:-89.090, label:'Stennis SC · Engine Testing',   desc:'SLS core stage engines hot-fire tested for 8+ continuous minutes.',    col:'#ffca28', type:'c' },
      { lat:29.978, lng:-90.054, label:'Michoud · SLS Core Stage',      desc:'SLS core stage — backbone of every Artemis mission — built here.',    col:'#00e5a0', type:'c' },
      { lat:35.402, lng:-86.671, label:'Marshall SFC · Huntsville',     desc:'Marshall leads all SLS rocket design, development, and engineering.', col:'#ffca28', type:'c' }
    ]
  },

  /* ── 2024 ── */
  {
    year:2024, name:'Polaris Dawn — Commercial Spacewalk',
    meta:'Kennedy Space Center · September 10, 2024',
    desc:"SpaceX and the Polaris program made history on September 12, 2024 when Jared Isaacman and Sarah Gillis performed the first-ever commercial spacewalk from a Dragon capsule orbiting at 870 miles altitude — the highest crewed flight since the Apollo era. All four crew members spent 5 days in orbit in brand-new SpaceX EVA suits.",
    fact:"At 870 miles altitude, Polaris Dawn crossed directly through the Van Allen radiation belt — a zone of intense particle radiation that most crewed missions deliberately avoid. The crew received a radiation dose roughly equivalent to 24 chest X-rays. The mission proved private astronauts can conduct complex EVA operations.",
    dyk:"⭐ Polaris Dawn had the fastest pace of any private spaceflight mission. Isaacman and Gillis became the first people to perform a spacewalk without an airlock — the Dragon hatch simply opened to space and they floated out, tethered to the capsule. The suits they wore were designed entirely by SpaceX — the first non-NASA spacesuit used for an actual spacewalk in US spaceflight history.",
    locAdv:"SpaceX's Pad 39A at Kennedy Space Center — the same pad that launched Apollo 11 to the Moon — is now leased by SpaceX and has launched more crewed missions than any other pad in history. Its proximity to SpaceX's Hawthorne, CA design facility and Cape facilities creates an integrated rapid-launch capability.",
    dist:870, distLabel:'870 miles — Highest Crewed Orbit Since Apollo',
    photos:['https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Polaris_Dawn_mission_patch.png/480px-Polaris_Dawn_mission_patch.png'],
    photoCap:'Polaris Dawn mission patch — first commercial spacewalk, September 2024',
    emoji:'⭐',
    mapView:'usa-s',
    markers:[
      { lat:28.573, lng:-80.649, label:'KSC · LC-39A — SpaceX Pad',     desc:'SpaceX Falcon 9 launched Polaris Dawn from Pad 39A on September 10, 2024.', col:'#00d4ff', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston JSC',                   desc:'NASA supported the mission; crew also trained with SpaceX in California.',   col:'#00e5a0', type:'c' },
      { lat:40.735, lng:-74.172, label:'Westfield, NJ · Isaacman born', desc:'Mission commander Jared Isaacman born February 11, 1983.',                   col:'#ffca28', type:'b' }
    ]
  },

  /* ── 2025 ── */
  {
    year:2025, name:'Artemis II — First Crew to Moon Since 1972',
    meta:'Kennedy Space Center · 2025–2026',
    desc:"Four astronauts — Reid Wiseman, Victor Glover, Christina Koch, and Canadian Jeremy Hansen — will fly around the Moon aboard NASA's Orion capsule atop the Space Launch System. This is the first crewed lunar voyage since Apollo 17 in December 1972 — over 53 years ago. Victor Glover will become the first Black astronaut to travel to the Moon.",
    fact:"Christina Koch holds the record for the longest single spaceflight by a woman: 328 consecutive days on the ISS in 2019–2020. Jeremy Hansen of Canada will be the first non-American to travel to the Moon. The crew will travel farther than any humans since Apollo 13's 1970 distance record.",
    dyk:"🌕 For the first time since December 1972 — over 53 years — humans will leave Earth orbit and travel to the Moon. Artemis II is the pathfinder for Artemis III, which will land astronauts on the lunar south pole to search for water ice that could support permanent human presence. If water ice is confirmed in useful quantities, it changes everything — rocket fuel, drinking water, and oxygen can all be made from lunar ice.",
    locAdv:"The Artemis crew trains at both Johnson Space Center in Houston (mission simulations, EVA training in the Neutral Buoyancy Lab) and at Kennedy Space Center (launch vehicle familiarization and emergency egress procedures). The Gulf Coast corridor from KSC to Marshall to Michoud to Stennis to JSC represents the complete Artemis supply chain.",
    dist:238855, distLabel:'238,855 miles — First Crew to Moon Since 1972',
    photos:['https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg'],
    photoStyle:'object-fit:contain;background:#010d22;padding:22px;',
    photoCap:'Artemis II crew: Wiseman, Glover, Koch, Hansen — returning humans to the Moon (NASA)',
    emoji:'🌕',
    mapView:'usa-s',
    markers:[
      { lat:28.573, lng:-80.649, label:'KSC · LC-39B — Artemis II',     desc:'Artemis II launches from Pad 39B on the Space Launch System.',              col:'#ff3d21', type:'c' },
      { lat:29.559, lng:-95.089, label:'Houston JSC · Crew Training',   desc:'All 4 Artemis II astronauts train at Johnson Space Center in Houston.',    col:'#00d4ff', type:'c' },
      { lat:30.390, lng:-89.090, label:'Stennis · Engine Certification', desc:'Artemis II SLS engines tested and certified at Stennis.',                  col:'#ffca28', type:'c' },
      { lat:35.402, lng:-86.671, label:'Marshall SFC · Huntsville, AL', desc:'Marshall leads all SLS rocket development for Artemis.',                   col:'#00e5a0', type:'c' },
      { lat:29.978, lng:-90.054, label:'Michoud · New Orleans, LA',     desc:'SLS core stage for Artemis II manufactured at Michoud.',                   col:'#00e5a0', type:'c' },
      { lat:42.232, lng:-83.352, label:'Grand Rapids, MI · Koch born',  desc:'Christina Koch — record-holding female astronaut, Artemis II crew.',       col:'#ffca28', type:'b' },
      { lat:34.058, lng:-117.288,label:'Pomona, CA · Glover born',      desc:'Victor Glover — 1st Black astronaut to travel to the Moon.',               col:'#ffca28', type:'b' }
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
var ASTRONAUT_BIRTHS = [
  { lat:40.564, lng:-84.194, name:'Neil Armstrong',    mission:'Apollo 11 — 1st Human on the Moon',            born:'Wapakoneta, OH' },
  { lat:40.807, lng:-74.153, name:'Buzz Aldrin',       mission:'Apollo 11 — 2nd Human on the Moon',            born:'Glen Ridge, NJ' },
  { lat:42.887, lng:-71.275, name:'Alan Shepard',      mission:'Freedom 7 — 1st American in Space',            born:'East Derry, NH' },
  { lat:39.962, lng:-82.999, name:'John Glenn',        mission:'Friendship 7 — 1st American to Orbit',         born:'Cambridge, OH' },
  { lat:41.499, lng:-81.694, name:'Jim Lovell',        mission:'Apollo 13 — Saved crew from disaster',         born:'Cleveland, OH' },
  { lat:29.424, lng:-98.493, name:'Ed White',          mission:'Gemini IV — 1st American Spacewalk',           born:'San Antonio, TX' },
  { lat:34.052, lng:-118.243,name:'Sally Ride',        mission:'STS-7 — 1st American Woman in Space',          born:'Los Angeles, CA' },
  { lat:34.606, lng:-86.983, name:'Mae Jemison',       mission:'STS-47 — 1st Black Woman in Space',            born:'Decatur, AL' },
  { lat:38.731, lng:-86.474, name:'Gus Grissom',       mission:'Mercury / Gemini pioneer',                     born:'Mitchell, IN' },
  { lat:42.232, lng:-83.352, name:'Christina Koch',    mission:'Artemis II — record female spaceflight 328 days', born:'Grand Rapids, MI' },
  { lat:34.058, lng:-117.288,name:'Victor Glover',     mission:'Artemis II — 1st Black astronaut to Moon orbit',  born:'Pomona, CA' },
  { lat:40.735, lng:-74.172, name:'Jared Isaacman',    mission:'Polaris Dawn — 1st commercial spacewalk 2024', born:'Westfield, NJ' },
];