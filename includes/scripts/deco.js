// Dance

const dance = document.getElementById("dance");

while (true) {
	setTimeout(() => {
		dance.className = "left";
	}, 200);
	
	setTimeout(() => {
		dance.className = "right";
	}, 400);
}