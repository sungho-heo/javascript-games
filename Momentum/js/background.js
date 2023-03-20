const backgroundImages = ["01.jpeg", "02.jpeg", "03.jpeg", "04.jpeg", "05.png"];
const randomImages = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
const getImg = document.createElement("img");
getImg.src = `img/${randomImages}`;
document.body.appendChild(getImg);