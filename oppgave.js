let inputNameEl = document.getElementById("name"); 
let inputDatoEl  = document.getElementById("birth"); 
let inputCategoryEl = document.getElementById("categori");
let inputLeagueEl = document.getElementById("league");
let inputGoalEl = document.getElementById("goal");
let inputAssistEl = document.getElementById("assist");
let containerEl = document.getElementById("container");

let buttonEl = document.getElementById("Button").addEventListener("click", generateCard)
 
let list = [];


 showList(); 
 function showList(){
     containerEl.innerHTML = "";
     for (let i = 0; i < list.length; i++) {
        let o = list[i];
        let divEl = document.createElement("div");
        divEl.setAttribute("class", "divEl");

        let divMainEl = document.createElement("div");
        divMainEl.setAttribute("class", "divMainEl");

        let divBackgroundEl = document.createElement("div");
        divBackgroundEl.setAttribute("class", "divBackgroundEl");
        
        let nameEl = document.createElement("h1");
        nameEl.innerText =  o.name;
        nameEl.setAttribute("class", "nameEl");
        divMainEl.appendChild(nameEl);

        let ageEl = document.createElement("p");
        ageEl.setAttribute("class", "ageEl");
        ageEl.innerText = "Alder: " + (2023-o.birth);
        divMainEl.appendChild(ageEl);

        let goalEl = document.createElement("p");
        goalEl.innerText = "Mål: " + o.goal;
        divMainEl.appendChild(goalEl);

        let assistEl = document.createElement("p");
        assistEl.innerText = "Målgivende: " + o.assist;
        divMainEl.appendChild(assistEl);

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "X";
        deleteBtn.id = i;  
        deleteBtn.setAttribute("class", "deleteBtn")
        deleteBtn.addEventListener("click", removeFromList);
        divMainEl.appendChild(deleteBtn);

        let imageEl = document.createElement("img");
        imageEl.src = (o.category + ".png");
        imageEl.alt = "Et ikon av spiller i katogorien " + o.category;
        imageEl.setAttribute("class", "imageEl");
        divBackgroundEl.appendChild(imageEl);
        divBackgroundEl.style.backgroundImage =  `url(${o.league}.png)`;
         
        divEl.appendChild(divMainEl);
        divEl.appendChild(divBackgroundEl);
        containerEl.appendChild(divEl); 
     }
 };



function generateCard(){
    let newName = inputNameEl.value;
    let newDate = new Date(inputDatoEl.valueAsNumber);
    let newCatagory = inputCategoryEl.value;
    let newLeague = inputLeagueEl.value;
    let newGoal = Number(inputGoalEl.value);
    let newAssist = Number(inputAssistEl.value);
    let today = new Date();

    let year = newDate.getFullYear();
    let month = newDate.getMonth() + 1 ;
    let day = newDate.getDate();
    let dateSort = String(year) + String(month).padStart(2,"0") + String(day).padStart(2,"0"); 
    let newBirth = year
    if (month < (today.getMonth()+1) || month == (today.getMonth()+1) && String(day) < String((today.getDate()))) {
        newBirth= newBirth-1
    };
    let object = {name: newName, birth: newBirth, category: newCatagory, league: newLeague, goal: newGoal, assist: newAssist, sortDate: dateSort };
    list.push(object);
    showList();   
};

let sortNameBtn = document.getElementById("sortName").addEventListener("click", sortByName);

function compareName(a, b) {
    if (a.name > b.name) {
      return 1;
    } 
    else {
      return -1;
    }

}

function sortByName() {
    list.sort(compareName); 
    showList();
}

let sortDateEl = document.getElementById("sortDate").addEventListener("click", sortByDate);

function compareDate(a,b){
    return a.sortDate - b.sortDate
};


function sortByDate() {
    list.sort(compareDate); 
    showList();
}

function removeFromList(i){
  list.splice(i,1);
  showList();
}