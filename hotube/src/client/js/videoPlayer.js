const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const time = document.getElementById("time");
const volume = document.getElementById("volume");
const connectTime = document.getElementById("connectTime")
const totalTime = document.getElementById("totalTime");
const timeLine = document.getElementById("timeLine");
const fullScreenBtn = document.getElementById("fullScreen");
const videoContainer = document.getElementById("videoContainer");
const videoControl = document.getElementById("videoControl");

let volumeValue = 0.5;
video.volume = volumeValue;
let id = null;

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
    totalTime.innerText = formatTime(Math.floor(video.duration));
    timeLine.max = Math.floor(video.duration);
};

const handleTimeUpdate = () => {
    connectTime.innerText = formatTime(Math.floor(video.currentTime));
    timeLine.value = Math.floor(video.currentTime);
};

const handleTimeLineChange = (event) => {
    const value = event.target.value;
    video.currentTime = value;
};

const handleFullScreen = () => {
    if (document.fullscreenElement === null) {
        videoContainer.requestFullscreen();
        fullScreenBtn.innerText = "Exit Full Screen";
    } else {
        document.exitFullscreen();
        fullScreenBtn.innerText = "Full Screen";
    }
};

const handleMouseMove = () => {
    if (id !== null) {
        clearTimeout(id);
        id = null;
    }
    videoControl.classList.add("showing");
};

const handleMouseLeave = () => {
    id = setTimeout(() => {
        videoControl.classList.remove("showing");
    }, 3000);
};

playBtn.addEventListener("click", handlePlayBtn);
muteBtn.addEventListener("click", handleMuteBtn);
volume.addEventListener("input", handleVolumeChange);
video.readyState>=2 ?  handleTotalTime() : video.addEventListener("loadedmetadata", handleTotalTime);
video.addEventListener("timeupdate", handleTimeUpdate);
timeLine.addEventListener("input", handleTimeLineChange);
fullScreenBtn.addEventListener("click", handleFullScreen);
video.addEventListener("mousemove", handleMouseMove);
video.addEventListener("mouseleave", handleMouseLeave);




