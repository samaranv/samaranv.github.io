let imageSliderEl = document.querySelector(".imageSlider");
let clubContainerEl = document.querySelector(".clubContainer")


// Bildeslider
let counter = 0;
let imgSlides = ["./Images/messiImg1.jpg","./Images/messiImg2.jpg", "./Images/messiImg3.jpg", "./Images/messiImg4.jpg" ];
updateSlider();

function nextSlide() {
    imageSliderEl.innerHTML = ""
    counter++;
    if(counter >= imgSlides.length){
        counter = 0;
    };
    updateSlider();
};

function updateSlider(){
    let imageEl = document.createElement("img");
    imageEl.setAttribute("class","imgSlide" + (counter+1));
    imageEl.setAttribute("src", imgSlides[counter]);
    imageEl.setAttribute("alt", "Bilde av Messi");
    imageSliderEl.appendChild(imageEl);
    imageSliderEl.offsetWidth;
}

setInterval(nextSlide, 5000); 

let clubList = [
    {
        img: "./Images/NOB.png",
        clubb: "Newell's Old Boys", 
        years: "1994-2000"
    },
    {
        img: "./Images/fcb.png",
        clubb: "FC Barcelona", 
        years: "2001-2021"
    },
    {
        img: "./Images/psg.png",
        clubb: "PSG", 
        years: "2021-2023"
    },
    {
        img: "./Images/IM.png",
        clubb: "Inter Miami", 
        years: "2023- "
    },
];

let clubListDivEl = document.createElement("div");
let clubListHeaderEl = document.createElement("h1");
clubListHeaderEl.innerText = "Klubb Historikk";
clubListHeaderEl.setAttribute("class", "headers");

clubListDivEl.appendChild(clubListHeaderEl);

// Autogenerer
for(let i = 0; i< clubList.length;i++) {
  let o = clubList[i];
  let divEl = document.createElement("div");
  divEl.setAttribute("class", "clubs");

  let imgEl = document.createElement("img");
  imgEl.setAttribute("src", o.img);
  imgEl.setAttribute("id", "clubbImg" + (o+1))
  imgEl.setAttribute("class", "clubbImg")
  imgEl.setAttribute("alt", "Logen til laget" + o.clubb)
  divEl.appendChild(imgEl);
  
  let clubbEl = document.createElement("h1");
  clubbEl.innerText =  o.clubb;
  clubbEl.setAttribute("class", "clubbEl");
  divEl.appendChild(clubbEl);

  let yearsEl = document.createElement("h3");
  yearsEl.innerText =  o.years;
  yearsEl.setAttribute("class", "yearsEl");
  divEl.appendChild(yearsEl);

  clubListDivEl.appendChild(divEl);
}
clubContainerEl.appendChild(clubListDivEl);

