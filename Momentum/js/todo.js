const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function createToDo(todayList) {
    const getList = document.createElement("li");
    const getSpan = document.createElement("span");
    getSpan.innerText = todayList;
    getList.appendChild(getSpan);
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
