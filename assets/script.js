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
const ChangeImage = document.getElementById('slide');
const ChangeText = document.getElementById('text');
const ChangeDot = document.querySelectorAll('.dot');
let i = 0;

Left.addEventListener("click", () => {
	PrevImage();
	DotPosition();
});

Right.addEventListener("click", () => {
	NextImage();
	DotPosition();
});

function PrevImage(){
	i--;
	if (i < 0)
	i = slides.length - 1;
    ChangeImage.src = "./assets/images/slideshow/" + slides[i].image;
	ChangeText.innerHTML = slides[i].tagLine;
}

function NextImage(){
	i++;
	if (i > slides.length - 1)
	i = 0;
    ChangeImage.src = "./assets/images/slideshow/" + slides[i].image;
	ChangeText.innerHTML = slides[i].tagLine;
}

function DotPosition (){
	ChangeDot.forEach(ChangeDot => ChangeDot.classList.remove('dot_selected'));
	ChangeDot[i].classList.add('dot_selected');
}

