const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let userToDo = [];

const getToDoKey = "todos";

function saveToDo() {
    localStorage.setItem(getToDoKey, JSON.stringify(userToDo))
}

function offToDoList(event) {
    const offLi = event.target.parentElement;
    offLi.remove();
    userToDo = userToDo.filter((todo) => { return todo.id !== parseInt(offLi.id) });
    saveToDo();
}

function createToDo(todayList) {
    const getList = document.createElement("li");
    getList.id = todayList.id; // li 에 id값을 넣어주지않으면 li 안에 span태그 값들을 삭제하는게 어려워진다 일일히 지워야하는데 그것보다 li에 id를 줘서 한번에 지우는 작업을 해줌.
    const getSpan = document.createElement("span");
    const buttonTodo = document.createElement("input");
    buttonTodo.type = "checkbox";
    buttonTodo.addEventListener("click", offToDoList);
    getSpan.innerText = todayList.text;
    getList.appendChild(getSpan);
    getList.appendChild(buttonTodo);
    toDoList.appendChild(getList);
}

function toDoSubmit(event) {
    event.preventDefault(); 
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        id: Date.now(), 
        text: newToDo,
    };
    userToDo.push(newToDoObj);
    createToDo(newToDoObj);
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
