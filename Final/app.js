/*form validation functions*/
function isValidColor(input_id) {
    "use strict"
    var elem = document.getElementById(input_id);
    elem.addEventListener('focusout', changeValid);

    function changeValid() {

        if (elem.value == "") {
            elem.style.backgroundColor = "white";
        }

        else if (elem.checkValidity()) {
            elem.style.backgroundColor = "hsl(120, 100%, 70%)";
        }

        else {
            elem.style.backgroundColor = "hsl(0, 100%, 66%)";
        }
    }
}

/*local storage functions*/
function alertIfNoLocalStorage() {
    "use strict"
    if (!Modernizr.localstorage) {
        alert("Local storage is not supported on your current version of browser! The page content might display incorrectly.");
    };
}

function update() {
    "use strict"
    var tBody = document.getElementById("tBody")
    while (tBody.getElementsByTagName("tr").length > 0) {
        tBody.deleteRow(0);
    }

    var tr;
    var cell;

    if (localStorage.length == 0) {
        tr = tBody.insertRow(0);
        cell = tr.insertCell(0);
        cell.colSpan = "3";
        cell.innerHTML = "Nothing here";
    }



    for (var i = 0; i < localStorage.length; ++i) {
        tr = tBody.insertRow(i);
        cell = tr.insertCell(0);
        cell.innerHTML = localStorage.key(i);
        cell = tr.insertCell(1);
        cell.innerHTML = localStorage.getItem(localStorage.key(i));
        cell = tr.insertCell(2);
        cell.innerHTML = "<button value='delete' onclick='(function () { deleteItem(\"" + localStorage.key(i) + "\");})()'>Delete</button>";
    }
}

function save() {
    "use strict"
    var key = document.getElementById('f1').value;
    var value = document.getElementById('f2').value;
    localStorage.setItem(key, value);
    update();
}

function deleteItem(key) {
    "use strict"
    localStorage.removeItem(key);
    update();
}

function clearLocalStorage() {
    "use strict";
    localStorage.clear();
    update();
}

/*graphics functions*/
/*canvas functions*/
function canvDemo() {
    "use strict";
    if (Modernizr.canvas) {
        var div1 = document.getElementById('canvasEx1');
        div1.insertAdjacentHTML('afterbegin', '<canvas id="canva1" width="250" height="200" draggable="true">');
        div1.insertAdjacentHTML('afterbegin', '<canvas id="canva2" width="250" height="200" draggable="true">');
        drawGrad('canva1');
        drawCircle('canva2');
    }
    else { alert("Canvas feature is not supported on your current browser version."); }        

}

function drawGrad(id) {
    "use strict";
    var context = document.getElementById(id).getContext('2d');
    var grad = context.createLinearGradient(0, 0, 250, 150);
    grad.addColorStop(0, "#cc6699");
    grad.addColorStop(0.5, "#00cc99");
    grad.addColorStop(1, "#ffff00");
    context.fillStyle = grad;
    context.roundRect(0, 30, 200, 150, [10, 30]);
    context.fill();
}

function drawCircle(id) {
    "use strict";
    var context = document.getElementById(id).getContext('2d');
    context.beginPath();
    context.arc(95, 100, 70, 0, 2 * Math.PI);
    context.fillStyle = "#ccddff";
    context.fill();
    context.lineWidth = 10;
    context.strokeStyle = "#ffff80";
    context.stroke();
}

/*drag&drop functions*/
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

/*geolocation functions*/

function getCoords() {
    "use strict";
    if (Modernizr.geolocation) {
        var pos = navigator.geolocation.getCurrentPosition(onSuccess, onError);
        return pos;
    }
    else {
        alert("Geolocation feature is not supported by your current version of browser!")
    }    
}

function onSuccess(pos) {
    "use strict";
    var div1 = document.getElementById("coords");
    div1.insertAdjacentHTML('afterbegin',
                            '<p> Your current latitude: ' + pos.coords.latitude + '</p>\
                             <p> Your current longitude: ' + pos.coords.longitude + '</p>');
    div1.insertAdjacentHTML('afterend', '<p> Data accuracy: ~' + pos.coords.accuracy + ' meters</p>\
                             <label id="dataLbl">Approximated position on the map:</label>');
    getMap([pos.coords.latitude, pos.coords.longitude]);
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



function getMap(coords) {
    var map = L.map('map').setView(coords, 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '<a href="http://www.openstreetmap.org/copyright"></a>'
    }).addTo(map);
}



/*multimedia functions*/
function loopToggle() {
    var audio = document.getElementById('audio1');
    var btn = document.getElementById('btnToggle');
    if (audio.loop != true) {
        audio.loop = true;
        btn.innerHTML = "Loop On";
        audio.load();
    }
    else {
        audio.loop = false;
        btn.innerHTML = "Loop Off";
        audio.load();
    }
}