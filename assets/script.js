const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const Left = document.querySelector('.arrow_left');
const Right = document.querySelector('.arrow_right');
const MyImage = document.getElementById('slide');
let i = 0;

Left.addEventListener("click", () => {
	PrevSlide
});

function PrevSlide(){
	i--;
	if (i < 0)
	i = slides.length - 1;
    MyImage[i].src = "./assets/images/slideshow/" + slides[i].image;
}

Right.addEventListener("click", () => {
	NextSlide
});cap

function NextSlide(){
	i++;
	if (i == slides.lenght)
	i = 0;
    MyImage[i].src = "./assets/images/slideshow/" + slides[i].image;
}