const menudpr = await fetch("/includes/menu.htm").then(r => r.text());

document.getElementById("menuid").innerHTML = menudpr;