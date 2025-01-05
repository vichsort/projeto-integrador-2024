// import { LitElement, css, html } from 'lit'

// export class Carousel extends LitElement {

//   static get properties() {
//     const carousel = document.getElementById('carousel');
//     const prevBtn = document.getElementById('prevBtn');
//     const nextBtn = document.getElementById('nextBtn');
  
//     let currentPosition = 1;
//     const cardsPerView = 3;
//     const cards = document.querySelectorAll('.card');
//     const totalCards = cards.length;
//   }

//   constructor() {
//       super()
//       this.carousel = document.getElementById('carousel');
//       this.currentPosition = 1;
//       this.cardsPerView = 3;
//       this.cards = document.querySelectorAll('.card');
//       this.totalCards = cards.length;
//   };

//   render() {
//     return html`
//       <div class="carousel-container">
//           <div class="carousel" id="carousel">
//               <a href="#" class="card">
//                   <img src="./assets/carrossel-demo0.png" alt="" class="card-bg">
//                   <div class="card-content">
//                       <h2>Desenvolvimento Web</h2>
//                       <p>Aprenda HTML, CSS e JavaScript do básico ao avançado.</p>
//                   </div>
//               </a>
//               <a href="#" class="card">
//                   <img src="./assets/carrossel-demo1.png" alt="" class="card-bg">
//                   <div class="card-content active">
//                       <h2>UX/UI Design</h2>
//                       <p>Design de interfaces modernas e intuitivas.</p>
//                   </div>
//               </a>
//               <a href="#" class="card">
//                   <img src="./assets/carrossel-demo2.png" alt="" class="card-bg">
//                   <div class="card-content">
//                       <h2>Back-end</h2>
//                       <p>Desenvolvimento de servidores e APIs robustas.</p>
//                   </div>
//               </a>
//               <a href="#" class="card">
//                   <img src="./assets/carrossel-demo0.png" alt="" class="card-bg">
//                   <div class="card-content">
//                       <h2>DevOps</h2>
//                       <p>Integração e entrega contínua de software.</p>
//                   </div>
//               </a>
//               <a href="#" class="card">
//                   <img src="./assets/carrossel-demo1.png" alt="" class="card-bg">
//                   <div class="card-content">
//                       <h2>Cloud Computing</h2>
//                       <p>Soluções escaláveis na nuvem.</p>
//                   </div>
//               </a>
//               <a href="#" class="card">
//                   <img src="./assets/carrossel-demo2.png" alt="" class="card-bg">
//                   <div class="card-content">
//                       <h2>Mobile Development</h2>
//                       <p>Desenvolvimento de aplicativos móveis.</p>
//                   </div>
//               </a>
//           </div>
//           <button id="prevBtn" class="carousel-btn">&lt;</button>
//           <button id="nextBtn" class="carousel-btn">&gt;</button>
//       </div>
//     `
//   }

//   function moveCarousel(direction) {
//     const cardWidth = 35; // 30% width + 5% gap

//     currentPosition += direction;

//     if (currentPosition >= totalCards - cardsPerView + 1) {
//         currentPosition = 0;
//     } else if (currentPosition < 0) {
//         currentPosition = totalCards - cardsPerView;
//     }

//     const translateX = currentPosition * cardWidth;
//     carousel.style.transform = `translateX(-${translateX}%)`;
//   }

//   prevBtn.addEventListener('click', () => moveCarousel(-1));
//   nextBtn.addEventListener('click', () => moveCarousel(1));

//   // Inicializar carrossel no segundo item
//   moveCarousel(0);

//   static get styles() {
//     return css`
//         .carousel-container {
//             width: 100%;
//             height: 50vh;
//             position: relative;
//             overflow: hidden;
//         }

//         .carousel {
//             display: flex;
//             transition: transform 0.5s ease;
//             height: 100%;
//             gap: 5%;
//             padding: 0 2.5%;
//         }

//         .card {
//             width: 50%;
//             height: 50vh;
//             flex-shrink: 0;
//             text-decoration: none;
//             color: white;
//             box-sizing: border-box;
//             display: flex;
//             flex-direction: column;
//             justify-content: flex-end;
//             padding: 0 0 5px 0;
//             position: relative;
//             border-radius: 8px;
//             overflow: hidden;
//         }

//         .card::before {
//             content: '';
//             position: absolute;
//             bottom: 0;
//             left: 0;
//             right: 0;
//             height: 50%;
//             background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7));
//             z-index: 1;
//         }

//         .card-content {
//             position: relative;
//             z-index: 2;
//             padding: 20px;
//         }

//         .card-bg {
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//             z-index: 0;
//         }


//         .carousel-btn {
//             background: none;
//             border: none;
//             color: white;
//             font-size: 48px;
//             cursor: pointer;
//             position: absolute;
//             top: 50%;
//             transform: translateY(-50%);
//             z-index: 3;
//             transition: all 0.3s ease;
//             width: 60px;
//             height: 60px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//         }

//         .carousel-btn:hover {
//             background: white;
//             color: black;
//         }

//         #prevBtn {
//             left: 30%;
//         }

//         #nextBtn {
//             right: 30%;
//         }

//         h2, p {
//             margin: 0;
//             color: white;
//             text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
//         }

//         h2 {
//             margin-bottom: 10px;
//             font-size: 1.5rem;
//         }
//     `
//   }
// }

// window.customElements.define('app-carousel', Carousel)
