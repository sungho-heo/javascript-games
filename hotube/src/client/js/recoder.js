import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";


const recoderBtn = document.getElementById("recoderBtn");
const video = document.getElementById("preview");

let stream;
let recorder;
let videoFile;

const handleDownload = async () => {
    const fileName = "recording.webm";
    const tumbName = "thumbnail.jpg";
    const ffmpeg = createFFmpeg({ log: true });
    await ffmpeg.load();

    ffmpeg.FS("writeFile", fileName, await fetchFile(videoFile));

    await ffmpeg.run("-i", fileName, "-r", "60", "output.mp4");
    await ffmpeg.run("-i", fileName, "-ss", "00:00:01", "-vframes", "1", tumbName);

    const mp4File = ffmpeg.FS("readFile", "output.mp4");
    const thumbFile = ffmpeg.FS("readFile", tumbName);

    const mp4Blob = new Blob([mp4File.buffer], { type: "video/mp4" });
    const thumbBlob = new Blob([thumbFile.buffer], { type: "image/jpg" });

    const mp4Url = URL.createObjectURL(mp4Blob);
    const thumbUrl = URL.createObjectURL(thumbBlob);
    
    
    const a = document.createElement("a");
    a.href = mp4Url;
    a.download = "Myrecording.mp4";
    a.click();

    const thumbA = document.createElement("a");
    thumbA.href = thumbUrl
    thumbA.download = "Mythumbnail.jpg"
    thumbA.click();

    ffmpeg.FS("unlink", fileName);
    ffmpeg.FS("unlink", "output.mp4");
    ffmpeg.FS("unlink", tumbName);

    URL.revokeObjectURL(mp4Url);
    URL.revokeObjectURL(thumbUrl);
    URL.revokeObjectURL(videoFile);

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
