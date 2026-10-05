const headhtm = await fetch("/includes/head.htm").then(r => r.text());
const menudpr = await fetch("/includes/menu.dpr").then(r => r.text());
const foothtm = await fetch("/includes/foot.htm").then(r => r.text());
const verhtm = await fetch("/includes/ver.htm").then(r => r.text());

document.getElementById("headid").innerHTML = headhtm;
document.getElementById("menuid").innerHTML = menudpr;
document.getElementById("footid").innerHTML = foothtm;
document.getElementById("verid").innerHTML = verhtm;