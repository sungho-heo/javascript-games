const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoSucess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${config.API_KEY}&units=metric`
    fetch(url).then((response) => response.json()).then((data) => {
        weather.innerText = `${data.weather[0].main} / ${Math.floor(data.main.temp)}`
        city.innerText = data.name;
    })
}

function offGeoError() {
    alert("can't you geolocation data");
}

navigator.geolocation.getCurrentPosition(onGeoSucess, offGeoError);