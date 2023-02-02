/*
=============== 
Simple
===============
*/

const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

const simple = document.querySelector('.simple');

simple.addEventListener('click', function () {
  btn.addEventListener('click', function () {
    // console.log(`'I'm clicked`);
    //get random number between 1-3
    const randomNumber = getRandomNumber();
    // console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
  });

  function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
  }
});

/*
=============== 
Hex
===============
*/

const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'd', 'E', 'F'];

const hex = document.querySelector('.hex');
// console.log(hex);

hex.addEventListener('click', function () {
  btn.addEventListener('click', function () {
    let hexDefault = '#';
    for (let i = 0; i < 6; i++) {
      hexDefault += hexColors[getRandomHexColor()];
    }
    document.body.style.backgroundColor = hexDefault;
    color.textContent = hexDefault;
    // console.log(hexDefault);
  });
});

function getRandomHexColor() {
  return Math.floor(Math.random() * hexColors.length);
}
