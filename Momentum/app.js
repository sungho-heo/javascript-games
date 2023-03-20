const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const hello = document.querySelector("#user-hello");
const CSS_HIDDEN = "hidden";


function loginSubmit(event) {
    event.preventDefault(); // 방금 일어난 일에 정보를 담은 object임.
    const userName = loginInput.value;
    loginForm.classList.add(CSS_HIDDEN);
    hello.innerText = "Hello " + userName;
    hello.classList.remove(CSS_HIDDEN);
};

loginForm.addEventListener("submit", loginSubmit);


