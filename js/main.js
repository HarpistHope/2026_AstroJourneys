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