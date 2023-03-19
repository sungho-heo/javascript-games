const title = document.querySelector("div.header h1")

function handleTitleEvent() {
    const body = document.querySelector("body");
    // document.body.style.backgorundColor 이런식으로 가져오는게 가능한게 body다.. 신기하네
    if (body.style.backgroundColor === "green") {
        body.style.backgroundColor = "white";
    } else {
        body.style.backgroundColor = "green";
    }
    

};
function handleWindowOffline() {
    alert("oh no wifi plz connect")
}
function handleWindowOnline() {
    alert("gob job wifi connect")
}
title.addEventListener("click", handleTitleEvent);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);