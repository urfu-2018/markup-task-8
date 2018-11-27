function moveCanvas(event) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const mouseX = window.event.clientX;
    const mouseY = window.event.clientY;
    const canvas = document.getElementsByClassName("canvas")[0];
    canvas.style.transform = "perspective(960px)";
    canvas.style.transform += " rotateX(" + -(mouseY / (windowHeight / 360) / 10) + "deg)";
    canvas.style.transform += " rotateY(" + mouseX / (windowWidth / 360) / 10 + "deg)";
}
