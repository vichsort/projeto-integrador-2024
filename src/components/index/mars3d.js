import { LitElement, html, css } from "lit";

export class mars3d extends LitElement {
    render() {
        return html`
            <h2 class="subtitulo">CONHEÇA MARTE</h2>
            <div class="subsection">
                <div class="minimars">
                    <model-viewer
                        src="../../../src/assets/3d models/mars-model.glb" 
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


        `
    } 
}