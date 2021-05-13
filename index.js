let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let image1 = document.getElementById("img1");
let image2 = document.getElementById("img2");
let container = document.getElementById("container");


image1.setAttribute("src", "images\\dice" +randomNumber1+ ".png");
image2.setAttribute("src", "images\\dice" +randomNumber2+ ".png");

if (randomNumber1 >  randomNumber2) {
    container.querySelector("h1").innerHTML = "Player 1 Wins!!!";
}

else if (randomNumber1 ==  randomNumber2) {
    container.querySelector("h1").innerHTML = "Draw!!!";
}

else {
    container.querySelector("h1").innerHTML = "Player 2 Wins!!!";
}