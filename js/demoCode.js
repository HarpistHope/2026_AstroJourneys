//insert code here!
// Pseudo-code:
// Overview:
//   - Two main views
//      - Landing Page
//          - Same html as main page, just different container (i.e, essentially a big .onload popup)
//          - full-window container
//          - "Launch" button in center to close window/popup
//      - Main Page
//          - Four containers 
//              -- Main window containing everything 
//                  + background graphics/designs
//                  + vertical timeline scroll - on the left third of the window; yellow, with arrows indicating which direction the timeline overflows (up/down, clickable if more events beyond the visible portion, grayed out otherwise)
//                  + Return to Launch button, resets timeline & activates landing page popup/window
//              -- Map view containing map - centered, upper portion of the middle third of the window
//                  + zoom linked to timeline scroll/click
//                  + small popup (similar to leaflet popups?) containing concise location info
//              -- Information Box - centered, lower portion of the middle third of the window
//                  + updates with timeline scroll/click
//                  + text (should be able to scroll if necessary?)
//                  + pictures embedded in text (with associated image descriptions - located static below or activated on mouseover?)
//              -- Distance tracker - right third of the window
//                  + zoom out linked with timeline click
//                  + shuttle graphic moves further from earth with timeline click
//                  + possible hover or click interaction to trigger exact distance popup? Or just place shuttle graphic label alongside with dynamically updating distance

