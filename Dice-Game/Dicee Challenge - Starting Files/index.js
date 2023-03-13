var randomNumber1 = Math.floor(Math.random()*6);
var randomNumber2 = Math.floor(Math.random()*6);
var dices = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
document.querySelector(".img1").setAttribute("src","images/" + dices[randomNumber1]);
document.querySelector(".img2").setAttribute("src","images/" + dices[randomNumber2]);
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player-1 Wins";
}else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player-2 Wins";
}else if(randomNumber1 == randomNumber2){
    document.querySelector("h1").textContent = "Draw";
}


