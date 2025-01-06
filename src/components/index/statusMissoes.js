import { LitElement, html, css } from "lit";

export class statusMissoes extends LitElement {
    render() {
        return html`
              <div class="status">
                <h2>Status das missões</h2>
            </div>
            <div class="subsection2" data-aos="fade-right">
                <div class="small">
                <h3 class="num">03</h3>
                <p class="txt">NAVES DA NASA EM ÓRBITA</p>
                </div>
                <div class="small">
                <h3 class="num">02</h3>
                <p class="txt">ROVERS DA NASA NA SUPERFÍCIE</p>
                </div>
            </div>
            <img
                data-aos="zoom-in-left"
                src="./src/assets/sputnik-nave.png"
                alt="Sonda Sputnik ilustrativa"
                class="sputnik-img"
            />

            <h3 class="saber">Quer saber o que está acontecendo por lá?</h3>
            <div class="foguete-btn-container">
                <a href="news.html"><button class="foguete-btn">
                SAIBA MAIS
                <img src="/src/assets/rocket 1.svg" alt="Imagem de uma nave"/>
                </button></a>
            </div>
        `
    }

    static get styles() {
        return css`
            .subsection2 {
                display: flex;
                justify-content: center;
                padding: 0 30rem;
                gap: 10%;
                margin-bottom: 8rem;
            }

            .status {
                text-align: center;
                font-size: 2.5rem;
                letter-spacing: 0.6rem;
                margin-bottom: 3rem;
                margin-top: 15vh;
            }

            .small {
                display: flex;
            }

            .num {
                color: #555b8d;
                font-size: 6rem;
                margin-right: 2rem;
                transition: 0.1s ease-in-out;
            }

            .txt {
                font-size: x-large;
                text-align: center;
            }

            .small .txt {
                width: 25vh;
                margin-top: 4%;
            }

            .saber {
                text-align: center;
                font-size: 2.5rem;
                margin-top: -40px;
                margin-bottom: 30px;
            }

            .foguete-btn-container {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .foguete-btn {
                display: inline-flex;
                justify-content: center;
                background-color: rgb(255, 255, 255);
                color: black;
                font-weight: bold;
                font-size: 2rem;
                transition: 0.3s ease;
                padding: 1rem 5rem;
                border-radius: 50px;
                text-decoration: none;
                padding-bottom: 0.2%;
            }

            .foguete-btn:hover {
                font-weight: bolder;
                padding: 1rem 6rem;
                padding-bottom: 0.2%;
                box-shadow: 0px 0px 108px 6px rgba(255, 255, 255, 0.33);
                -webkit-box-shadow: 0px 0px 108px 6px rgba(255, 255, 255, 0.33);
                -moz-box-shadow: 0px 0px 108px 6px rgba(255, 255, 255, 0.33);
            }

            .btn-foguete img {
                border: none;
                outline: none;
                padding: 0;
                margin: 0;
                margin-left: 15px;
            }

            .sputnik-img {
                position: absolute;
                left: 80%;
                margin-top: -50vh;
                height: 550px;
                width: 550px;
                transition: 0.3s ease;
            }
        `
    }
}

window.customElements.define('status-missoes', statusMissoes);