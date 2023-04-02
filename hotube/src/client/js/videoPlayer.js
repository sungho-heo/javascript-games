const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const time = document.getElementById("time");
const volume = document.getElementById("volume");

let volumeValue = 0.5;
video.volume = volumeValue;
playBtn.innerText = "Play";

const handlePlayBtn = (event) => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
    playBtn.innerText = video.paused ? "Play" : "Pause";
};

const handleMuteBtn = (event) => { 
    if (video.muted) {
        video.muted = false;

    } else {
        video.muted = true;
    }
    muteBtn.innerText = video.muted ? "Unmute" : "Mute";
    volume.value = video.muted ? 0 : volumeValue;
};

const handleVolumeChange = (event) => {
    const value = event.target.value;
    volumeValue = value;
    video.volume = volumeValue;
    if (video.volume===0) {
        video.muted = true;
    } else {
        video.muted = false;
    }
    muteBtn.innerText = video.volume === 0 ? "Unmute" : "Mute";
};

playBtn.addEventListener("click", handlePlayBtn);
muteBtn.addEventListener("click", handleMuteBtn);
volume.addEventListener("input", handleVolumeChange);


