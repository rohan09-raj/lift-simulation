const lift = document.getElementById('lift-container');
const callLift = document.querySelectorAll('button');

function moveLift(element){
  switch(element.id){
	case 'floor9':
    lift.style.bottom='100%';
    break;
	case 'floor8':
    lift.style.bottom='90%';
    break;
	case 'floor7':
    lift.style.bottom='80%';
    break;
	case 'floor6':
    lift.style.bottom='70%';
    break;
	case 'floor5':
    lift.style.bottom='60%';
    break;
	case 'floor4':
    lift.style.bottom='50%';
    break;
  case 'floor3':
    lift.style.bottom='40%';
    break;
  case 'floor2':
    lift.style.bottom='30%';
    break;
  case 'floor1':
    lift.style.bottom='20%';
    break;
  default:
    lift.style.bottom='10%';
  }
}

callLift.forEach(btn => btn.addEventListener('click',(move)=>{
  moveLift(move.target);
}))