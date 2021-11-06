const lift = document.getElementById('lift-container');
const callLift = document.querySelectorAll('button');
const leftDoor = document.getElementById('left-door');
const rightDoor = document.getElementById('right-door');

function moveLift(element){
  switch(element.id){
	case 'floor9':
    lift.style.bottom = '100%';
    removeAnimation();
    break;
	case 'floor8':
    lift.style.bottom = '90%';
    removeAnimation();
    break;
	case 'floor7':
    lift.style.bottom = '80%';
    removeAnimation();
    break;
	case 'floor6':
    lift.style.bottom = '70%';
    removeAnimation();
    break;
	case 'floor5':
    lift.style.bottom = '60%';
    removeAnimation();
    break;
	case 'floor4':
    lift.style.bottom = '50%';
    removeAnimation();
    break;
  case 'floor3':
    lift.style.bottom = '40%';
    removeAnimation();
    break;
  case 'floor2':
    lift.style.bottom = '30%';
    removeAnimation();  
    break;
  case 'floor1':
    lift.style.bottom = '20%';
    removeAnimation();
    break;
  default:
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

callLift.forEach(btn => btn.addEventListener('click',(move)=>{
  moveLift(move.target);
}))