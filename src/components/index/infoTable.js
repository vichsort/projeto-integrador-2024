import { html, css, LitElement } from 'lit';

export class infoTable extends LitElement {
    render() {
        return html`
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
        ` 
    }

    static get styles() {
        return css`
            .info-table {
                width: 100%;
                max-width: 1200px;
                margin: 50px auto;
                border-collapse: collapse;
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
        `
    }
}

window.customElements.define('info-table', infoTable);