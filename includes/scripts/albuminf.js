let trk;
let crd;
let lyr;
window.trackFunc = async function(num) {
	trk = num + "/track";
	const track = await fetch(trk).then(r => r.text());
	document.getElementById("trksel").innerHTML = track;
	lyricsFunc(num);
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