const FLOOR_1 = 720;
const FLOOR_2 = 515;
const FLOOR_3 = 310;
const FLOOR_4 = 100;

var pos = FLOOR_1;
var lift = document.getElementById('lift-container');

function moveToFloorOne() {
	var anim = setInterval(animate, 5);

	function animate() {
		if(pos == FLOOR_1) {
			clearInterval(anim);
		} else {
			pos++;
			lift.style.top = pos + "px";
		}
	}
}

function moveToFloorTwo() {
	var anim = setInterval(animate, 5);

	function animate() {
		if(pos == FLOOR_2) {
			clearInterval(anim);
		} else {
			if(lift.style.top < FLOOR_2 + "px") {
				pos++;
				lift.style.top = pos + "px";
			} else {
				pos--;
				lift.style.top = pos + "px";
			}
		}
	}
}

function moveToFloorThree() {
	var anim = setInterval(animate, 5);

	function animate() {
		if(pos == FLOOR_3) {
			clearInterval(anim);
		} else {
			if(lift.style.top < FLOOR_3 + "px") {
				pos++;
				lift.style.top = pos + "px";
			} else {
				pos--;
				lift.style.top = pos + "px";
			}
		}
	}
}

function moveToFloorFour() {
	var anim = setInterval(animate, 5);

	function animate() {
		if(pos == FLOOR_4) {
			clearInterval(anim);
		} else {
			pos--;
			lift.style.top = pos + "px";
		}
	}
}