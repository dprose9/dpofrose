const intro = document.getElementById("intro");

if (window.location.hash === "#home")) {
    intro.remove();
} else {

	setTimeout(() => {
		intro.className = "black";
	}, 200);

	setTimeout(() => {
		intro.className = "dkblue";
	}, 400);

	setTimeout(() => {
		intro.className = "dktrqs";
	}, 600);

	setTimeout(() => {
		intro.className = "dkgreen";
	}, 800);

	setTimeout(() => {
		intro.className = "dkmgnta";
	}, 1000);

	setTimeout(() => {
		intro.className = "dkred";
	}, 1200);

	setTimeout(() => {
		intro.className = "brwn";
	}, 1400);

	setTimeout(() => {
		intro.className = "ltgrey";
	}, 1600);

	setTimeout(() => {
		intro.className = "dkgrey";
	}, 1800);

	setTimeout(() => {
		intro.className = "ltblue";
	}, 2000);

	setTimeout(() => {
		intro.className = "lttrqs";
	}, 2200);

	setTimeout(() => {
		intro.className = "ltgreen";
	}, 2400);

	setTimeout(() => {
		intro.className = "ltmgnta";
	}, 2600);

	setTimeout(() => {
		intro.className = "ltred";
	}, 2800);

	setTimeout(() => {
		intro.className = "yellow";
	}, 3000);

	setTimeout(() => {
		intro.className = "white";
	}, 3200);


	setTimeout(() => {
		intro.classList.add("fadeout");
	}, 4000);

	setTimeout(() => {
			intro.remove();
	}, 5000);

}