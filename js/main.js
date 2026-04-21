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
//                  + timeline scroll
//                  + Return to Launch button, resets timeline & activates landing page popup/window
//              -- Map view containing map
//                  + zoom linked to timeline scroll/click
//                  + small popup (similar to leaflet popups?) containing concise location info
//              -- Information Box
//                  + updates with timeline scroll/click
//                  + text (should be able to scroll if necessary?)
//                  + pictures embedded in text (with associated image descriptions - located static below or activated on mouseover?)
//              -- Distance tracker
//                  + zoom out linked with timeline click
//                  + shuttle graphic moves further from earth with timeline click
//                  + possible hover or click interaction to trigger exact distance popup? Or just place shuttle graphic label alongside with dynamically updating distance

// Wrap entire script in anonymous function
(function() {

    // create welcome/landing page item
    var landing = d3.select("body")
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

    // close landing page on click
    d3.select(".close-btn").on("click", function() {
        landing.style("display","none")
    });

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
    var timelineHeight = window.innerHeight;

    // pseudoglobal variables   

    // eventual list of timeline events, placeholder examples in there right now
    // NOTE: We should decide if distances will be in miles or km lol
    var events = [    
        {
        title: "Apollo 11",
        description: "First Moon landing",
        year: 1969,
        distance: 238855,
        coords: [-80.6, 28.6] // Kennedy Space Center (lng, lat)
        // think about adding linked image and map view for each event here
    },
    {
        title: "Artemis II",
        description: "Farthest distance from Earth",
        year: 2026,
        distance: 252756,
        coords: [-80.6, 28.6] // Kennedy Space Center (lng, lat)
    }
];

    // all variables here are defined 'globally,' they are all called in several functions below
    var map, g, path, zoom, locationPopup, projection;

    // create currentEvent variable, starts at index 0
    var currentEvent = 0;

    // define maxDistance (check how distance attribute is called in event data)
    var maxDistance = d3.max(events, d => d.distance);

    // begin script when window loads
    window.onload = setWindow;

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
            d3.csv(""),
            d3.json("") // put data sources here
        ];
        Promise.all(promises).then(callback);

        // add zoom interaction behavior to the map (from d3 example)
        zoom = d3.zoom()
            .scaleExtent([1, 8])
            .on("zoom", zoomed);
        map.call(zoom);
        
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
            .attr("height", trackerHeight)

        d3.select("#distTracker svg") // add shuttle svg (literally just a circle for now, Ill figure out how to add an actual shuttle graphic/icon later)
            .append("circle")
            .attr("class", "shuttle")
            .attr("r", 10)
            .attr("cy", 50);

    }; // end of setDistTrack()

    // set up function to join csv data to geojson -- atm, copied from Hope's D3 lab
    function joinData(usStates, csvData){

        //loop through csv to assign each set of csv attribute values to geojson states
            for (var i = 0; i < csvData.length; i++) {
                var csvState = csvData[i]; //the current state
                var csvKey = csvState.ISO3166_2; //the CSV primary key

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
        
        // define event 
        var event = events[index];

        // add locationPopup layout
        d3.select(".locationPopup")
            .html(`
                <h2>${event.title}</h2>
                <p>${event.description}</p>
                <p><strong>Year:</strong> ${event.year}</p>
            `);

        // add infoBox text
        d3.select(".info-content")
            .html(`
                <h2>${event.title}</h2>
                <p>${event.description}</p>
                <p><strong>Year:</strong> ${event.year}</p>
                <p><strong>Distance from Earth:</strong> ${event.distance}</p>
                <img src="someImage.jpg" style="width:100%; border-radius:8px;">
            `);

        // set up scale for the distance tracker
        var scale = d3.scaleLinear()
            .domain([0, maxDistance]) // need maxDistance from data, will be most recent distance from Artemis II journey (252,756 miles (406,771 km) from Earth)
            .range([0, trackerWidth]);

        // move shuttle graphic along distance tracker scale
        d3.select(".shuttle") // will need to create shuttle graphic, circle for now
            .transition()
            .attr("cx", scale(event.distance));

        // zoom to event location on the map
        zoomToLocation(event);

        // test updateViews once data is loaded
        console.log("Event: ", event);

    }; // end of updateViews()

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

}); // end of entire script