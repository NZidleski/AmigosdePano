let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function moveSlide(n) {
    showSlide(currentSlide + n);
}

setInterval(() => {
    moveSlide(1);
}, 6000); // Altere o valor 5000 para ajustar a velocidade (em milissegundos)

//em cima é o banner :D