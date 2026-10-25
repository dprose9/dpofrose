const lyrics = await fetch("lyrics").then(r => r.text());
const credits = await fetch("credits").then(r => r.text());

function lyricsFunc() {
	document.getElementById("albinfo").innerHTML = lyrics
}