const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let userToDo = [];

const getToDoKey = "todos";

function saveToDo() {
    localStorage.setItem(getToDoKey, JSON.stringify(userToDo))
}

function offToDoList(event) {
    const offli = event.target.parentElement;
    offli.remove();
}

function createToDo(todayList) {
    const getList = document.createElement("li");
    const getSpan = document.createElement("span");
    const buttonTodo = document.createElement("input");
    buttonTodo.type = "checkbox";
    buttonTodo.addEventListener("click", offToDoList);
    getSpan.innerText = todayList;
    getList.appendChild(getSpan);
    getList.appendChild(buttonTodo);
    toDoList.appendChild(getList);
}

function toDoSubmit(event) {
    event.preventDefault(); 
    const newToDo = toDoInput.value;
    console.log(toDoInput.value);
    toDoInput.value = "";
    userToDo.push(newToDo);
    createToDo(newToDo);
    saveToDo();
};

// function callHello(item) {
    // console.log("hello!!",item)
// }

toDoForm.addEventListener("submit", toDoSubmit);

const getToDo = localStorage.getItem(getToDoKey);

// foreach 는 두가지 방식이 있다. function을 통한 구현 or => 화살표함수를 통한 구현 여기서는 화살표 함수를 사용하겠다.
if (getToDo !== null) {
    const parseToDo = JSON.parse(getToDo);
    userToDo = parseToDo // 새로고침 했을때 localstorages가 리셋되는걸 방지해줌. >정확히는 새로운 값으로 덮어씌우는걸 막아줌.
    parseToDo.forEach(createToDo) // 이전의 것을 화면에도 나오게 하려면 배열의 형태로 뿌려줘야함. forEach가 배열의 값 하나씩 나열하므로 그것을 이용한것.
}
