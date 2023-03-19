const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


function loginSubmit(event) {
    event.preventDefault(); // 방금 일어난 일에 정보를 담은 object임.
    console.log(loginInput.value)
};

loginForm.addEventListener("submit", loginSubmit);


