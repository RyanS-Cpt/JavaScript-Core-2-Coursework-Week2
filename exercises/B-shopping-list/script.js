function shoppingList(arrayOfItems) {
  for (let item of arrayOfItems){
  let content = document.getElementById("content");
  let list = document.createElement("ul");
  let listItm = document.createElement("li");
  listItm.textContent = item;
  content.appendChild(list);
  list.appendChild(listItm);
  }
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
