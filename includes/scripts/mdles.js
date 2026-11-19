const menudpr = await fetch("/includes/dprs/menu.dpr").then(r => r.text());
const footerdpr = await fetch("/includes/dprs/footer.dpr").then(r => r.text());
const socials = await fetch("/includes/dprs/socials.dpr").then(r => r.text());
const streaming = await fetch("/includes/dprs/streaming.dpr").then(r => r.text());


document.getElementById("menuid").innerHTML = menudpr;
document.getElementById("footerid").innerHTML = footerdpr;

let openmenu;
window.footerMenuFunc = async function(menu) {
	
	if (menu === "socials" && openmenu !== "socials") {
		document.getElementById("footermenu").innerHTML = socials;
	} else if (menu === "streaming" && openmenu !== "streaming") {
		document.getElementById("footermenu").innerHTML = streaming;
	} else {
		menu = "";
		document.getElementById("footermenu").innerHTML = "<br>";
	}
	openmenu = menu;
};