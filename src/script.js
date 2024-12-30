window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const rotationAngle = scrollPosition / 15;
  const image = document.querySelector(".mars");

  image.style.transform = `rotate(${Math.min(rotationAngle, 360)}deg)`;
});


// // carrossel
// const carousel = document.querySelector('.carousel');
// const items = document.querySelectorAll('.carousel-item');
// const totalItems = items.length;
// let currentIndex = 1; 

// function showSlide(index) {
//     const slides = document.querySelectorAll('.carousel-item');
//     slides.forEach((slide, i) => {
//         slide.classList.remove('active');
//         if (i === index) {
//             slide.classList.add('active');
//         }
//     });
//     document.querySelector('.carousel').style.transform = `translateX(-${index * 50}%)`; // aqui que tem a rolagem
// }

// document.querySelector('.next').addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % totalItems;
//     showSlide(currentIndex);
// });

// document.querySelector('.prev').addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + totalItems) % totalItems;
//     showSlide(currentIndex);
// });

// showSlide(currentIndex);

// Player - Seção 7

const audio = document.getElementById('audio');
const playButton = document.querySelector('.play-button');
const progressBar = document.querySelector('.progress-bar');
const timeDisplay = document.querySelector('.time');

function togglePlay() {
  if (audio.paused) {
    audio.play();
    playButton.textContent = '⏸';
  } else {
    audio.pause();
    playButton.textContent = '▶';
  }
}

audio.addEventListener('timeupdate', () => {
  progressBar.value = (audio.currentTime / audio.duration) * 100;
  updateDisplayTime();
});

progressBar.addEventListener('input', () => {
  const seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});

function updateDisplayTime() {
  const minutes = Math.floor(audio.currentTime / 60);
  const seconds = Math.floor(audio.currentTime % 60);
  timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}


/* loader ------ */

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");
  loader.addEventListener("transitionend", () => {
      document.body.removeChild("loader")
  })
})