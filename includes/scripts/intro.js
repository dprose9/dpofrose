const intro = document.getElementById("intro");

setTimeout(() => {
	intro.classList.add("fade-out");
	
	setTimeout(() => {
		intro.remvove();
	}, 1000);
}, 2000);

