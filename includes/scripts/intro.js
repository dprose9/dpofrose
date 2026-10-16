const intro = document.getElementById("intro");
const orign = document.referrer;
	? new URL(document.referrer).hostname;
	: "";


const mainp = window.location.hostname;

if (orign === mainp) {
    intro.remove();
} else {

	setTimeout(() => {
		intro.className = "black";
	}, 100);

	setTimeout(() => {
		intro.className = "dkblue";
	}, 200);

	setTimeout(() => {
		intro.className = "dktrqs";
	}, 300);

	setTimeout(() => {
		intro.className = "dkgreen";
	}, 400);

	setTimeout(() => {
		intro.className = "dkmgnta";
	}, 500);

	setTimeout(() => {
		intro.className = "dkred";
	}, 600);

	setTimeout(() => {
		intro.className = "brwn";
	}, 700);

	setTimeout(() => {
		intro.className = "ltgrey";
	}, 800);

	setTimeout(() => {
		intro.className = "dkgrey";
	}, 900);

	setTimeout(() => {
		intro.className = "ltblue";
	}, 1000);

	setTimeout(() => {
		intro.className = "lttrqs";
	}, 1100);

	setTimeout(() => {
		intro.className = "ltgreen";
	}, 1200);

	setTimeout(() => {
		intro.className = "ltmgnta";
	}, 1300);

	setTimeout(() => {
		intro.className = "ltred";
	}, 1400);

	setTimeout(() => {
		intro.className = "yellow";
	}, 1500);

	setTimeout(() => {
		intro.className = "white";
	}, 1600);


	setTimeout(() => {
		intro.classList.add("fadeout");
	}, 2000);

	setTimeout(() => {
			intro.remove();
	}, 3000);

}