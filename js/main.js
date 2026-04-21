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
        var infoWidth = window.innerWidth - 40
        var trackerWidth = window.innerWidth - 150
    } else {
        var mapWidth = window.innerWidth * 0.5 - 25
        var infoWidth = window.innerWidth * 0.5 - 25
        var trackerWidth = window.innerWidth - 100
    }

    // set heights, proportionally consistent across window dimensions
    var mapHeight = window.innerHeight - 250;
    var infoHeight = window.innerHeight - 250;
    var trackerHeight = window.innerHeight - 100;

    // begin script when window loads
    window.onLoad = setWindow;

    // set up window, include map, info, and tracker containers
    function setWindow() {

        // call map, infobox, and distance tracker functions
        setMap();

        setInfoBox();

        setDistTrack();




    }; // end of setWindow()

    // set up function  to create the map
    function setMap() {

        // create svg container for map
        var map = d3.select("map")
            .append("svg")
            .attr("class", "map")
            .attr("width", mapWidth)
            .attr("height", mapHeight)

    }; // end of setMap()

    // set up function to create infoBox
    function setInfoBox() {

        // create svg container for info/context
        var infoBox = d3.select("infoBox")
            .append("svg")
            .attr("class", "infoBox")
            .attr("height", infoHeight)
            .attr("width", infoWidth)

    }; // end of setInfoBox()

    // set up function to create distance tracker
    function setDistTrack() {

        // create svg container for distance tracker
        var distTracker = d3.select("distTracker")
            .append("svg")
            .attr("class", "distTracker")
            .attr("width", trackerWidth)
            .attr("height", trackerHeight)

    }; // end of setDistTrack()


}); // end of entire script