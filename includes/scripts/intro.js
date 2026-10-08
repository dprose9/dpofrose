const intro = document.getElementById("intro");

setTimeout(() => {
	intro.className = "black";
}, 125);

setTimeout(() => {
	intro.className = "dkblue";
}, 250);

setTimeout(() => {
	intro.className = "dktrqs";
}, 375);

setTimeout(() => {
	intro.className = "dkgreen";
}, 500);

setTimeout(() => {
	intro.className = "dkmgnta";
}, 625);

setTimeout(() => {
	intro.className = "dkred";
}, 750);

setTimeout(() => {
	intro.className = "brwn";
}, 875);

setTimeout(() => {
	intro.className = "ltgrey";
}, 1000);

setTimeout(() => {
	intro.className = "dkgrey";
}, 1125);

setTimeout(() => {
	intro.className = "ltblue";
}, 1250);

setTimeout(() => {
	intro.className = "lttrqs";
}, 1375);

setTimeout(() => {
	intro.className = "ltgreen";
}, 1500);

setTimeout(() => {
	intro.className = "ltmgnta";
}, 1625);

setTimeout(() => {
	intro.className = "ltred";
}, 1750);

setTimeout(() => {
	intro.className = "yellow";
}, 1875);

setTimeout(() => {
	intro.className = "white";
}, 2000);


setTimeout(() => {
	intro.classList.add("fadeout");
}, 2500);

setTimeout(() => {
		intro.remove();
}, 3500);