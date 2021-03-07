function listOfColours(colourArr) {
    let content = document.getElementById("content");
    let selectEl = document.createElement("select");
     content.appendChild(selectEl);
     let pEl = document.createElement("p");
     content.appendChild(pEl);
  for (let colour of colourArr){
      selectedColour = function (){
      pEl.textContent = "You have selected: " + colourArr[selectEl.selectedIndex];
      pEl.style.color = colourArr[selectEl.selectedIndex];
      }
    pEl.textContent = "You have selected: " + selectEl.selectedIndex;
    let optionEl = document.createElement("option");
    selectEl.appendChild(optionEl);
    optionEl.innerHTML = colour;
    console.log(colour);
    selectEl.addEventListener("click", selectedColour);
  //  console.log(selectEl.selectedIndex);
  }
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
