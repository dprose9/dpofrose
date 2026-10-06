const menudpr = await fetch("/includes/menu.dpr").then(r => r.text());

document.getElementById("menuid").innerHTML = menudpr;

const pic = document.querySelectorAll(".loadpic");

async function picLoad() {
	const imgsrce = pic.src
	
	for (let i = 2; i <= 4096; i *= 2) {
		const sze = i.toString(16).padStart(4, "0");
		const src = imgsrce.replace("0001", sze);
	
		const next = new Image();
		next.src = src;

		await next.decode();
		
		await new Promise(resolve => setTimeout(resolve, 1000));
		
		pic.src = src;
	}
}

picLoad();