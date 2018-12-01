
var image=['images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png'];



function rollDice(){
var x=Math.random();
x= x*6;
x=Math.floor(x);

document.slide1.src=image[x];

var y=Math.random();
y= y*6;
y=Math.floor(y);

document.slide2.src=image[y];


}
var score=[];
var addScore=0+1;
score.push(addScore);
