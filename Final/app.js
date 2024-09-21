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