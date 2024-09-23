function getCoords() {
    "use strict";
    if (Modernizr.geolocation) {
        var pos = navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
    else {
        alert("Geolocation feature is not supported by your current version of browser!")
    }
}

function onSuccess(pos) {
    "use strict";
    var div1 = document.createElement("div");
    document.body.append(div1);
    div1.insertAdjacentHTML('afterbegin',
                            '<p> Your current latitude: ' + pos.coords.latitude + '</p>\
                            <p> Your current longitude: ' + pos.coords.longitude + '</p>');
    div1.insertAdjacentHTML('afterend', '<p> Data accuracy: ~' + pos.coords.accuracy + ' meters</p>');
}

function onError(error) {
    "use strict";
    switch (error.code) {
        case 0:
            alert("There was an error while retrieving your location: " + error.message);
            break;
        case 1:
            alert("The user prevented this page from retrieving a location.");
            break;
        case 2:
            alert("The browser was unable to determine your location: " + error.message);
            break;
        case 3:
            alert("The browser timed out before retrieving the location.");
            break;
    }
}

function drag() {
    "use strict";
    if (!('draggable' in document.createElement('div'))) {
        alert("Drag and drop feature is not supported by your current version of browser!");
    }
    var cursor = null;
    var item1 = document.getElementById("item1")
    var item2 = document.getElementById("item2")
    var item3 = document.getElementById("item3")
    item1.addEventListener("dragstart", (function (e) { cursor = e.target; }))
    item2.addEventListener("dragstart", (function (e) { cursor = e.target; }))
    item3.addEventListener("dragstart", (function (e) { cursor = e.target; }))
    var drop1 = document.getElementById("drop1");
    var drop2 = document.getElementById("drop2");
    drop1.addEventListener("dragover", (function (e) { e.preventDefault() }));
    drop1.addEventListener("drop", (function (e) {
        cursor.parentNode.removeChild(cursor);
        e.target.appendChild(cursor);
    }));
    drop2.addEventListener("dragover", (function (e) { e.preventDefault() }));
    drop2.addEventListener("drop", (function (e) {
        cursor.parentNode.removeChild(cursor);
        e.target.appendChild(cursor);
    }));
}