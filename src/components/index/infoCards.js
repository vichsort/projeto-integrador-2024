import { LitElement, html, css } from "lit";

export class infoCards extends LitElement {
    render() {
        return html`
            <div class="cards">
                <div class="card">
                    <h2>Curiosity</h2>
                    <p>
                        O <b>Curiosity Rover</b> foi lançado em 2011 pela NASA, tem como seu
                        principal papel explorar a superficíe marciana, estudar seu clima,
                        sua estrutura, sua geologia, e se o planeta teria a possibilidadede
                        ser habitado por seres humanos. É equipado por instrumentos
                        tecnológicos avançados, como sensores, câmeras de alta resolução e
                        braços robóticos, o Curiosity fez diversas descobertas
                        significativas, como a identificação de rochas e do solo, variações
                        no clima local e a detecção de moléculas orgânicas.
                    </p>
                </div>

                <div class="card">
                    <h2>Perseverance</h2>
                    <p>
                        O <b>Perseverance</b> foi lançado em 2020 pela NASA, tem como seu
                        principal objetivo avançar os conhecimentos sobre o planeta
                        vermelho, utilizando equipamentos tecnológicos, como o SuperCam, que
                        analisa a composição química das rochas, e o MOXIE, que tenta gerar
                        oxigênio a partir do dióxido de carbono da atmosfera de Marte, uma
                        tecnologia crucial para missões humanas futuras. O Perseverance
                        coleta amostras de Marte, que serão enviados para a Terra.
                    </p>
                </div>
            </div>
            <div class="card-btn-container">
                <button class="card-btn"><a href="rovers.html">CONHEÇA MAIS</a></button>
            </div>
        `
    }

    static get styles() {
        return css`
            @media (max-width: 430px) {
                .cards, .card {
                    width: 100% !important;
                }

                .cards {
                    padding: 0 !important;
                    gap: 70px !important;
                }

                .card {
                    font-size: 2rem !important;
                    line-height: 29px !important;
                }

                .card h2 {
                    font-size: 2.5rem !important;
                }
            }

            .cards {
                display: flex;
                flex-wrap: wrap;
                gap: 50px; 
                justify-content: center; 
                padding: 0 2rem; 
                text-align: center;
                margin-bottom: -2%;
            }

            .card {
                color: white;
                padding: 10px;
                border-radius: 10px;
                width: 45%; 
                font-size: 1.3rem;
                font-weight: 280;
                line-height: 23px;
            }

            .card h2 {
                font-weight: bolder;
                margin-bottom: 40px;
                font-size: xx-large;
            }

            .card-btn-container {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .card-btn {
                margin-top: 10rem;
                justify-content: center;
                background-color: #f25e02;
                color: white;
                font-size: 2rem;
                transition: 0.3s ease;
                padding: 1rem 5rem;
                border-radius: 50px;
                text-decoration: none;
                padding-bottom: 10px;
                border: none;
                
            }

            .card-btn:hover {
                padding: 1rem 6rem;
                padding-bottom: 10px;
                box-shadow: 0px 0px 90px 6px rgba(255, 255, 255, 0.22);
                -webkit-box-shadow: 0px 0px 90px 6px rgba(255, 255, 255, 0.22);
                -moz-box-shadow: 0px 0px 90px 6px rgba(255, 255, 255, 0.22);

            }

            .card-btn a {
                margin-top: 10rem;
                justify-content: center;
                background-color: #f25e02;
                color: white;
                font-size: 2rem;
                transition: 0.3s ease;
                padding: 1rem 5rem;
                border-radius: 50px;
                text-decoration: none;
                padding-bottom: 0.2%;
                text-weight: bolder;
            }
        `
    }
}