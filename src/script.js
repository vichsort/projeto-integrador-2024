window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const rotationAngle = scrollPosition / 20;
  const image = document.querySelector(".mars");

  image.style.transform = `rotate(${Math.min(rotationAngle, 360)}deg)`;
});

// Variáveis globais
let indiceSlide = 1;
let carrossel = document.querySelector(".carrossel");

// Função para mudar o slide
function mudarSlide(direcao) {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  // Atualiza o índice
  indiceSlide += direcao;

  // Garante que o índice fique dentro dos limites
  if (indiceSlide >= totalSlides) {
    indiceSlide = 0;
  } else if (indiceSlide < 0) {
    indiceSlide = totalSlides - 1;
  }

  // Atualiza a posição do carrossel
  ajustarPosicaoSlide();
}

// Função para ajustar a posição do slide
function ajustarPosicaoSlide() {
  const larguraSlide = document.querySelector(".container").offsetWidth;
  carrossel.style.transform = `translateX(${-indiceSlide * larguraSlide}px)`;
}

// Listener para redimensionamento da janela
window.addEventListener("resize", ajustarPosicaoSlide);

// Inicializa o carrossel
document.addEventListener("DOMContentLoaded", () => {
  carrossel = document.querySelector(".carrossel");
  ajustarPosicaoSlide();
});
