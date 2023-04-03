// html tag id
const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const playIcon = playBtn.querySelector("i");
const muteBtn = document.getElementById("mute");
const muteIcon = muteBtn.querySelector("i");
const time = document.getElementById("time");
const volume = document.getElementById("volume");
const connectTime = document.getElementById("connectTime")
const totalTime = document.getElementById("totalTime");
const timeLine = document.getElementById("timeLine");
const fullScreenBtn = document.getElementById("fullScreen");
const fullScreenIcon = fullScreenBtn.querySelector("i");
const videoContainer = document.getElementById("videoContainer");
const videoControl = document.getElementById("videoControl");

// volume
let volumeValue = 0.5;
video.volume = volumeValue;

// mouse timeout
let leaveMouseTimeout = null;
let moveMouseTimeout = null;

// totaltime and connecttime format
const formatTime = (seconds) => {
    let time = seconds;
    if (time < 3600) {
        time = new Date(time * 1000).toISOString().substring(14, 19);
    } else {
        time = new Date(time * 1000).toISOString().substring(11, 19);
    }
    return time;
};

// video play function
const handlePlayBtn = (event) => {
    console.log(playIcon.classList.value);
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
    playIcon.classList = video.paused ? "fa-regular fa-circle-play" : "fa-regular fa-circle-stop";
};

//mute function
const handleMuteBtn = (event) => { 
    if (video.muted) {
        video.muted = false;
    } else {
        video.muted = true;
    }
    // unmute mute
    muteIcon.classList = video.muted ? "fa-solid fa-volume-xmark" : "fa-solid fa-volume-low";
    volume.value = video.muted ? 0 : volumeValue;
};

// volume function
const handleVolumeChange = (event) => {
    const value = event.target.value;
    if (video.volume===0) {
        video.muted = true;
    } else {
        video.muted = false;
    }
    volumeValue = value;
    video.volume = volumeValue;
    muteIcon.classList = video.volume === 0 ? "fa-solid fa-volume-xmark" : "fa-solid fa-volume-low";
    muteIcon.classList = video.volume > 0.5 ? "fa-solid fa-volume-high" : "fa-solid fa-volume-low";
};


// timline and totaltime connecttime function
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


//fullscreen function
const handleFullScreen = () => {
    if (document.fullscreenElement === null) {
        videoContainer.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
    fullScreenIcon.classList =
        document.fullscreenElement === null
            ? "fa-solid fa-compress"
            : "fa-solid fa-expand";
};


//mouse function
const hideControl = () => {
   return  videoControl.classList.remove("showing");
}

const handleMouseMove = () => {

    if (leaveMouseTimeout !== null) {
        clearTimeout(leaveMouseTimeout);
        leaveMouseTimeout = null;
    };
    if (moveMouseTimeout !== null) {
        clearTimeout(moveMouseTimeout);
        moveMouseTimeout = null;
    }
    videoControl.classList.add("showing");
    moveMouseTimeout = setTimeout(hideControl, 3000);
};

const handleMouseLeave = () => {
    leaveMouseTimeout = setTimeout(hideControl, 3000);
};

// Event handle
playBtn.addEventListener("click", handlePlayBtn);
muteBtn.addEventListener("click", handleMuteBtn);
volume.addEventListener("input", handleVolumeChange);
video.readyState>=2 ?  handleTotalTime() : video.addEventListener("loadedmetadata", handleTotalTime);
video.addEventListener("timeupdate", handleTimeUpdate);
timeLine.addEventListener("input", handleTimeLineChange);
fullScreenBtn.addEventListener("click", handleFullScreen);
videoContainer.addEventListener("mousemove", handleMouseMove)
videoContainer.addEventListener("mouseleave", handleMouseLeave)




