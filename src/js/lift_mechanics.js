const lift = document.getElementById('lift-container');
const callLift = document.querySelectorAll('button');
const leftDoor = document.getElementById('left-door');
const rightDoor = document.getElementById('right-door');
var floors = [0];
let pointer = 1;

function moveLift(element){
  var currentFloor = parseInt(element.id);
  floors.push(currentFloor + 1);
  var duration = Math.abs(floors[pointer] - floors[pointer-1]) * 2;
  pointer++;
  var transitionDuration = duration + 's';

  switch (element.id) {
    case '9':
      lift.style.transitionDuration = transitionDuration;
      lift.style.bottom = '100%';
      removeAnimation();
      break;
    case '8':
      lift.style.transitionDuration = transitionDuration;
      lift.style.bottom = '90%';
      removeAnimation();
      break;
    case '7':
      lift.style.transitionDuration = transitionDuration;
      lift.style.bottom = '80%';
      removeAnimation();
      break;
    case '6':
      lift.style.transitionDuration = transitionDuration;
      lift.style.bottom = '70%';
      removeAnimation();
      break;
    case '5':
      lift.style.transitionDuration = transitionDuration;
      lift.style.bottom = '60%';
      removeAnimation();
      break;
    case '4':
      lift.style.transitionDuration = transitionDuration;
      lift.style.bottom = '50%';
      removeAnimation();
      break;
    case '3':
      lift.style.transitionDuration = transitionDuration;
      lift.style.bottom = '40%';
      removeAnimation();
      break;
    case '2':
      lift.style.transitionDuration = transitionDuration;
      lift.style.bottom = '30%';
      removeAnimation();  
      break;
    case '1':
      lift.style.transitionDuration = transitionDuration;
      lift.style.bottom = '20%';
      removeAnimation();
      break;
    default:
      lift.style.transitionDuration = transitionDuration;
      lift.style.bottom = '10%';
      removeAnimation();
  }
}

function removeAnimation() {
  lift.addEventListener('transitionend', anime);
  leftDoor.style.removeProperty('animation');
  rightDoor.style.removeProperty('animation');
}

var anime = function doorAnimation() {
  leftDoor.style.animation = "openingDoor 2.5s 1 .5s";
  rightDoor.style.animation = "openingDoor 2.5s 1 .5s";
  this.addEventListener('animationend', () => {
    leftDoor.style.animation = "closingDoor 2.5s 1 0s";
    rightDoor.style.animation = "closingDoor 2.5s 1 0s";
  });
}

callLift.forEach(btn => btn.addEventListener('click', (move) => {
  moveLift(move.target);
}));