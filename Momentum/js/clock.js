const clockKey = document.querySelector("h2#user-clock");

function getDateInterval() {
    const date = new Date();
    clockKey.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    if (date.getSeconds() < 10) {
        clockKey.innerText = `${date.getHours()}:${date.getMinutes()}:0${date.getSeconds()}`
    }
};
getDateInterval();
setInterval(getDateInterval, 1000);