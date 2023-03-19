const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");


function buttonClicked() {
    if (loginInput.value === "") {
        alert("plz Login Input name");
    } else {
        alert("good job")
    }
};

loginBtn.addEventListener("click", buttonClicked);
