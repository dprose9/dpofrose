const menudpr = await fetch("/includes/dprs/menu.dpr").then(r => r.text());
const footerdpr = await fetch("/includes/dprs/footer.dpr").then(r => r.text());

document.getElementById("menuid").innerHTML = menudpr;
document.getElementById("footerid").innerHTML = footerdpr;

async function picLoad(pic) {
	const imgsrce = pic.src
	
	for (let i = 2; i <= 4096; i *= 2) {
		const sze = i.toString(16).padStart(4, "0");
		const src = imgsrce.replace("0001", sze);
	
		const next = new Image();
		next.src = src;

		await next.decode();
		
		await new Promise(resolve => setTimeout(resolve, 40));
		
		pic.src = src;
	}
}

const pics = document.querySelectorAll(".loadpic");

pics.forEach(pic => {picLoad(pic);});

const images = [
	"/includes/pics/albart/sngl/dpritfptstdoi/dpritfptstdoi-0001.bmp"
	"/includes/pics/albart/sngl/dpritfptstdoi/dpritfptstdoi-0002.bmp"
	"/includes/pics/albart/sngl/dpritfptstdoi/dpritfptstdoi-0004.bmp"
	"/includes/pics/albart/sngl/dpritfptstdoi/dpritfptstdoi-0008.bmp"
	"/includes/pics/albart/sngl/dpritfptstdoi/dpritfptstdoi-0010.bmp"
	"/includes/pics/albart/sngl/dpritfptstdoi/dpritfptstdoi-0020.bmp"
	"/includes/pics/albart/sngl/dpritfptstdoi/dpritfptstdoi-0040.bmp"
	"/includes/pics/albart/sngl/dpritfptstdoi/dpritfptstdoi-0080.bmp"
	"/includes/pics/albart/sngl/dpritfptstdoi/dpritfptstdoi-0100.bmp"
];

const slide = document.getElementById("slide");

let i = 0;

function showSlide() {
	slide.src = images[i];
}

document.getElementById("next").onclick = () => {
	i = (i + 1) % images.length;
	showSlide();	
};

document.getElementById("prev").onclick = () => {
	i = (i - 1 + images.length) % images.length;
	showSlide();	
};

setInterval(() => {
	i = (i +1) % images.length;
	showSlide();
}, 3000);