window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const rotationAngle = scrollPosition / 20; 
    const image = document.querySelector('.mars');
    
    image.style.transform = `rotate(${Math.min(rotationAngle, 360)}deg)`;
});
  