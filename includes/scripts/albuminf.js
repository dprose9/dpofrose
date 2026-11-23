let trk;
let lst;
let crd;
let lyr;
window.trackFunc = async function(num) {
	trk = num + "/track";
	const track = await fetch(trk).then(r => r.text());
	document.getElementById("trksel").innerHTML = track;
	listenFunc(num);
};

window.listenFunc = async function(num) {
	lst = num + "/listen";
	const listen = await fetch(lst).then(r => r.text());
	document.getElementById("albinfo").innerHTML = listen;
};

window.creditsFunc = async function(num) {
	crd = num + "/credits";
	const credits = await fetch(crd).then(r => r.text());
	document.getElementById("albinfo").innerHTML = credits;
};

window.lyricsFunc = async function(num) {
	lyr = num + "/lyrics";
	const lyrics = await fetch(lyr).then(r => r.text());
	document.getElementById("albinfo").innerHTML = lyrics;
};