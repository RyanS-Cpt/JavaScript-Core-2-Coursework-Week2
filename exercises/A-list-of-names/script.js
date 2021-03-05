function listOfNames(arrayOfPeople) {
    for (let person of arrayOfPeople){
      let content = document.querySelector("#content");
      let nameEl = document.createElement("h1");
      let jobEl = document.createElement("h2");
      nameEl.textContent = person.name;
      content.appendChild(nameEl);
      jobEl.textContent = person.job;
      content.appendChild(jobEl);
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
// for (let person of people){
// console.log(person.job);
// }