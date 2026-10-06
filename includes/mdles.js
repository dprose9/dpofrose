const menudpr = await fetch("menu.htm").then(r => r.text());

document.getElementById("menuid").innerHTML = menudpr;