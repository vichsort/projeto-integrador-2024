import { LitElement, html, css } from "lit";

export class miniCuriosity extends LitElement {
    render() {
        return html`
            <h1 class="subtitulo">ROVERS</h1>
            <div class="minicuriosity">
                <div class="curiosity3d">
                    <model-viewer
                    src="./src/assets/3d models/curiosity-model.glb"
                    alt="Modelo 3D do Curiosity"
                    auto-rotate
                    camera-controls
                    camera-orbit="40deg 75deg 1.2m"
                    camera-target="0m 0.75m 0m"
                    style="width: 100%; height: 400px; background-color: transparent"
                    >
                    </model-viewer>
                </div>
                <p>Rover curiosity em 3D</p>
            </div>
        `
    }

    static get styles() {
        return css`

            @media (max-width: 1024px) and (min-width: 440px) {
                p {
                    font-size: 2rem !important;
                }
            }

            @media (max-width: 430px) {
                p {
                    font-size: 1rem !important;
                }

                .subtitulo {
                    font-size: 2rem !important;
                }

                .curiosity3d {
                    width: 600px !important;
                    height: 300px !important;
                }

                .curiosity3d model-viewer {
                    width: 600px !important;
                }
            }

            .subtitulo {
                font-size: 3rem;
                margin-left: 4rem;
                margin-bottom: 4rem;
                color: white;
            }
                
            .minicuriosity {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 7rem;
            }

            .curiosity3d {
                width: 700px;
                height: 400px;
                display: flex;
                margin-bottom: 20px;
            }

            .curiosity3d model-viewer {
                width: 700px;
            }

            .curiosity3d p {
                text-align: center;
                margin-top: 1rem;
                position: absolute;
            }
        `
    }
}
