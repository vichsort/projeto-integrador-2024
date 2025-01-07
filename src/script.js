// window.addEventListener("scroll", () => {
//   const scrollPosition = window.scrollY;
//   const rotationAngle = scrollPosition / 15;
//   const image = document.querySelector(".mars");

//   image.style.transform = `rotate(${Math.min(rotationAngle, 360)}deg)`;
// });
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