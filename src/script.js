window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const rotationAngle = scrollPosition / 5; 
    const image = document.querySelector('.mars');
    
    image.style.transform = `rotate(${Math.min(rotationAngle, 90)}deg)`;
  });
  