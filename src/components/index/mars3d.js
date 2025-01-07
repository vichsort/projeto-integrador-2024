import { LitElement, html, css } from "lit";

export class mars3d extends LitElement {
    render() {
        return html`
            <h2 class="subtitulo">CONHEÇA MARTE</h2>
            <div class="subsection">
                <div class="minimars">
                    <model-viewer
                        src="../../../src/assets/mars-model.glb"
                        alt="Modelo 3D de Marte"
                        auto-rotate
                        camera-controls
                        class="mars3d"
                    >
                    </model-viewer>
                    <p>Planeta Marte em 3D</p>
                </div>
            </div>
        `
    }

    static get styles() {
        return css`
            .subtitulo {
                font-size: 3rem;
                margin-left: 4rem;
                margin-bottom: 4rem;
                color: white;
            }

            .minimars {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .mars3d {
                width: 500px;
                height: 500px;
                display: flex;
                margin-bottom: 20px;
            }

            .mars3d p {
                text-align: center;
                margin-top: 1rem;
                position: absolute;
            }

            .subsection {
                display: flex;
                width: 100%;
                gap: 5%;
                padding: 0 8rem;
                margin-bottom: 4rem;
            }

        `
    } 
}