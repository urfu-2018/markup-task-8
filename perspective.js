var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
var height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
function mouseCoords(e) {
    x = e.pageX - width / 2; // Координата X курсора
    y = e.pageY - height / 2; // Координата Y курсора
    document.getElementById("canvas").style.transform = "perspective(960px) rotateX("
        + -(y / (height / 360) / 10) + "deg) rotateY("
        + x / (width / 360) / 10 + "deg)";
    document.getElementById("canvas").style.transformOrigin = Math.abs((x - width / 2) / 2)
    + "px " + Math.abs((y - height / 2) / 2) + "px";
}