import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";


const recoderBtn = document.getElementById("recoderBtn");
const video = document.getElementById("preview");

let stream;
let recorder;
let videoFile;

const handleDownload = async() => {
    const ffmpeg = createFFmpeg({ log: true });
    await ffmpeg.load();

    ffmpeg.FS("writeFile", "recording.webm", await fetchFile(videoFile));
    await ffmpeg.run("-i", "recording.webm", "recording.mp4");
    
    const a = document.createElement("a")
    a.href = videoFile
    a.download = "Myrecording.webm"
    a.click()
};

const handleStop = () => {
    recoderBtn.innerText = "Download Recorder"
    recoderBtn.removeEventListener("click", handleStop)
    recoderBtn.addEventListener("click", handleDownload)
    recorder.stop()
};

const handleStart = () => {
    recoderBtn.innerText = "Stop Recording"
    recoderBtn.removeEventListener("click", handleStart)
    recoderBtn.addEventListener("click", handleStop)
    recorder = new MediaRecorder(stream, { mimeType: "video/webm" })
    recorder.ondataavailable = (event) => {
        videoFile = URL.createObjectURL(event.data)
        video.srcObject = null
        video.src = videoFile
        video.loop = true
        video.play()
    }
    recorder.start()
};

const init = async () => {
    stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
    })
    video.srcObject = stream
    video.play()
};

init();

recoderBtn.addEventListener("click", handleStart);
