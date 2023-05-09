// 함수 짧게 쓰는 방법 !
// (item) => console.log("this is  turn of", item); 화살표 함수라 부림

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "toDos";


let toDos = [];



function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));

    //JSON.stringify -> 모든 문항을 string화
    //JSON.parse -> 문장화된 배열을 JS에서 읽을 수 있도록 실제 배열화 시킴
}

function deleteToDo (event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    
}


function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

}


function handleToDoSumbit (event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSumbit);




const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); // -> 배열 각각 아이템에 해당하여 할 일을 할당하는 것?
}

