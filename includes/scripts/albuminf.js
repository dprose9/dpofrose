let trk;
let crd;
let lyr;

window.trackFunc = function(num) {
	trk = num + "/track";
	crd = num + "/credits";
	lyr = num + "/lyrics";
	
	const track = await fetch(trk).then(r => r.text());
	const credits = await fetch(crd).then(r => r.text());
	const lyrics = await fetch(lyr).then(r => r.text());
	
	document.getElementById("trksel").innerHTML = track;
	document.getElementById("albinfo").innerHTML = credits;
}


window.creditsFunc = function() {
	document.getElementById("albinfo").innerHTML = credits;
}

window.lyricsFunc = function() {
	document.getElementById("albinfo").innerHTML = lyrics;
}