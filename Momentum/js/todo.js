const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

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
    createToDo(newToDo);
};

toDoForm.addEventListener("submit", toDoSubmit);
