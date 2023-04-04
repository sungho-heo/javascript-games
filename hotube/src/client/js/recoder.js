const recoderBtn = document.getElementById("recoderBtn");
const video = document.getElementById("preview");


const handleRecoderBtn = async() => {
    const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
    });
    video.srcObject = stream;
    video.play();
};
    
recoderBtn.addEventListener("click", handleRecoderBtn);