const title = document.querySelector("div.header h1")

function handleTitleEvent() {
    const body = document.querySelector("body");
    
    if (body.style.backgroundColor === "green") {
        body.style.backgroundColor = "white";
    } else {
        body.style.backgroundColor = "green";
    }
    

};

title.addEventListener("click", handleTitleEvent);