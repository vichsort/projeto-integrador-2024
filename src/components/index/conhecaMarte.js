import { html, css, LitElement } from 'lit';

export class conhecaMarte extends LitElement {
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
                <table class="info-table">
                    <tr>
                        <td class="label">Área:</td>
                        <td class="value">144.400.000 km<sup>2</sup></td>
                    </tr>
                    <tr>
                        <td class="label">Força da gravidade:</td>
                        <td class="value">3,71 m/s<sup>2</sup></td>
                    </tr>
                    <tr>
                        <td class="label">Distância da Terra:</td>
                        <td class="value">54.600.000 km</td>
                    </tr>
                    <tr>
                        <td class="label">Distância do Sol:</td>
                        <td class="value">227.900.000 km</td>
                    </tr>
                    <tr>
                        <td class="label">Período orbital:</td>
                        <td class="value">687 dias</td>
                    </tr>
                    <tr>
                        <td class="label">Duração do dia:</td>
                        <td class="value">1d 0h 37m</td>
                    </tr>
                </table>
            </div>
        `;
    }

    static get styles() {
        return css`
            .subtitulo {
                font-size: 3rem;
                margin-left: 4rem;
                margin-bottom: 4rem;
                color: white;
            }

            .subsection {
                display: flex;
                width: 100%;
                gap: 5%;
                align-items: flex-start;
            }

            .minimars {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                flex: 1;
            }

            .mars3d {
                width: 500px;
                height: 500px;
                display: flex;
                margin-bottom: 20px;
            }

            .info-table {
                flex: 1;
                max-width: 70%;
                border-collapse: collapse;
                color: white;
                display: flex;
                align-items: center;
                padding-top: 8vh;
            }

            .info-table td {
                padding: 15px 10px;
                font-size: 1.5rem;
            }

            .label {
                font-weight: bold;
                text-align: left;
                border-bottom: 1px solid white;
            }

            .value {
                text-align: right;
                border-bottom: 1px solid white;
            }

            .info-table tr:last-child td {
                border-bottom: none;
            }
        `;
    }
}
