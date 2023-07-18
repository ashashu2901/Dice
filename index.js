var randomNumber1 = Math.floor(Math.random()*6) +1;
var randomImageSource1 = "./images/dice"+ randomNumber1 +".png"; //to select images from folder
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1); //to set image source


var randomNumber2 = Math.floor(Math.random()*6) +1;
var randomImageSource2 = "./images/dice"+ randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

//results

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1🚩Wins!";
}
else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2🚩Wins!";
}
else  {
    document.querySelector("h1").innerHTML = "Draw";
}
