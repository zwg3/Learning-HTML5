function setIcon(input_id, img_id) {
    "use strict"
    var elem = document.getElementById(input_id);
    var icon = document.getElementById(img_id);
    elem.addEventListener('focusout', changeImgIfValid);    

    function changeImgIfValid() {
        if (elem.checkValidity()) {
            icon.src = "yes.jpeg"
        }
        else {
            icon.src="no.jpeg"
        }
    }    
}

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
    var key = document.getElementById('iName').value;
    var value = document.getElementById('iPhone').value;
    localStorage.setItem(key, value);
    update();
}

function deleteItem(key) {
    "use strict"
    localStorage.removeItem(key);
    update();
}

