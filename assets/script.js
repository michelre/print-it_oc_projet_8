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

let currentSlide = 0;

function changeSelectedDot(){
	const dots = document.querySelectorAll('.dot')
	dots.forEach((dot, idx) => {
		dot.classList.remove('dot_selected')
		if(idx === currentSlide){
			dot.classList.add('dot_selected')
		}
	});
}

function changeSlide(){
	const slide = slides[currentSlide]
	const banner = document.querySelector('.banner-img')
	const tagLine = document.querySelector('#banner p')
	banner.setAttribute('src', `./assets/images/slideshow/${slide['image']}`)
	tagLine.innerHTML = slide['tagLine']
}


const arrow_left = document.querySelector('.arrow_left');
const arrow_right = document.querySelector('.arrow_right');

arrow_left.addEventListener('click', function() {
	if(currentSlide === 0){
		currentSlide = slides.length - 1
	} else {
    	currentSlide -= 1
	}
	changeSlide()
	changeSelectedDot()
});

arrow_right.addEventListener('click', function() {
	if(currentSlide === slides.length - 1){
		currentSlide = 0
	} else {
    	currentSlide += 1
	}

	changeSlide()
	changeSelectedDot()
});


/// Sélection de l'élément dans lequel que je veux insérer les dots
const dots = document.querySelector('.dots');

// Pour chaque slide, crée un dot
for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('div');
    
    // Ajout de la classe à chaque dot
    dot.className = 'dot';
    
    // Pour le premier slide, ajout de la classe dot selected
    if (i == 0) {
        dot.classList.add('dot_selected');
    }
    
    // Insére le dot dans le DOM
    dots.appendChild(dot);
}


