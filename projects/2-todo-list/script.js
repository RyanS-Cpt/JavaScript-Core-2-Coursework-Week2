function populateTodoList(todosArr) {
  let list = document.getElementById("todo-list");
  for (let toDo of todosArr){
  let newToDo = document.createElement("li");
   list.appendChild(newToDo);
    newToDo.textContent = toDo.task;
    newToDo.className = "list-group-item d-flex justify-content-between align-items-center";
    let liSPan = document.createElement("span");
    newToDo.appendChild(liSPan);
    liSPan.className = "badge bg-primary rounded-pill";
    let iOne = document.createElement("i");
    let iTwo = document.createElement("i");
    liSPan.appendChild(iOne);
    liSPan.appendChild(iTwo);
    iOne.className = "fa fa-check";
    iTwo.className = "fa fa-trash";
    iOne.setAttribute("aria-hidden","true");
    iTwo.setAttribute("aria-hidden","true");
    iOne.addEventListener("click", ()=>{
      newToDo.style.textDecoration = "line-through";
      newToDo.completed = true;
    });
    iTwo.addEventListener("click", ()=>{
      list.removeChild(newToDo);
    });
  }

  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let newArr = [];
  let todoInput = document.getElementById("todoInput");
  let newTask = {"task": todoInput.value,
  completed: false,};
  newArr.push(newTask);
  populateTodoList(newArr);
  todoInput.value = "";
  // console.log(todos.length);
}

// populateTodoList(todos);
// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
