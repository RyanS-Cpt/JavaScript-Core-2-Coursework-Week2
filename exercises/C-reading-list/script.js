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
    list.style.backgroundColor = "green";
  }else{
    list.style.backgroundColor = "red";
  }
  if(bookList[item].author === "Don Norman"){
    imgEl.src = "https://covers.vitalbook.com/vbid/9780465072996/width/200";
  }else if(bookList[item].author === "Brian Christian"){
    imgEl.src = "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg";
  }else if(bookList[item].author === "Andrew Hunt"){
    imgEl.src = "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/The_pragmatic_programmer.jpg/220px-The_pragmatic_programmer.jpg";
  }
  list.style.display = "flex";
  list.style.alignContent = "row";
  list.style.width = "25%";
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