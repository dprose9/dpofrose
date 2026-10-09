const intro = document.getElementById("intro");

if (new URLSearchParams(window.location.search).has("home")) {
    intro.remove();
} else {

	setTimeout(() => {
		intro.className = "black";
	}, 150);

	setTimeout(() => {
		intro.className = "dkblue";
	}, 300);

	setTimeout(() => {
		intro.className = "dktrqs";
	}, 450);

	setTimeout(() => {
		intro.className = "dkgreen";
	}, 600);

	setTimeout(() => {
		intro.className = "dkmgnta";
	}, 750);

	setTimeout(() => {
		intro.className = "dkred";
	}, 900);

	setTimeout(() => {
		intro.className = "brwn";
	}, 1050);

	setTimeout(() => {
		intro.className = "ltgrey";
	}, 1200);

	setTimeout(() => {
		intro.className = "dkgrey";
	}, 1350);

	setTimeout(() => {
		intro.className = "ltblue";
	}, 1500);

	setTimeout(() => {
		intro.className = "lttrqs";
	}, 1650);

	setTimeout(() => {
		intro.className = "ltgreen";
	}, 1800);

	setTimeout(() => {
		intro.className = "ltmgnta";
	}, 1950);

	setTimeout(() => {
		intro.className = "ltred";
	}, 2100);

	setTimeout(() => {
		intro.className = "yellow";
	}, 2250);

	setTimeout(() => {
		intro.className = "white";
	}, 2400);


	setTimeout(() => {
		intro.classList.add("fadeout");
	}, 3000);

	setTimeout(() => {
			intro.remove();
	}, 4000);

}