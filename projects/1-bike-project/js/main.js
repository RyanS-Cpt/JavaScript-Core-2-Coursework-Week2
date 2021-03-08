let jumboTag = document.getElementsByClassName("jumbotron");
let targetBtns = document.querySelectorAll(".buttons a");
// console.log(targetBtns);
// console.log(jumboTag[0]);
let blueBtn = document.getElementById("blueBtn");
let orangeBtn = document.getElementById("orangeBtn");
let greenBtn = document.getElementById("greenBtn");
blueBtn.addEventListener("click", ()=> {
    jumboTag[0].style.backgroundColor = "#588fbd";
    targetBtns[0].style.backgroundColor = "#ffa500";
    targetBtns[1].style.backgroundColor = "black";
    targetBtns[1].style.color = "white";
});
orangeBtn.addEventListener("click", ()=>{
    jumboTag[0].style.backgroundColor = "#f0ad4e";
    targetBtns[0].style.backgroundColor = "#5751fd";
    targetBtns[1].style.backgroundColor = "#31b0d5";
    targetBtns[1].style.color = "white";
});
greenBtn.addEventListener("click", ()=>{
    jumboTag[0].style.backgroundColor = "#87ca8a";
    targetBtns[0].style.backgroundColor = "black";
    targetBtns[1].style.backgroundColor = "#8c9c08"; 
});