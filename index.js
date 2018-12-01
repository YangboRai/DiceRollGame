
function rollDice(){

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImg = ['dice' + randomNumber1 + '.png'];

var randomImgSrc = 'images/' + randomImg;

var img1 = document.querySelector('.img1');
img1.setAttribute('src', randomImgSrc);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImg = ['dice' + randomNumber2 + '.png'];

var randomImgSrc = 'images/' + randomImg;

var img2 = document.querySelector('.img2');
img2.setAttribute('src', randomImgSrc);


if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = "player 1 Wins 👊"
}

if (randomNumber1 < randomNumber2) {
  document.querySelector('h1').innerHTML = "player 2 Wins 👊"
} else if (randomNumber1 == randomNumber2) {
  document.querySelector('h1').innerHTML = "draw 👊"
}

}
