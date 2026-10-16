const images = [
	"/includes/pics/albart/sngl/dpritfptstdoi/dpritfptstdoi-0001.bmp",
	"/includes/pics/albart/sngl/dpritfptstdoi/dpritfptstdoi-0002.bmp",
	"/includes/pics/albart/sngl/dpritfptstdoi/dpritfptstdoi-0004.bmp",
	"/includes/pics/albart/sngl/dpritfptstdoi/dpritfptstdoi-0008.bmp",
	"/includes/pics/albart/sngl/dpritfptstdoi/dpritfptstdoi-0010.bmp",
	"/includes/pics/albart/sngl/dpritfptstdoi/dpritfptstdoi-0020.bmp",
	"/includes/pics/albart/sngl/dpritfptstdoi/dpritfptstdoi-0040.bmp",
	"/includes/pics/albart/sngl/dpritfptstdoi/dpritfptstdoi-0080.bmp",
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