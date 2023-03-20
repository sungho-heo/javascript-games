const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const hello = document.querySelector("#user-hello");
const CSS_HIDDEN = "hidden";
const USER_NAME = "username";


function loginSubmit(event) {
    event.preventDefault(); // 방금 일어난 일에 정보를 담은 object임.
    const userName = loginInput.value;
    loginForm.classList.add(CSS_HIDDEN);
    localStorage.setItem(USER_NAME, userName)
    handleTextUser(userName)
};

function handleTextUser(username) {
    hello.innerText = "Hello " + username;
    hello.classList.remove(CSS_HIDDEN);
};

const localUserName = localStorage.getItem(USER_NAME)

if (localUserName === null) {
    loginForm.classList.remove(CSS_HIDDEN);
    loginForm.addEventListener("submit", loginSubmit);
} else {
    handleTextUser(localUserName);
};



