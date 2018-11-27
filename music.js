const audio = new Audio('I like trains.mp3');

audio.oncanplay = function() {
    if (document.getElementById("music").checked) {
        this.play()
    } else {
        this.stop()
    }
};

function play(el) {
    if (el.checked) {
        audio.load();
    }
}
