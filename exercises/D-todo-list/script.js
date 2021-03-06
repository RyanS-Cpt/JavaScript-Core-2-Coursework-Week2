function todoList(todosArr) {
  for (let task in todosArr){
    // console.log(todosArr[task]);
  let content = document.getElementById("content");
  let list = document.createElement("ul");
  let listItm = document.createElement("li");
  content.appendChild(list);
  list.appendChild(listItm);
  listItm.textContent = todosArr[task].todo;
  function strike(){ 
    listItm.style.textDecoration = "line-through";
  }
  listItm.addEventListener("click", strike);
   listItm.removeEventListener("click", strike);

  }
  // function revert(){
  //   listItm.style.textDecoration = !"line-through";
  // }
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);