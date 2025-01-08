// window.addEventListener("scroll", () => {
//   const scrollPosition = window.scrollY;
//   const rotationAngle = scrollPosition / 15;
//   const image = document.querySelector(".mars");

//   image.style.transform = `rotate(${Math.min(rotationAngle, 360)}deg)`;
// });

/* loader ------ */

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");
  loader.addEventListener("transitionend", () => {
      document.body.removeChild("loader")
  })
})