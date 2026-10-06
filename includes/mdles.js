const menudpr = await fetch("/includes/menu.dpr").then(r => r.text());

document.getElementById("menuid").innerHTML = menudpr;