var randomfloat1 = Math.random()*6;
var randomNumber1 = Math.ceil(randomfloat1);

var randomfloat2 = Math.random()*6;
var randomNumber2 = Math.ceil(randomfloat2);


var img1 = document.querySelector('img.img1');
    img1.setAttribute('src','images/dice'+randomNumber1+'.png');

var img2 = document.querySelector('img.img2');
    img2.setAttribute('src','images/dice'+randomNumber2+'.png');

var h1 = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    h1.textContent = '🚩 Player 1 Wins!'
} else if (randomNumber1 < randomNumber2){
    h1.textContent = 'Player 2 Wins! 🚩'
} else {
    h1.textContent = 'Draw !'
}

console.log('dice'+randomNumber1+'.png', 'dice'+randomNumber2+'.png');