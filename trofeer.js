let trophies = document.querySelectorAll(".tab-link"); 

let club = document.getElementById("club").addEventListener("click", function(){
    updateClass("club", clubTrophies)
} );
let national = document.getElementById("national").addEventListener("click", function(){
    updateClass("national", nationalTrophies)
})
let induvidual = document.getElementById("induvidual").addEventListener("click", function(){
    updateClass("induvidual", induvidualTrophies)
});
let trophieContainer = document.querySelector(".container")


let nationalTrophies = [
    {
        img: "./Images/worldCupImg.png",
        name:  "World Cup",
        antall: "1",
    },
    {
        img: "./Images/copaAmerica.png",
        name:  "Copa America",
        antall: "1",       
    },
    {
        img: "./Images/finalissima.png",
        name:  "Finalissima",
        antall: "1",
    },
];
let induvidualTrophies = [
    {
        img: "./Images/ballonDor.png",
        name:  "Ballon d'or",
        antall: "8",        
    },
    {
        img: "./Images/pichichi.png",
        name:  "Pichichi La liga",
        antall: "8",       
    },
    {
        img: "./Images/lwsa.png",
        name:  "Laureus World Sports Awards",
        antall: "2",        
    },
    {
        img: "./Images/egs.png",
        name:  "European Golden Shoe",
        antall: "6",        
    },
];
let clubTrophies = [
    {
        img: "./Images/laliga.png",
        name:  "League Trophies",
        antall: "13",        
    },
    {
        img: "./Images/ucl.jpg",
        name:  "Champions League",
        antall: "4",        
    },
    {
        img: "./Images/cdr.png",
        name:  "Domestic Cup",
        antall: "8",       
    },
    {
        img: "./Images/cwc.png",
        name:  "Club World Cup",
        antall: "3",        
    },
];


// 
updateClass("national", nationalTrophies);


// Legger til kontent og strek for å markere hvilken du er på
function updateClass (idName, idNameTrophie){
    for(let i=0; i<trophies.length; i++){
        trophies[i].classList.remove("active-link");
    };

    document.getElementById(idName).classList.add("active-link");


    trophieContainer.innerHTML = "";

    for(let i = 0; i<idNameTrophie.length;i++){
        let o = idNameTrophie[i];
        let divEl = document.createElement("div");
        divEl.setAttribute("class", "trophie");
        
        let imgEl = document.createElement("img");
        imgEl.setAttribute("src", o.img);
        imgEl.setAttribute("id", idNameTrophie + "Img" + (o+1))
        imgEl.setAttribute("class", "trophieImg")
        imgEl.setAttribute("alt", "Bilde av trofet" + o.name);
        divEl.appendChild(imgEl);

        let nameEl = document.createElement("h1");
        nameEl.innerText =  o.name;
        nameEl.setAttribute("class", "nameEl");
        divEl.appendChild(nameEl);


        let countEl = document.createElement("h3");
        countEl.innerText = "Han har vunnet " +  o.antall + " av dette trofeet";
        countEl.setAttribute("class", "countEl");
        divEl.appendChild(countEl);

        trophieContainer.appendChild(divEl);
    };
};






