import { LitElement, html, css } from 'lit';

export class landingSection extends LitElement {
    firstUpdated() {
        const marsElement = this.shadowRoot.querySelector(".mars");

        window.addEventListener("scroll", () => {
            const scrollPosition = window.scrollY;
            const rotationAngle = scrollPosition / 15; 
            marsElement.style.transform = `rotate(${Math.min(rotationAngle, 360)}deg)`;
        });
    }

    render() {
        return html`
            <div class="self">
                <img src="so texto.svg" alt="Logo do site: GeoMars" class="titulo" />

                <div class="mars-container">
                    <img
                        src="marte home.png"
                        alt="Planeta Marte"
                        class="mars"
                    />
                </div>
            </div>
        `;
    }

    static get styles() {
        return css`

            @media (max-width: 1024px) and (min-width: 440px) {
                .self {
                    min-height: 100dvh;
                    display: flex !important;
                    flex-direction: column;
                    align-items: center;
                }

                .mars-container {
                    margin: 0 !important;
                }

                .titulo {
                    margin: 0 !important;
                    position: relative;
                    bottom: -10rem;
                }
            }

            @media (max-width: 440px) {

                .self {
                    display: flex !important;
                    flex-direction: column !important;
                    flex-wrap: wrap;
                    align-content: center;
                    height: 70dvh; 

                }

                .titulo {
                    width: 386.5px !important
                }

                .mars-container {
                    width: 400px !important;
                    height: 400px !important;
                    
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
                z-index: 500;
                transition: 0.3s ease;
                display: flex;
                justify-content: center;
            }

            .mars-container {
                width: 800px;
                height: 800px;
                margin: 0 auto;
                margin-top: -25vh;
                margin-bottom: -20vh;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .mars {
                width: 100%;
                height: 100%;
                z-index: 200;
                margin-top: 20vh;
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
        `;
    }
}
