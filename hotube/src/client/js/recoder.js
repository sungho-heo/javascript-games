const recoderBtn = document.getElementById("recoderBtn");
const video = document.getElementById("preview");

let stream;
let recorder;

const handleDownload = () => {
    
};

const handleStop = () => {
    recoderBtn.innerText = "Download Recorder";
    recoderBtn.removeEventListener("click", handleStop);
    recoderBtn.addEventListener("click", handleDownload)
    recorder.stop();
}

const handleStart = () => {
    recoderBtn.innerText = "Stop Recording";
    recoderBtn.removeEventListener("click", handleStart);
    recoderBtn.addEventListener("click", handleStop);
    recorder = new MediaRecorder(stream);
    recorder.ondataavailable = (event) => {
        const videoFile = URL.createObjectURL(event.data);
        video.srcObject = null;
        video.src = videoFile;
        video.loop = true;
        video.play();
    };
    recorder.start();
};

const init = async() => {
    stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
    });
    video.srcObject = stream;
    video.play();
};

init();
    
recoderBtn.addEventListener("click", handleStart);