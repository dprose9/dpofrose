const urmom = "lyrics";

const lyrics = await fetch(urmom).then(r => r.text());
const credits = await fetch("credits").then(r => r.text());

window.lyricsFunc = function() {
	document.getElementById("albinfo").innerHTML = lyrics;
}

window.creditsFunc = function() {
	document.getElementById("albinfo").innerHTML = credits;
}