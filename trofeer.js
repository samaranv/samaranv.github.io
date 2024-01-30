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
        img: "./images/worldCupImg.png",
        name:  "World Cup",
        antall: "1",
        hover: "The term World Cup typically refers to the FIFA World Cup, an international football (soccer) tournament that takes place every four years and is organized by the Fédération Internationale de Football Association (FIFA). The tournament is one of the most prestigious and widely watched sporting events globally, capturing the attention of millions of fans and showcasing the best football talent from around the world.        "
    },
    {
        img: "./images/copaAmerica.png",
        name:  "Copa America",
        antall: "1",
        hover: ""
    },
    {
        img: "./images/finalissima.png",
        name:  "Finalissima",
        antall: "1",
        hover: ""
    },
];
let induvidualTrophies = [
    {
        img: "./images/ballonDor.png",
        name:  "Ballon d'or",
        antall: "8",
        hover: ""
    },
    {
        img: "./images/pichichi.png",
        name:  "Pichichi La liga",
        antall: "8",
        hover: ""
    },
    {
        img: "./images/lwsa.png",
        name:  "Laureus World Sports Awards",
        antall: "2",
        hover: ""
    },
    {
        img: "./images/egs.png",
        name:  "European Golden Shoe",
        antall: "6",
        hover: ""
    },
];
let clubTrophies = [
    {
        img: "./images/laliga.png",
        name:  "League Trophies",
        antall: "13",
        hover: ""
    },
    {
        img: "./images/ucl.jpg",
        name:  "Champions League",
        antall: "4",
        hover: ""
    },
    {
        img: "./images/cdr.png",
        name:  "Domestic Cup",
        antall: "8",
        hover: ""
    },
    {
        img: "./images/cwc.png",
        name:  "Club World Cup",
        antall: "3",
        hover: ""
    },
];



updateClass("national", nationalTrophies)
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
        divEl.appendChild(imgEl);

        let nameEl = document.createElement("h1");
        nameEl.innerText =  o.name;
        nameEl.setAttribute("class", "nameEl");
        // nameEl.addEventListener("mouseover", function () {
        //     let hoverBox = document.createElement("p");
        //     hoverBox.setAttribute("class", "hoverBox");
        //     hoverBox.innerText = o.hover;
        //     divEl.appendChild(hoverBox);})
        // nameEl.addEventListener("mouseout", function () {
        //     let existingHoverBox = divEl.querySelector(".hoverBox");
        //     if (existingHoverBox) {
        //         divEl.removeChild(existingHoverBox); // Fjerner boxen når musen ikke er over den
        //     }
        // });
        divEl.appendChild(nameEl);


        let countEl = document.createElement("h3");
        countEl.innerText = "Han har vunnet " +  o.antall + " av dette trofeet";
        countEl.setAttribute("class", "countEl");
        divEl.appendChild(countEl);

        trophieContainer.appendChild(divEl)
    }
}






