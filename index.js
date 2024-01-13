var n = document.querySelectorAll(".drum").length;
var volume = 1.0; 

function playAudio(key) {
    var soundFile = "sounds/" + key.dataset.sound;
    var audio = new Audio(soundFile);

    audio.volume = volume;
    audio.play();
}

for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        playAudio(this);
        buttonAnimation(this);
    });
}

document.addEventListener("keydown", function (event) {
    var keyPressed = event.key.toLowerCase();
    var button = document.querySelector("." + keyPressed + ".drum");
    
    if (/[wasdjklm]/.test(keyPressed) && button) {
        playAudio(button);
        buttonAnimation(button);
    }
});

function buttonAnimation(currentButton) {
    currentButton.classList.add("pressed");
    setTimeout(function () {
        currentButton.classList.remove("pressed");
    }, 100);
}

document.getElementById("volumeControl").addEventListener("input", function () {
    volume = this.value / 100;
});
