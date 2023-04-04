const recoderBtn = document.getElementById("recoderBtn");
const video = document.getElementById("preview");

let stream;

const handleStop = () => {
    recoderBtn.innerText = "Start Recording";
    recoderBtn.removeEventListener("click", handleStop);
    recoderBtn.addEventListener("click", handleStart);
}

const handleStart = () => {
    recoderBtn.innerText = "Stop Recording";
    recoderBtn.removeEventListener("click", handleStart);
    recoderBtn.addEventListener("click", handleStop);
    const recorder = new MediaRecorder(stream);
    recorder.ondataavailable = (event) => {
        console.log("recoder done");
        console.log(event);
        console.log(event.data);
    };
    console.log(recorder);
    recorder.start();
    console.log(recorder);
    setTimeout(() => {
        recorder.stop();
    }, 10000);
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