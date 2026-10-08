const intro = document.getElementById("intro");

setTimeout(() => {
	intro.className = "black";
}, 125);

setTimeout(() => {
	intro.className = "dkblue";
}, 125);

setTimeout(() => {
	intro.className = "dktrqs";
}, 125);

setTimeout(() => {
	intro.className = "dkgreen";
}, 125);

setTimeout(() => {
	intro.className = "dkmgnta";
}, 125);

setTimeout(() => {
	intro.className = "dkred";
}, 125);

setTimeout(() => {
	intro.className = "brwn";
}, 125);

setTimeout(() => {
	intro.className = "ltgrey";
}, 125);

setTimeout(() => {
	intro.className = "dkgrey";
}, 125);

setTimeout(() => {
	intro.className = "ltblue";
}, 125);

setTimeout(() => {
	intro.className = "lttrqs";
}, 125);

setTimeout(() => {
	intro.className = "ltgreen";
}, 125);

setTimeout(() => {
	intro.className = "ltmgnta";
}, 125);

setTimeout(() => {
	intro.className = "ltred";
}, 125);

setTimeout(() => {
	intro.className = "yellow";
}, 125);

setTimeout(() => {
	intro.className = "white";
}, 125);


setTimeout(() => {
	intro.classList.add("fadeout");
}, 500);

intro.addEventListener("transitionend", () => {
		intro.remove();
});