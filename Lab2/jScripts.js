function resize(id) {
    "use strict";
    let clickCount = 0;
    let elem = document.getElementById(id)
    elem.addEventListener("click", resize1);
    function resize1() {
        if (clickCount == 0) {
            clickCount++;
            document.getElementById(id).width *= 2;
            document.getElementById(id).height *= 2;
        }
        else {
            clickCount--;
            document.getElementById(id).width /= 2;
            document.getElementById(id).height /= 2;
        }
    }
}

function opener(id) {
    "use strict";
    let elem = document.getElementById(id);
    let params = "scrollbars = no, resizable = yes, status = yes, location = yes, toolbar = yes, menubar = yes, width = 300, height = 400";
    elem.addEventListener("click", win);
    function win() { window.open('', '', params); }
}