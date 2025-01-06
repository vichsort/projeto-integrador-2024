import { LitElement, html, css } from "lit";

export class miniCuriosity extends LitElement {
    render() {
        return html`
            <h1 class="subtitulo">ROVERS</h1>
            <div class="minicuriosity">
                <div class="curiosity3d">
                    <model-viewer
                    src="./src/assets/curiosity-model.glb"
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

window.customElements.define('mini-curiosity', miniCuriosity);