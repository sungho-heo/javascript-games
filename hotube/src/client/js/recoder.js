const recoderBtn = document.getElementById("recoderBtn");


const handleRecoderBtn = async() => {
    const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
    });
    console.log(stream);
};
    
recoderBtn.addEventListener("click", handleRecoderBtn);