// Wrap entire script in anonymous function
(function() {

    // pseudoglobal variables  
    // set window-responsive frame widths (arbitrary dimensions to start, edit exact measures as project comes together)
    if(window.innerWidth < 700) {
        var mapWidth = window.innerWidth - 40
        var trackerWidth = window.innerWidth - 150
    } else {
        var mapWidth = window.innerWidth * 0.5 - 25
        var trackerWidth = window.innerWidth - 100
    }

    // set heights, proportionally consistent across window dimensions
    var mapHeight = window.innerHeight - 250;
    var trackerHeight = window.innerHeight - 100;
    var timelineHeight = window.innerHeight - 75;
    
    // try to set up sounds activated by interactions? -- need to find and add sound files
    var sounds = {
        click: new Audio("sounds/click.mp3"),
        launch: new Audio("sounds/launch.mp3"),
        transition: new Audio("sounds/transition.mp3")
    };

    // define last event index
    var lastEventIndex = -1; 
    
    // eventual list of timeline events, placeholder examples in there right now
    // NOTE: We should decide if distances will be in miles or km lol
    // I feel like it may be nice to include events that may not have a map reference/data link
    // I'm going to add them in here and we can move them to an appropriate place later - or eliminate!
    var events = [   
    {
        title: "Wilber and Orville Wright",
        description: "First Powered Flight",
        year: 1903, // complete date December 17,1903
        distance: 0.16, // Fourth Flight: (852 ft, 0.16 miles) duration: 59 sec, altitude: 10 ft, First Flight: 120 ft, 12 seconds
        coords: [-75.7, 36.0], // Kill Devil Hills, Kitty Hawk, NC (lng, lat)
        location: "Kill Devil Hills, near Kitty Hawk, NC",
        locDateFounded: "",
        locImage: "WrightBros_FirstFlight_1903.jpg", // or "1903_Dec14_Preflight.jpg" shows more context of the hill
        infoImage: "WrightBros_GliderKited_1901.jpg", //testing glider for lift as a kite
        funFact: 'To understand the components of lift, Wilber and Orville tested their initial glider design as a kite, progressing to extensive unmanned and manned glider flights. From there, and without existing equipment on the market, the Wright Brothers not only designed their own wind tunnel to test wing shape, but also engineered a lightweight gasoline engine and custom propeller to power their aircraft, the "Flyer".'
    },
    {
        title: "NASA is Born",
        description: "NASA opened for business in Washington, D.C.",
        year: 1958, // complete date Oct. 1, 1958
        distance: "",
        coords: [-77.0, 38.9], // Washington, D.C. (lng, lat)
        location: "Washington, DC", //Dolley Madison House on Lafayette Square in Washington, DC
        locDateFounded: "",
        locImage: "NASA_FirstHeadquarters 1958.jpg", //The Dolly Madison House, 1520 H Street, NW, in Washington, DC
        infoImage: "NACA_PilotJoeAlgranti_1960.jpg", //Pilot Joe Algranti climbs into the cockpit of a McDonnell F2H-2B Banshee on the tarmac at the NACA Lewis Flight Propulsion Laboratory. Algranti was a primary test subject for the Multi-Axis Space Test Inertia Facility (MASTIF), a device used to train the Mercury astronauts how to control a spinning capsule.
        funFact: "NASA's footing was built on the vast aeronautics research, testing and knowledge of the people at NACA, the National Advisory Committee for Aeronautics, founded in 1915."
    },
    // create space suit section? One of first suits: NACA_XSeriesPressureSuit_1957.jpg", //Robert Champine in X-Series Pressure Suit, 1957 - one of the first designs built to protect pilots' bodies in the event of exposure to the low air pressure at high altitude.
    {
        title: "The “Original Seven”",
        description: "NASA’s First Astronauts",
        year: 1959, // complete date April 9, 1959
        distance: "",
        coords: [-77.0, 38.9], // Washington, D.C. (lng, lat)
        location: "Washington, DC", //The 90 minute event took place in the ballroom of the Dolley Madison House, complete with photo session and a panel discussion with reporters
        locDateFounded: "",
        locImage: "Mercury_Original7bw_1959.jpg", // color image: Mercury_Original7_1959.jpg
        infoImage: "Mercury_Original7_LifeMagazine_1959_COPYRIGHTED.jpg", // This is copyrighted, so I emailed LIFE Magazine requesting permission for use. 
        funFact: "Wally Schirra, Deke Slayton, John Glenn, Scott Carpenter, Alan Shepard, Gus Grissom, and Gordon Cooper were selected as NASA’s Mercury astronauts. NASA and government officials decided that active military test pilots with extemplary physical and psychological fitness would make the best candidates for space flight. After rigorous screenings, these seven men rose to the top of the list. This delegation propelled them into the center of public attention as the faces of American space exploration."
    },
    {
        title: "The US Makes it to Space: Mercury-Redstone 3 Freedom 7 Mission",
        description: "First American in Space",
        year: 1961, // complete date May 5, 1961
        distance: 303, //duration: 00:15:28 HMS
        coords: [-80.6, 28.5], // Cape Canaveral Space Force Station (lng, lat) 
        location: "Cape Canaveral Air Force Station", // now called Cape Canaveral Space Force Station"
        locDateFounded: "",
        locImage: "Mercury_AlanShepard_Freedom7Capsule_1961.jpg", //photo info copied from NASA site: Astronaut Alan B. Shepard Jr., in his pressure suit and helmet, is being inserted into the Freedom 7 capsule in preparation for the Mercury-Redstone 3 (MR-3) mission
        infoImage: "Mercury_Earth_MercuryRedstone3_1961.jpg", //photo info from NASA site: Mercury-Redstone 3 (MR-3) spaceflight Earth observations of a cloudy Earth surface.
        funFact: "Astronaut Alan Shepard Jr. witnessed a view of Earth no American had seen before. Part of Project Mercury which spanned 25 flights over between 1961 and 1963, the Freedom 7 mission lasted 15 minutes, 28 seconds."
    },
    {
        title: "The Power of One: Project Mercury",
        description:"",
        year: 1961-1963,
        distance: "",
        coords: [-80.6, 28.5], // Cape Canaveral Space Force Station (lng, lat) 
        location: "Cape Canaveral Air Force Station", // now called Cape Canaveral Space Force Station"
        locDateFounded: "",
        locImage: "Mercury_MissionControl_1962.jpg", //Copied from NASA: Flight controllers gather inside Mercury Mission Control during the first orbit of John Glenn's Friendship 7 mission, which launched on Feb. 20, 1962.
        infoImage: "Mercury_ScottCarpenterTraining_1961.jpg", //from NASA: Project Mercury astronaut M. Scott Carpenter, prime pilot for the United States second manned orbital flight, undergoes a simulated mission in the procedures trainer at Langley Air Force Base, Virginia, headquarters for the National Aeronautics and Space Administration?s Manned Spacecraft Center.
        funFact: "With room for only one astronaut per mission, Project Mercury launched six missions, showing that humans could function for periods up to 34 hours of weightless flight."
    },
    {
        title: "Mercury-Atlas 6: Friendship 7 Mission",
        description: "Astronaut John Glenn made history onboard the Friendship 7 Mercury spacecraft, becoming the first U.S. astronaut to orbit Earth.",
        year: 1962, // complete date February 20, 1962
        distance: 75679, //duration: 04:55:23 HMS, altitude: 162.2 x 100 statute miles
        coords: [-80.6, 28.5], // Cape Canaveral Space Force Station (lng, lat) 
        location: "Cape Canaveral Air Force Station", // now called Cape Canaveral Space Force Station"
        locDateFounded: "",
        locImage: "Mercury_Atlas6_1962.jpg", //caption copied from NASA: This is a view of the Mercury-Atlas 6 spacecraft as it leaves the launch pad at Cape Canaveral, Florida. Onboard the spacecraft is astronaut John H. Glenn Jr., pilot of the MA-6 mission, on its way to a three-Earth-orbital mission, making Glenn the first American to fly a manned Earth-orbiting mission.
        infoImage: "Mercury_JohnGlennAtlas6_1962.jpg", //from NASA: A camera onboard the "Friendship 7" Mercury spacecraft photographs astronaut John H. Glenn Jr. during the Mercury-Atlas 6 spaceflight
        funFact:"After 10 postponements due to inclement weather and mechanical problems, John Glenn reached orbit a mere five minutes, one second after countdown."
     },
    {
        title: "Gemini IV: First Walk in Space",
        description: "NASA astronaut Ed White became the first American to walk in space.",
        year: 1965, // complete date June 3, 1965
        distance: 1600000, //duration: 97:56:12 HMS
        coords: [-82.4, 36.3], // Houston, TX (lng, lat)
        location: "Manned Spacecraft Center (MSC) in Houston", // copied from NASA: Gemini 4 was the first flight to be followed by the mission control at the new Manned Spacecraft Center (MSC) in Houston and became the primary flight control center for all subsequent U.S. manned space missions from Project Gemini forward. (now called NASA Lyndon B. Johnson Space Center (JSC)) 
        locDateFounded: "",
        locImage: "Gemini_MissionControlHouston_1965.jpg", //from NASA: The families of Gemini 4 astronauts James A. McDivitt and Edward H. White II visited the Mission Control Center in Houston. In the foreground, left to right, are Mrs. Patricia McDivitt, daughter Bonnie White, Mrs. Patricia White, flight director Christopher C. Kraft Jr., and Edward White III. Each of the family members talked with the astronauts as they passed over the United States.
        infoImage: "Gemini_EdwardWhiteGeminiTitan4_1965.jpg", //copied from NASA: Astronaut Edward H. White II, pilot of the Gemini IV four-day Earth-orbital mission, floats in the zero gravity of space outside the Gemini IV spacecraft. He remained outside the spacecraft for 21 minutes during the third revolution of the Gemini IV mission. White wears a specially designed spacesuit; and the visor of the helmet is gold plated to protect him against the unfiltered rays of the sun. He wears an emergency oxygen pack, also. He is secured to the spacecraft by a 25-feet umbilical line and a 23-feet tether line, both wrapped in gold tape to form one cord. In his right hand is a Hand-Held Self-Maneuvering Unit (HHSMU) with which he controls his movements in space.
        funFact: "Gemini IV was the first flight monitored by mission control at the new Manned Spacecraft Center in Houston, Texas rather than from its previous location at Cape Canaveral."
        // funFact2: "Project Gemini expanded onboard capacity to two astronauts, making Jim McDivitt and Ed White the first duo of astronauts in space, chasing the Soviet Union cosmonaut Alexei Leonov's successful spacewalk a mere three months prior to their mission."
    },
    {
        title: "Apollo 1: Our First Loss",
        description: "The Apollo 1 Mission marked the first tragedy of spaceflight as fire broke out during a preflight test, taking the lives of Astronauts Gus Grissom, Ed White, and Roger Chaffee, fueling a renewed dedication to safety protocol.",
        year: 1967, // complete date Jan. 27, 1967
        distance: "", //duration: 
        coords: [-80.6, 28.5], // (lng, lat)
        location: "Cape Canaveral Air Force Station", // now called Cape Canaveral Space Force Station"
        locDateFounded: "",
        locImage: "",
        infoImage: "Apollo_Apollo1Crew_1966", //Astronauts Grissom, White and Chaffee 
        funFact: ""
    },
    {
        title: "Apollo 7: Messages from Space",
        description: "The first live TV broadcast from a manned U.S. spacecraft",
        year: 1968, // complete date Oct. 14, 1968
        distance: "", //duration: 
        coords: [], // (lng, lat)
        location: "",
        locDateFounded: "",
        locImage: "",
        infoImage: "Apollo_Apollo7Broadcast_1968", //from NASA: Astronauts Walter M. Schirra Jr. (on right), mission commander; and Donn F. Eisele, command module pilot; are seen in the first live television transmission from space.
        funFact:"For a broadcast to be possible, the spacecraft needed to be passing over the continental United States, since only the ground stations in Corpus Christi, Texas, and Merritt Island, Florida, had the equipment to receive and convert the signals for broadcasting. Over the course of the mission, the crew made three jovial broadcasts, giving people on Earth a tour of the spacecraft and demonstrated the challenges of food prep in space."
    },
    {
        title: "Apollo 11: One Giant Leap for Mankind",
        description: "First Moon landing",
        year: 1969,
        distance: 238855,
        coords: [-80.6, 28.6], // Kennedy Space Center (lng, lat)
        location: "Kennedy Space Center",
        locDateFounded: "July 1, 1962",
        locImage: "kennedyin1969.jpg",
        infoImage: "apollo11.jpg", 
        funFact: "The Other Astronaut: Michael Collins had a vital role to play - but he often gets forgotten. While his buddies Neil and Buzz were exploring the lunar surface for the first time, Michael stayed in lunar orbit to pilot the command module."
        // think about adding linked image and map view for each event here
        // cool photo of parade after Apollo 11 mission "Apollo_Apollo11Parade_1969.jpg" From NASA: New York City welcomes Apollo 11 crewmen in a showering of ticker tape down Broadway and Park Avenue in a parade termed as the largest in the city's history. Pictured in the lead car, from the right, are astronauts Neil A. Armstrong, commander; Michael Collins, command module pilot; and Edwin E. Aldrin Jr., lunar module pilot.
    },
    {
        title: "Apollo 13: Beating the Odds",
        description: "",
        year: 1970, //complete year: April 17, 1970 
        distance: "", //duration: 
        coords: [], // (lng, lat)
        location: "",
        locDateFounded: "",
        locImage: "Apollo_Apollo13Recovery_1970.jpg", //Crew men aboard the USS Iwo Jima recovery ship hoist the Command Module (CM) aboard ship in the South Pacific Ocean.
        // other photo option: "Apollo_Apollo13CrewRecovery_1970.jpg" crew on recovery ship
        infoImage: "Apollo_Apollo13Moon_1970.jpg", //This view of the moon captured from the Apollo 13 spacecraft shows the Moon's Sea of Crisis, the Sea of Fertility, the Sea of Tranquility, the Sea of Serenity, the Sea of Nectar, the Sea of Vapors, the Border Sea, Smyth's Sea, the crater Langrenus, and the crater Tsiolkovsky.
        // other photo options: Apollo_Apollo13SpaceModule_1970.jpg damaged Service Module photographed from the Lunar Module
        funFact: "The Apollo 13 crew used ingenuity to configure onboard equipment and supplies to successfully remove carbon dioxide from the Lunar Module after an oxygen tank explosion in the Service Module, using the Lunar Module as a lifeboat to return to Earth safely."
    }, 
    {
        title: "Artemis II",
        description: "Farthest distance from Earth",
        year: 2026,
        distance: 252756,
        coords: [-80.6, 28.6], // Kennedy Space Center (lng, lat)
        location: "Kennedy Space Center",
        locDateFounded: "July 1, 1962",
        locImage: "kennedyin2026.jpg",
        infoImage: "artemisII.jpg",
        funFact: "Moon Joy: During the 10-day live stream, millions around the globe were entertained by the unrestrained enthusiasm shown by the Artemis astronauts and NASA coms teams. 'Moon Joy' quickly spread around the world."
        
    }
];

    // all variables here are defined 'globally,' they are all called in several functions below
    var landing, map, g, path, zoom, locationPopup, projection;

    // create currentEvent variable, starts at index 0
    var currentEvent = 0;

    // define maxDistance (check how distance attribute is called in event data)
    var maxDistance = d3.max(events, d => d.distance);

    // function to create landing page and setWindow when window loads
    window.onload = function() {
        // create welcome/landing page
        landing = d3.select("body")
            .append("div")
            .attr("class", "landingPage");

        // set landing html design
        landing.html(`
            <div class="landing-content">
            <p><h1>ASTRO JOURNEYS!</h1></p>
            <p>Blast off on an incredible journey through the story of America's Space Program.</p>
            <button class="close-btn">Blast-off!</button>
            </div>
            `);

        // lock interaction with main window interactions
        d3.selectAll("#map, #timeline, #infoBox, #distTracker")
            .style("pointer-events", "none");

        // anon function to create button to close landing page on click, allow interactions with main window elements
        landing.select(".close-btn").on("click", function() {
            sounds.launch.play();
            landing.style("display","none");

        // unlock interaction with main window interactions
        d3.selectAll("#map, #timeline, #infoBox, #distTracker")
            .style("pointer-events", "auto");
        
        // initialize main window 
        setWindow();
        });

        console.log("Onload Running");

    }; // end of anonymous onload function

    
    // set up window, include map, info, and tracker containers
    function setWindow() {

        // call map, infobox, distance tracker, timeline, and controls functions
        setTimeline();
        setMap();
        setInfoBox();
        setDistTrack();
        setControls();

        // initialize first view with updateViews function (simlar to changeAttributes function from d3 lab)
        currentEvent = 0;
        updateViews(currentEvent);


    }; // end of setWindow()

    // set up function to create the timeline 
    function setTimeline() {

        // create svg container for timeline
        var timeline = d3.select("#timeline")
            .append("svg")
            .attr("class", "timeline")
            .attr("height", timelineHeight)

        // create scale for timeline interaction movement
        var scale = d3.scalePoint()
            .domain(events.map(d => d.year))
            .range([50, timelineHeight - 50]);

        // create timeline line    
        timeline.append("line")
            .attr("x1", 50)
            .attr("x2", 50)
            .attr("y1", 0)
            .attr("y2", timelineHeight)
            .attr("stroke", "gold")
            .attr("stroke-width", 2)
            .attr("marker-end", "url(#arrow)");
        
        // set up timeline interaction
        timeline.selectAll("circle")
            .data(events)
            .enter()
            .append("circle")
            .attr("cy", d => scale(d.year))
            .attr("cx", 50)
            .on("click", function(event, d) {
                currentEvent = events.indexOf(d);
                updateViews(currentEvent);
            });

        // set up arrow markers on timeline (I had to google method to create these)
        timeline.append("defs")
            .append("marker")
            .attr("id", "arrow")
            .attr("viewBox", "0 0 10 10")
            .attr("refX", 5)
            .attr("refY", 5)
            .attr("markerWidth", 6)
            .attr("markerHeight", 6)
            .attr("orient", "auto-start-reverse")
            .append("path")
            .attr("d", "M 0 0 L 10 5 L 0 10 z")
            .attr("fill", "gold");



    }; // end of setTimeline()

    // set up function  to create the map
    function setMap() {

        // create svg container for map
        map = d3.select("#map")
            .append("svg")
            .attr("class", "map")
            .attr("width", mapWidth)
            .attr("height", mapHeight)

        // Begin to integrate the D3 zoom to bounding box interaction to the map
        g = map.append("g");

        // set projection; no hardcoded parameters, map resizes dynamically with window size, see callback function below
        projection = d3.geoAlbers();
        
        //define path 
        path = d3.geoPath()
            .projection(projection);

        // use promise.all to parallelize asynchronous data loading
        var promises = [
            d3.csv("data/SpaceCenters.csv"),
            d3.json("data/states_wgs84.topojson") // put data sources here
        ];
        Promise.all(promises).then(callback);

        // add zoom interaction behavior to the map (from d3 example)
        zoom = d3.zoom()
            .scaleExtent([1, 8])
            .on("zoom", zoomed);
        map.call(zoom);

        // set up event location point markers
        g.selectAll(".event-point")
            .data(events)
            .enter()
            .append("circle")
            .attr("class", "event-point")
            .attr("cx", d => projection(d.coords)[0])
            .attr("cy", d => projection(d.coords)[1])
            .attr("r", 5)
            .on("click", (e, d, i) => {
                currentEvent = i;
                updateViews(i);
            });
        
        // set up callback function to join data
        function callback(data) {
        
            // define csv and topojson datasources
            var csvData = data[0], topoData = data[1];

            // translate topojson to geojson -- find topojson source, possible reuse from d3 labs?
            var usStates = topojson.feature(topoData, topoData.objects.states_wgs84).features;

            // join csv data to geojson states
            usStates = joinData(usStates, csvData);

            // add responsive projection 
            var padding = Math.max(10, mapWidth * 0.05);
            projection.fitExtent(
                [[padding, padding], [mapWidth - padding, mapHeight - padding]], 
                {type: "FeatureCollection", features: usStates});

            // draw an inital map
            g.selectAll("path")
                .data(usStates)
                .enter()
                .append("path")
                .attr("d", path)
                .attr("class", "state")
                .on("click", clicked)

            // possibly add coordinated visualization function link here (i.e., activate zoom + move distance tracker shuttle graphic + activate new infobox -- possibly just add this in setWindow())
        } // end of callback function (still in setMap())

        // create and initalize location popup variable (appears on map, gives concise location context)
        locationPopup = d3.select("#map")
            .append("div")
            .attr("class", "locationPopup")
            .style("position", "absolute")
            .style("visibility", "hidden");
            
    }; // end of setMap()

    // set up function to create infoBox
    function setInfoBox() {

        // create svg container for info/context
        var infoBox = d3.select("#infoBox")
            .append("div")
            .attr("class", "info-content");

    }; // end of setInfoBox()

    // set up function to create distance tracker
    function setDistTrack() {

        // create svg container for distance tracker
        var distTracker = d3.select("#distTracker")
            .append("svg")
            .attr("class", "distTracker")
            .attr("width", trackerWidth)
            .attr("height", trackerHeight);

        d3.select("#distTracker svg") // add shuttle svg (literally just a circle for now, Ill figure out how to add an actual shuttle graphic/icon later)
            .append("circle")
            .attr("class", "shuttle")
            .attr("r", 10)
            .attr("cy", 50);

        d3.select("#distTracker")
            .append("text")
            .attr("class", "distLabel")

    }; // end of setDistTrack()

    // set up function to join csv data to geojson -- atm, copied from Hope's D3 lab
    function joinData(usStates, csvData){

        //loop through csv to assign each set of csv attribute values to geojson states
            for (var i = 0; i < csvData.length; i++) {
                var csvState = csvData[i]; //the current state
                var csvKey = csvState.STATE_ABBR; //the CSV primary key

                //loop through geojson states to find correct state
                for (var a = 0; a < usStates.length; a++) {
                    var geojsonProps = usStates[a].properties; //the current state geojson properties
                    var geojsonKey = geojsonProps.ISO3166_2; //the geojson primary key

                    //where primary keys match, transfer csv data to geojson properties object
                    if (geojsonKey == csvKey) {
                        // first separate out the average amenity class rank
                        // because this attribute doesn't normalize well with the rest of my datat (it divides the states into one of 7 rank categories), I will add it to the .on click popup as an extra detail
                        geojsonProps.amen_class = parseFloat(csvState.avg_amenity_class);

                        //assign all attributes and values
                        events.forEach(function (attr) {
                            var val = parseFloat(csvState[attr.attr]); //get csv attribute value
                            geojsonProps[attr.attr] = val; //assign attribute and value to geojson properties
                        });
                    }
                }
            }

        console.log(usStates);
        return usStates;

    }; // end of joinData

    // set up clicked function to zoom to bounding box (state),change infoBox + distance tracker views on click; adapted from d3 gallery
    function clicked(event, d) {
        // sync infobox/distance tracker changes
                    
        // turn locationPopup visible on click
        locationPopup.style("visibility", "visible")

        // create bounding box, from d3
        const [[x0, y0], [x1, y1]] = path.bounds(d);
        event.stopPropagation();

        // apply zoom transform, from d3
        map.transition().duration(750).call(
            zoom.transform,
            d3.zoomIdentity
                .translate(
                    +map.attr("width") / 2, 
                    +map.attr("height") / 2 - 80) // I shift the map up a bit to see the state over the popup more clearly
                .scale(Math.min(8, 0.65 / Math.max(
                    (x1 - x0) / map.attr("width"),
                    (y1 - y0) / map.attr("height")
                )))
                .translate(-(x0 + x1) / 2, -(y0 + y1) / 2)
            
    )}; // end of clicked()

    // add map zoom function (part of d3 zoom to bounding box interaction )
    function zoomed(event) {

        g.attr("transform", event.transform);
        g.attr("stroke-width", 1 / event.transform.k);

    } // end of zoomed()

    // create control buttons to move timeline along
    function setControls() {
               
        // add test button - we'll see how it works once we have our data
        d3.select("body")
            .append("button")
            .text("Next")
            .on("click", function() {
                currentEvent = (currentEvent + 1) % events.length;
                updateViews(currentEvent);
            });

    }; // end of setControls() 

    // add zoomToLocation function
    function zoomToLocation(event) {
        if (!event.coords) return;

        const [x, y] = projection(event.coords);

        map.transition().duration(750).call(
            zoom.transform,
            d3.zoomIdentity
                .translate(mapWidth / 2, mapHeight / 2)
                .scale(4)
                .translate(-x, -y)
        );

    }; // end of zoomToLocation()

    // add updateViews function (similar to changeAttributes from d3 lab)
    function updateViews(index) {
        // prevent too many activations
        if (index === lastEventIndex) 
            return; 
            lastEventIndex = index;
        
        // define event 
        var event = events[index];

        playSound(sounds.transition);

        // add locationPopup layout
        d3.select(".locationPopup")
            .html(`
                <h2>${event.location}</h2>
                <p>Established in ${event.locDateFounded}</p>
                <p>${event.locImage}</p>
            `);

        // add infoBox text and fun fact button
        d3.select(".info-content")
            .html(`
                <h2>${event.title}</h2>
                <p>${event.description}</p>
                <p><strong>Year:</strong> ${event.year}</p>
                <p><strong>Distance from Earth:</strong> ${event.distance}</p>
                <img src="${event.infoImage}" style="width:100%; border-radius:8px;">
                <button class="funFactBtn">Did You Know?</button>
            `);
        
        // activate funFact button on click
        d3.select(".funFactBtn").on("click", () => {
            playSound(sounds.click); 
            alert(event.funFact);
        });

        // set up scale for the distance tracker
        var scale = d3.scaleLinear()
            .domain([0, maxDistance]) // need maxDistance from data, will be most recent distance from Artemis II journey (252,756 miles (406,771 km) from Earth)
            .range([0, trackerWidth]);

        // move shuttle graphic along distance tracker scale
        d3.select(".shuttle") // will need to create shuttle graphic, circle for now
            .transition()
            .duration(1000)
            .ease(d3.easeCubic)
            .attr("cx", scale(event.distance));

        // zoom to event location on the map
        zoomToLocation(event);

        // update distance tracker label
        d3.select(".distLabel")
            .text(event.distance + "miles");

        // test updateViews once data is loaded
        console.log("Event: ", event);

    }; // end of updateViews()

    // function to separate out sounds so they don't stack on each other
    // function playSound(sound) {

    //     sound.pause();
    //     sound.currentTime = 0;
    //     sound.play();

    // }; // end of playSound()

    // add reset/return to launch function to reset attributes and open landing page
    function reset() {
        // show landing page
        landing.style("display", "block");

        // reset timeline index 
        currentEvent = 0;

        // reset map
        map.transition().call(zoom.transform, d3.zoomIdentity);

        // reset info + tracker
        updateViews(currentEvent);
    }; // end of reset()

})(); // end of entire script


