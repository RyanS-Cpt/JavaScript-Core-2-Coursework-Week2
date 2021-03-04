function readingList(bookList) {
  for (let item in bookList){
    console.log(bookList[item]);
  let content = document.getElementById("content");
  let pEl = document.createElement("p");
  let list = document.createElement("ul");
  let listItm = document.createElement("li");
  let imgEl = document.createElement("img");
  content.appendChild(list);
  list.appendChild(listItm);
  listItm.appendChild(pEl);
  listItm.appendChild(imgEl);
  pEl.textContent = bookList[item].title + " - " + bookList[item].author;
  if (bookList[item].alreadyRead === true){
    listItm.style.backgroundColor = "green";
  }else{
    listItm.style.backgroundColor = "red";
  }
  list.style.display = "flex";
  listItm.style.flexDirection = "row";
  }
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);