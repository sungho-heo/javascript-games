const clockKey = document.querySelector("h2#user-clock");

function getDateInterval() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0"); //여기서 String으로 변환을 한 이유는 date에서 얻어오는 값은 int값이여서 padstart를 쓰기위해서는 string으로 변경해줘야함.
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clockKey.innerText = `${hours}:${minutes}:${seconds}`
};
getDateInterval(); // 시간의 텀이 생기는걸 막아주기 위해서 먼저 함수를 실행시킨다. 그럼 타임딜레이가 1초가 생기는걸 막을수있다.
setInterval(getDateInterval, 1000);