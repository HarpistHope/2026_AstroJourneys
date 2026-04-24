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
        distance: 0.16, // (852 ft) duration: 59 sec, altitude: 10 ft
        coords: [-75.7, 36.0], // Kill Devil Hills, Kitty Hawk, NC (lng, lat)
        location: "Kill Devil Hills, near Kitty Hawk, NC",
        locDateFounded: "",
        locImage: "",
        infoImage: "1903_First_Flight.jpg",
        funFact: 'Without existing equipment on the market, the Wright Brothers not only designed their own wind tunnel to test wing shape, but also engineered a lightweight gasoline engine and custom propeller to power their aircraft, the "Flyer".'
    },
    {
        title: "NASA is Born",
        description: "NASA opened for business in Washington, D.C.",
        year: 1958, // complete date Oct. 1, 1958
        distance: 
        coords: [-77.0, 38.9], // Washington, D.C. (lng, lat)
        location: "Washington, D.C.",
        locDateFounded: "",
        locImage: "NASAFirstHeadquarters.jpg", //The Dolly Madison House, 1520 H Street, NW, in Washington, DC
        infoImage: "NACA_XSeriesPressureSuit.jpg", //Robert Champine in X-Series Pressure Suit, 1957 - one of the first designs built to protect pilots' bodies in the event of exposure to the low air pressure at high altitude.
        funFact: "NASA's footing was built on the vast aeronautics research of NACA, the National Advisory Committee for Aeronautics, founded in 1915."
    },
    {
        title: "The “Original Seven”",
        description: "NASA’s First Astronauts",
        year: 1959, // complete date April 9, 1959
        distance: "",
        coords: [], // Washington, D.C. (lng, lat)
        location: "",
        locDateFounded: "",
        locImage: "",
        infoImage: "original7.jpg",
        funFact: "Wally Schirra, Deke Slayton, John Glenn, Scott Carpenter, Alan Shepard, Gus Grissom, and Gordon Cooper were selected as NASA’s Mercury astronauts. This delegation propelled them into the center of public attention as the faces of American space exploration"
    },
    {
        title: "The US Makes it to Space: Mercury-Redstone 3 Freedom 7 Mission",
        description: "First American in Space",
        year: 1961, // complete date May 5, 1961
        distance: 303, //duration: 00:15:28 HMS
        coords: [-80.6, 28.5], // (lng, lat)
        location: "", // The event locations will have a lot of repeats. Should we incorporate a location for a relatable fact? Astronaut's hometown, etc?
        locDateFounded: "",
        locImage: "",
        infoImage: "",
        funFact: "Astronaut Alan Shepard Jr. witnessed a view of Earth no American had seen before. Part of Project Mercury which spanned 25 flights over between 1961 and 1963, the Freedom 7 mission lasted 15 minutes, 28 seconds."
    },
    {
        title: "The Power of One: Project Mercury",
        description:""
        year: 1961-1963
        distance: "",
        coords: [], 
        location: "",
        locDateFounded: "",
        locImage: "",
        infoImage: "",
        funFact: "With room for only one astronaut per mission, Project Mercury launched six missions, showing that humans could function for periods up to 34 hours of weightless flight."
    },
    {
        title: "Mercury-Atlas 6: Friendship 7 Mission",
        description: "Astronaut John Glenn made history onboard the Friendship 7 Mercury spacecraft, becoming the first U.S. astronaut to orbit Earth.",
        year: 1962, // complete date February 20, 1962
        distance: 75679, //duration: 04:55:23 HMS
        coords: [-80.6, 28.5], // (lng, lat)
        location: "Cape Canaveral",
        locDateFounded: "",
        locImage: "",
        infoImage: "",
        funFact:""
    },
    {
        title: "Gemini IV Mission: First Walk in Space",
        description: "NASA astronaut Ed White became the first American to walk in space.",
        year: 1965, // complete date June 3, 1965
        distance: 1600000, //duration: 97:56:12 HMS
        coords: [-80.6, 28.5], // (lng, lat)
        location: "Cape Canaveral",
        locDateFounded: "",
        locImage: "",
        infoImage: "",
        funFact: ""
        // funFact2: "Project Gemini expanded onboard capacity to two astronauts, spanning 10 manned missions."
    },
    {
        title: "Apollo 1: Our First Loss",
        description: "The Apollo 1 Mission marked the first tragedy of spaceflight as fire broke out during a preflight test, taking the lives of Astronauts Gus Grissom, Ed White, and Roger Chaffee, fueling a renewed dedication to safety protocol.",
        year: 1967, // complete date Jan. 27, 1967
        distance: , //duration: 
        coords: [-80.6, 28.5], // (lng, lat)
        location: "Cape Canaveral",
        locDateFounded: "",
        locImage: "",
        infoImage: "",
        funFact: ""
    },
    {
        title: "Messages from Space",
        description: "The first live TV broadcast from a manned U.S. spacecraft",
        year: 1968, // complete date Oct. 19, 1968
        distance: , //duration: 
        coords: [], // (lng, lat)
        location: "",
        locDateFounded: "",
        locImage: "",
        infoImage: "",
        funFact:""

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
    },
    {
        title: "Apollo 13: Beating the Odds",
        description: "",
        year: 1970, //complete year: April 17, 1970 
        distance: , //duration: 
        coords: [], // (lng, lat)
        location: "",
        locDateFounded: "",
        locImage: "",
        infoImage: "", 
        funFact: "The Apollo 13 crew used ingenuity to configure onboard equipment and supplies to successfully remove carbon dioxide from the Lunar Module after an oxygen tank explosion, returning to Earth safely."
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