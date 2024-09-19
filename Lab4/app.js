function drawGrad(id) {
    "use strict";
    var context = document.getElementById(id).getContext('2d');
    var grad = context.createLinearGradient(0, 0, 500, 350);
    grad.addColorStop(0, "#ff0066");
    grad.addColorStop(0.5, "#00cc99");
    grad.addColorStop(1, "#ffff00");
    context.fillStyle = grad;
    context.fillRect(0, 0, 500, 350);
}

function drawSvg() {
    let div1 = document.createElement("div");
    document.body.append(div1);
    if (Modernizr.svg) {
        div1.insertAdjacentHTML('afterbegin',
            '<p>Inline svg example:</p>\
            <svg width = "100" height = "100" >\
            <circle cx="50" cy="50" r="40" stroke="red" stroke-width="5" fill="cyan" />' );
        div1.insertAdjacentHTML('afterend',
            '<p>Embed svg example:</p>\
            <embed src = "test1.svg" type = "image/svg+xml" width = "270" height = "170"/>\
            <p>Object svg example:</p>\
            <object data = "test2.svg" type = "image/svg+xml" width = "270" height = "170"/>\
            <p>Inline svg example:</p>');
    }
    else {
        div1.insertAdjacentHTML('afterbegin', 'SVG feature is not supported by your current browser version!');}
}

function canvDemo() {
    let div1 = document.createElement("div");
    document.body.append(div1);
    if (Modernizr.canvas) {
        div1.insertAdjacentHTML('afterbegin', '<canvas id="canva" width="500" height="350"></canvas>');
        (function () { drawGrad('canva');})()
    }
    else { div1.insertAdjacentHTML('afterbegin', 'Canvas feature is not supported on your current browser version!');}
}