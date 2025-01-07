// problema em fazer a função de rotação funcionar:
// window.addEventListener("scroll", () => {
//     const scrollPosition = window.scrollY;
//     const rotationAngle = scrollPosition / 15;
//     const image = document.querySelector(".mars");
  
//     image.style.transform = `rotate(${Math.min(rotationAngle, 360)}deg)`;
// });

import { LitElement, html, css } from 'lit';

export class landingSection extends LitElement {
    render() {
        return html`
        <div class="self">
            <img src="so texto.svg" alt="Logo do site: GeoMars" class="titulo" />

            <img src="marte home.png" alt="Planeta Marte" class="mars" />
        </div>
        `
    }

    static get styles() {
        return css`
            @media (max-width: 430px) {
                .self {
                    width: 100%;
                }
                .titulo {
                    margin: 2rem auto;
                    width: 376.5px;
                    height: 181.5px;
                    position: relative;
                    z-index: 1;
                    transition: 0.3s ease;
                }
                
                .item {
                    margin-left: 1rem;
                }
                
                .mars {
                    width: 100px;
                    height: 100px;
                    margin: 0 auto;
                    margin-top: -18vh;
                    margin-bottom: -20vh;
                    transition: transform 0s ease-in-out;
                    z-index: 2;
                }
                
                @keyframes sobeDesce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-50%);
                    }
                }
                
                .seta {
                    visibility: hidden;
                    color: white;
                    margin: 2rem auto;
                    position: relative;
                    z-index: 10;
                    text-align: center;
                    top: -300px;
                    height: 5rem;
                    animation: sobeDesce 3s ease infinite;
                }
            }

            .self {
                display: block;
                padding: 5rem;
            }
            .titulo {
                margin: 2rem auto;
                width: 753px;
                height: 363px;
                position: relative;
                z-index: 1;
                transition: 0.3s ease;
                display: flex;
                justify-content: center;
            }

            .item {
                margin-left: 1rem;
            }

            .mars {
                width: 800px;
                height: 800px;
                margin: 0 auto;
                margin-top: -9vh;
                margin-bottom: -20vh;
                transition: transform 0s ease-in-out;
                z-index: 2;
            }

            @keyframes sobeDesce {
                0%, 100% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-50%);
                }
            }

            .seta {
                visibility: hidden;
                color: white;
                margin: 2rem auto;
                position: relative;
                z-index: 10;
                text-align: center;
                top: -300px;
                height: 5rem;
                animation: sobeDesce 3s ease infinite;
            }
        `
    }
}