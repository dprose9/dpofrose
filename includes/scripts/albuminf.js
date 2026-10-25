const lyrics = await fetch("lyrics").then(r => r.text());
const lyrics = await fetch("credits").then(r => r.text());

function lyrics() {
	document.getElementById("albinfo").innerHTML = lyrics
}