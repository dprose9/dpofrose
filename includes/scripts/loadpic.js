async function picLoad(pic) {
	const imgsrce = pic.style
	
	for (let i = 2; i <= 4096; i *= 2) {
		const sze = i.toString(16).padStart(4, "0");
		const style = imgsrce.replace("0001", sze);
	
		const next = new Image();
		next.style = style;

		await next.decode();
		
		await new Promise(resolve => setTimeout(resolve, 40));
		
		pic.style = style;
	}
}

const pics = document.querySelectorAll(".loadpic");

pics.forEach(pic => {picLoad(pic);});