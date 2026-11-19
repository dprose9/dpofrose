const menudpr = await fetch("/includes/dprs/menu.dpr").then(r => r.text());
const footerdpr = await fetch("/includes/dprs/footer.dpr").then(r => r.text());
const socials = await fetch("/includes/dprs/socials.dpr").then(r => r.text());
const streaming = await fetch("/includes/dprs/streaming.dpr").then(r => r.text());


document.getElementById("menuid").innerHTML = menudpr;
document.getElementById("footerid").innerHTML = footerdpr;

window.footerMenuFunc = async function(menu) {
	if (menu === "socials") {
		document.getElementById("footermenu").innerHTML = socials;
	} else if (menu === "streaming") {
		document.getElementById("footermenu").innerHTML = streaming;
	} else {
		document.getElementById("footermenu").innerHTML = "";
	}
};