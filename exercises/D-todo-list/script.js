function todoList(todosArr) {
  for (let task in todosArr){
    // console.log(todosArr[task]);
  let content = document.getElementById("content");
  let list = document.createElement("ul");
  let listItm = document.createElement("li");
  content.appendChild(list);
  list.appendChild(listItm);
  listItm.textContent = todosArr[task].todo;
  console.log(listItm.style.textDecoration);
  function strike(){
    if(listItm.style.textDecoration !== "line-through"){
    listItm.style.textDecoration = "line-through";
  }else if(listItm.style.textDecoration === "line-through"){
  listItm.style.textDecoration = "none";
  }
  }
  listItm.addEventListener("click", strike);
}
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);