// start of new main
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

// function project(lat, lng, view) {
//   const v = VIEWS[view] || VIEWS.usa;
//   const x = (lng - v.ln0) / (v.ln1 - v.ln0) * MAP_W;
//   const y = (v.lt0 - lat) / (v.lt0 - v.lt1) * MAP_H;
//   return [x, y];
// }

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
    fetch('data/us_48states_albersShp.json'),
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
      [30, -35, 'Atlantic Ocean'],
      [10, 160, 'Pacific Ocean'],
      [-15, 75, 'Indian Ocean']
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
    if (view === 'usa') {
      const [pa_x, pa_y] = project(40, -128, view);
      s += `<text x="${pa_x.toFixed(0)}" y="${pa_y.toFixed(0)}" class="water-label" text-anchor="middle">Pacific Ocean</text>`;
      const [at_x, at_y] = project(34, -64, view);
      s += `<text x="${at_x.toFixed(0)}" y="${at_y.toFixed(0)}" class="water-label" text-anchor="middle">Atlantic</text>`;
    }
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
    s += makeDot(cx, cy, col, 4.5, true, p.name, desc, tag, label, ACTIVE_TAB === 'a');
  });

  // Event-specific markers 
  eventMarkers.forEach(m => {
    const [cx, cy] = project(m.lat, m.lng, view);
    if (cx < -15 || cx > MAP_W + 15 || cy < -15 || cy > MAP_H + 15) return;
    const short = (m.label || '').split(',')[0].trim().split(' ').slice(0, 2).join(' ');
    s += makeDot(cx, cy, m.col, m.type === 'b' ? 5.5 : 7.5, false, m.label, m.desc,
                 m.type === 'b' ? 'BIRTHPLACE' : 'NASA FACILITY', short, m.type === 'b');
  });

  svg.innerHTML = s;
  attachTooltips();
}

