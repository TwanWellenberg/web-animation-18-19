// Hier staan de variabelen voor beide pupillen
var pupil1 = document.querySelector('.circle');
var pupil2 = document.querySelector('.circle2');

// Hier staat de functie voor het drukken op B
document.addEventListener('keypress',
  function(event) {
    if (event.keyCode===98) {
    pupil1.classList.toggle('midden');
    pupil2.classList.toggle('midden');
    eyes1.classList.toggle('eyeshadow');
    eyes2.classList.toggle('eyeshadow');
  }
});

// Konami Code van Wesbos op Youtube
var pressed = [];
var othello = 'othello';
var titelflip = document.querySelector('.Titel');

document.addEventListener('keyup',
  (e) => {
    pressed.push(e.key);
    pressed.splice(-othello.length - 1, pressed.length - othello.length);
    if(pressed.join('').includes(othello)) {
      titelflip.classList.toggle('titelfliperino');
    }
  }
)

//
// titelflip.addEventListener('click', function() {
//   titelflip.classList.toggle('titelfliperino');
// })

var body = document.querySelector('.background');

document.addEventListener('keypress', function(e) {
  if(e.keyCode === 97) {
    body.classList.toggle('gradient');
  }
})

var pulldown = document.querySelector('#Laag_1');

pulldown.addEventListener('click', function() {
  pulldown.classList.toggle('touw');
})

var eyes1 = document.querySelector('.eye-shape1');
var eyes2 = document.querySelector('.eye-shape2');

// pupil1.addEventListener('click', function() {
//   eyes1.classList.toggle('eyeshadow');
//   eyes2.classList.toggle('eyeshadow');
// })

var drop = document.querySelector('.teardrop');
var drop1 = document.querySelector('.teardrop1');
var drop2 = document.querySelector('.teardrop2');
var drop3 = document.querySelector('.teardrop3');
var drop4 = document.querySelector('.teardrop4');

pulldown.addEventListener('click', function() {
  drop.classList.toggle('drop');
  drop1.classList.toggle('drop1');
  drop2.classList.toggle('drop2');
  drop3.classList.toggle('drop3');
  drop4.classList.toggle('drop4');
})
