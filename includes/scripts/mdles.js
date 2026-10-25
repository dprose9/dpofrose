const menudpr = await fetch("/includes/dprs/menu.dpr").then(r => r.text());
const footerdpr = await fetch("/includes/dprs/footer.dpr").then(r => r.text());
const lyrics = await fetch("lyrics").then(r => r.text());
const lyrics = await fetch("credits").then(r => r.text());

document.getElementById("menuid").innerHTML = menudpr;
document.getElementById("footerid").innerHTML = footerdpr;