function makeDot(x, y, col, r, perm, lbl, desc, tag, shortLabel, isBirth) {
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

function attachTooltips() {
  const tip  = document.getElementById('map-tooltip');
  const tipT = document.getElementById('tip-title');
  const tipB = document.getElementById('tip-body');
  const tipG = document.getElementById('tip-tag');

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

function switchTab(t) {
  ACTIVE_TAB = t;
  document.getElementById('tab-c').classList.toggle('on', t === 'c');
  document.getElementById('tab-a').classList.toggle('on', t === 'a');
  document.getElementById('map-hud').textContent =
    t === 'a' ? 'ASTRONAUT BIRTHPLACES · HOVER STARS FOR INFO'
               : 'NASA CENTERS · SOUTHEASTERN OPERATIONS CORRIDOR';
  drawMap(EVENTS[CURRENT_IDX].mapView, EVENTS[CURRENT_IDX].markers);
}


/* ORBITAL DISTANCE TRACKER  */
function renderDistTracker(idx) {
  const W = 400, H = 238;
  const OX = 84, OY = 119, maxR = 88;           // Earth center + max orbital radius
  const BX = 185, BW = W - BX - 10, PT = 22;    // Bar chart start, width, top padding
  const MAX_D = 270000;
  const logMax = Math.log10(MAX_D + 1);

  const cur = EVENTS[idx];

  // Build history: unique distances from events 0..idx, sorted
  const hist = [];
  const seen = new Set();
  for (let j = 0; j <= idx; j++) {
    const d = EVENTS[j].dist;
    if (!seen.has(d)) { seen.add(d); hist.push({ yr: EVENTS[j].year, dist: d }); }
  }
  hist.sort((a, b) => a.dist - b.dist);
  const rowH = (H - PT - 26) / Math.max(hist.length, 1);

  // Named altitude rings
  const RINGS = [
    { dist: 254,    label: 'ISS/LEO' },
    { dist: 870,    label: 'Polaris' },
    { dist: 238855, label: 'Moon'    },
    { dist: 268553, label: 'Artemis' }
  ];
  RINGS.forEach(o => { o.r = (Math.log10(o.dist + 1) / logMax) * maxR; });

  let s = `<defs>
    <radialGradient id="earthG" cx="42%" cy="36%">
      <stop offset="0%"   stop-color="#3a88ff"/>
      <stop offset="55%"  stop-color="#0e40a8"/>
      <stop offset="100%" stop-color="#020e24"/>
    </radialGradient>
    <radialGradient id="moonG">
      <stop offset="0%"   stop-color="#d0d8e4"/>
      <stop offset="100%" stop-color="#4a5568"/>
    </radialGradient>
    <radialGradient id="earthGlow" cx="50%" cy="50%">
      <stop offset="0%"   stop-color="rgba(40,120,255,0.25)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
    <linearGradient id="barBlue" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#0b3d91"/>
      <stop offset="100%" stop-color="#00d4ff"/>
    </linearGradient>
    <linearGradient id="barRed" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#7c1500"/>
      <stop offset="100%" stop-color="#ff3d21"/>
    </linearGradient>
    <linearGradient id="barGreen" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#004020"/>
      <stop offset="100%" stop-color="#00e5a0"/>
    </linearGradient>
    <filter id="bigGlow">
      <feGaussianBlur stdDeviation="2.8" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="smallGlow">
      <feGaussianBlur stdDeviation="1.4" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>`;

  // Dark orbital area background
  s += `<rect x="0" y="0" width="${BX - 4}" height="${H}" fill="rgba(0,3,14,0.76)" rx="2"/>`;

  // Background stars in orbital area
  [[8,14,.9],[19,52,.6],[54,8,1.1],[38,72,.7],[14,128,.85],[65,94,.6],
   [28,156,.9],[47,38,.55],[11,80,.7],[53,122,.8],[68,158,.6],[31,20,1],
   [61,56,.7],[24,104,.55],[44,174,.8],[70,30,.65],[9,144,.9],[37,198,.7],
   [60,210,.55],[22,184,.8],[73,80,.5],[16,165,.6]].forEach(([sx,sy,sr]) => {
    s += `<circle cx="${sx}" cy="${sy}" r="${sr}" fill="white" opacity="${(0.1 + sr * 0.12).toFixed(2)}"/>`;
  });

  // Named altitude rings with labels
  RINGS.forEach(o => {
    if (o.r > 2 && o.r < maxR * 1.05) {
      s += `<circle cx="${OX}" cy="${OY}" r="${o.r.toFixed(1)}" fill="none" stroke="rgba(0,212,255,0.1)" stroke-width="1.1" stroke-dasharray="4,7"/>`;
      const lx = (OX + o.r * 0.68).toFixed(1);
      const ly = (OY - o.r * 0.73 - 5).toFixed(1);
      s += `<text x="${lx}" y="${ly}" font-family="Share Tech Mono,monospace" font-size="6.5" fill="rgba(0,212,255,0.32)">${o.label}</text>`;
    }
  });

  // Faint guide rings
  [0.22, 0.48, 0.72].forEach(f => {
    s += `<circle cx="${OX}" cy="${OY}" r="${(maxR * f).toFixed(1)}" fill="none" stroke="rgba(0,212,255,0.04)" stroke-width=".8"/>`;
  });

  // Arc trajectory paths for visited missions
  hist.forEach(h => {
    if (h.dist === 0) return;
    const r2 = (Math.log10(h.dist + 1) / logMax) * maxR;
    const isCur = (h.dist === cur.dist);
    const ex  = (OX + r2 * 0.72).toFixed(1);
    const ey  = (OY - r2 * 0.72).toFixed(1);
    const cpx = (OX + r2 * 0.36).toFixed(1);
    const cpy = (OY - r2 * 0.09).toFixed(1);

    s += `<path d="M${OX},${OY} Q${cpx},${cpy} ${ex},${ey}" fill="none"
      stroke="${isCur ? 'rgba(0,212,255,0.65)' : 'rgba(0,212,255,0.13)'}"
      stroke-width="${isCur ? 2.2 : 0.9}"
      stroke-dasharray="${isCur ? 'none' : '4,5'}"/>`;

    if (!isCur) {
      s += `<circle cx="${ex}" cy="${ey}" r="3.2" fill="rgba(0,212,255,0.45)" filter="url(#smallGlow)"/>`;
    }
  });

  // Current mission — animated pulsing rocket dot
  if (cur.dist > 0) {
    const r2 = (Math.log10(cur.dist + 1) / logMax) * maxR;
    const ex = (OX + r2 * 0.72).toFixed(1);
    const ey = (OY - r2 * 0.72).toFixed(1);
    const mc = cur.dist >= 248000 ? '#ff3d21'
              : cur.dist >= 200000 ? '#ffca28'
              : cur.dist >= 800    ? '#00e5a0'
              : '#00d4ff';

    // Double pulsing rings
    s += `<circle cx="${ex}" cy="${ey}" r="8" fill="none" stroke="${mc}" stroke-width="2">
      <animate attributeName="r" values="8;26;8" dur="2.4s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.8;0;0.8" dur="2.4s" repeatCount="indefinite"/>
    </circle>`;
    s += `<circle cx="${ex}" cy="${ey}" r="8" fill="none" stroke="${mc}" stroke-width="1.2">
      <animate attributeName="r" values="8;17;8" dur="2.4s" begin=".75s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.5;0;0.5" dur="2.4s" begin=".75s" repeatCount="indefinite"/>
    </circle>`;

    // Core dot
    s += `<circle cx="${ex}" cy="${ey}" r="6.5" fill="${mc}" stroke="white" stroke-width="1.3" filter="url(#bigGlow)"/>`;

    // Rocket emoji + distance label
    s += `<text x="${(parseFloat(ex) + 8).toFixed(1)}" y="${(parseFloat(ey) - 5).toFixed(1)}" font-size="15" filter="url(#smallGlow)">🚀</text>`;
    if (cur.dist > 100) {
      const dv = cur.dist >= 1000 ? Math.round(cur.dist / 1000) + 'K mi' : cur.dist + ' mi';
      s += `<text x="${(parseFloat(ex) + 9).toFixed(1)}" y="${(parseFloat(ey) + 9).toFixed(1)}"
        font-family="Share Tech Mono,monospace" font-size="7" fill="${mc}" opacity="0.9">${dv}</text>`;
    }
  }

  // Moon for lunar missions
  if (cur.dist >= 200000) {
    const mR = maxR * 1.01;
    const mx = (OX + mR * 0.70).toFixed(1);
    const my = (OY - mR * 0.72).toFixed(1);
    s += `<circle cx="${mx}" cy="${my}" r="12" fill="url(#moonG)" filter="url(#smallGlow)"/>`;
    s += `<text x="${mx}" y="${(parseFloat(my) + 5).toFixed(1)}" text-anchor="middle" font-size="13">🌕</text>`;
  }

  // Earth globe
  s += `<circle cx="${OX}" cy="${OY}" r="30" fill="url(#earthGlow)"/>`;
  s += `<circle cx="${OX}" cy="${OY}" r="21" fill="url(#earthG)" filter="url(#smallGlow)" stroke="rgba(60,140,255,0.4)" stroke-width="1.2"/>`;
  s += `<text x="${OX}" y="${OY + 7.5}" text-anchor="middle" font-size="20">🌍</text>`;

  // Divider line
  s += `<line x1="${BX - 6}" y1="8" x2="${BX - 6}" y2="${H - 8}" stroke="rgba(0,212,255,0.12)" stroke-width="1"/>`;

  // Bar chart header
  s += `<text x="${(BX + BW / 2).toFixed(1)}" y="15" text-anchor="middle"
    font-family="Share Tech Mono,monospace" font-size="7.5"
    fill="rgba(0,212,255,0.48)" letter-spacing="1.5">MISSION DISTANCES (log scale)</text>`;

  // Distance bars
  hist.forEach((h, ri) => {
    const y   = PT + ri * rowH + rowH * 0.08;
    const bH  = Math.max(rowH * 0.8, 7);
    const w   = h.dist === 0 ? 3 : (Math.log10(h.dist + 1) / logMax) * BW;
    const isCur  = (h.dist === cur.dist);
    const isOld  = (h.dist >= 248000 && h.dist < 268000);
    const isNew  = (h.dist >= 268000);
    const grad   = isNew ? 'url(#barGreen)' : isOld ? 'url(#barRed)' : 'url(#barBlue)';
    const opacity = isCur ? 1 : 0.35;

    s += `<rect x="${BX}" y="${y.toFixed(1)}" width="${w.toFixed(1)}" height="${bH.toFixed(1)}" rx="1.5"
      fill="${grad}" opacity="${opacity}"${isCur ? ' filter="url(#smallGlow)"' : ''}/>`;
    s += `<text x="${(BX - 5).toFixed(1)}" y="${(y + bH / 2 + 3.5).toFixed(1)}" text-anchor="end"
      font-family="Share Tech Mono,monospace" font-size="7.5"
      fill="${isCur ? 'rgba(0,212,255,.88)' : 'rgba(0,212,255,.32)'}">${h.yr}</text>`;

    if (h.dist > 0) {
      const val = h.dist >= 1000 ? Math.round(h.dist / 1000) + 'K' : h.dist;
      s += `<text x="${(BX + w + 4).toFixed(1)}" y="${(y + bH / 2 + 3.5).toFixed(1)}"
        font-family="Share Tech Mono,monospace" font-size="7.5"
        fill="${isCur ? '#ffca28' : 'rgba(190,215,255,.28)'}">${val}mi</text>`;
    }
    if (isOld) s += `<text x="${(BX + w + 4).toFixed(1)}" y="${(y + 4).toFixed(1)}"
      font-family="Share Tech Mono,monospace" font-size="6.5" fill="#ff3d21">★ OLD REC</text>`;
    if (isNew) s += `<text x="${(BX + w + 4).toFixed(1)}" y="${(y + 4).toFixed(1)}"
      font-family="Share Tech Mono,monospace" font-size="6.5" fill="#00e5a0">★ NEW REC</text>`;
  });

  // Current mission label at bottom
  s += `<text x="${(BX + BW / 2).toFixed(1)}" y="${H - 5}" text-anchor="middle"
    font-family="Orbitron,Impact,monospace" font-size="8.5" font-weight="bold"
    fill="#ffca28">${cur.distLabel}</text>`;

  document.getElementById('dist-svg').innerHTML = s;
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


/* INFO PANEL*/
function renderInfo(ev) {
  let h = `<div class="event-img-wrap">
    <img class="event-img" id="ev-photo" alt="${ev.photoCap}" style="${ev.photoStyle || ''}"/>
    <div class="img-overlay"></div>
    <div class="img-caption">${ev.photoCap}</div>
  </div>`;

  h += `<div class="event-body">
    <div class="event-name">${ev.name}</div>
    <div class="event-meta">${ev.meta}</div>
    <div class="event-desc">${ev.desc}</div>
    <div class="fact-block">
      <div class="fact-label">★ Historical Fact</div>
      <div class="fact-text">${ev.fact}</div>
    </div>`;

  if (ev.dyk) {
    h += `<button class="dyk-btn" onclick="toggleDyk(this)">✦ &nbsp;Did You Know?</button>
          <div class="dyk-panel" id="dyk-panel">${ev.dyk}</div>`;
  }
  h += '</div>';

  document.getElementById('info-inner').innerHTML = h;

  // Load image with multi-URL fallback
  const img = document.getElementById('ev-photo');
  if (img) loadImageWithFallback(img, ev.photos, ev.emoji, ev.photoCap);
}

function toggleDyk(btn) {
  const panel = document.getElementById('dyk-panel');
  panel.classList.toggle('on');
  btn.innerHTML = panel.classList.contains('on') ? '✕ &nbsp;Close' : '✦ &nbsp;Did You Know?';
}


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