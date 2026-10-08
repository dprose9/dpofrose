const intro = document.getElementById("intro");

setTimeout(() => {
	intro.classList.add("fade-out");
}, 2000);

intro.addEventListener("transitionend", () => {
		intro.remvove();
});