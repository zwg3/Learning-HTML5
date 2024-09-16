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