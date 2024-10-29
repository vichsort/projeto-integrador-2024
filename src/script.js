window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const rotationAngle = scrollPosition / 20; 
    const image = document.querySelector('.mars');
    
    image.style.transform = `rotate(${Math.min(rotationAngle, 360)}deg)`;
});

let indiceSlide = 0;

function mudarSlide(direcao) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  indiceSlide = (indiceSlide + direcao + totalSlides) % totalSlides;
  const larguraSlide = document.querySelector('.container').offsetWidth;
  document.querySelector('.carrossel').style.transform = `translateX(${-indiceSlide * larguraSlide}px)`;
}

window.addEventListener('resize', () => {
  const larguraSlide = document.querySelector('.container').offsetWidth;
  document.querySelector('.carrossel').style.transform = `translateX(${-indiceSlide * larguraSlide}px)`;
});
