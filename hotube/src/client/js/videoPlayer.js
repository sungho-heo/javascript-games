const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const time = document.getElementById("time");
const volume = document.getElementById("volume");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");

let volumeValue = 0.5;
video.volume = volumeValue;
playBtn.innerText = "Play";

const formatTime = (seconds) => {
    let time = seconds;
    if (time < 3600) {
        time = new Date(time * 1000).toISOString().substring(14, 19);
    } else {
        time = new Date(time * 1000).toISOString().substring(11, 19);
    }
    return time;
};

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
    if (video.volume===0) {
        video.muted = true;
    } else {
        video.muted = false;
    }
    volumeValue = value;
    video.volume = volumeValue;
    muteBtn.innerText = video.volume === 0 ? "Unmute" : "Mute";
};

const handleTotalTime = () => {
    totalTime.innerText =  formatTime(Math.floor(video.duration));
};

const handleTimeUpdate = () => {
    currentTime.innerText = formatTime(Math.floor(video.currentTime));
}

playBtn.addEventListener("click", handlePlayBtn);
muteBtn.addEventListener("click", handleMuteBtn);
volume.addEventListener("input", handleVolumeChange);
video.addEventListener("loadedmetadata", handleTotalTime);
video.addEventListener("timeupdate", handleTimeUpdate);



