// Dance

const dance = document.getElementById("dance");

setInterval(() => {

	setTimeout(() => {
		dance.className = "left";
	}, 200);
	
	setTimeout(() => {
		dance.className = "right";
	}, 400);
}, 400);