import { LitElement, html, css } from "lit";

export class footerComponent extends LitElement {
    render() {
        return html`
            <footer>
                <div class="rover-andando-container">
                    <img
                    src="./src/assets/moving-rover.png"
                    alt="Rover percorrendo o solo marciano"
                    class="rover-andando"
                    />
                </div>

                <div class="newsletter">
                    <p>Assine nossa Newsletter</p>
                    <input placeholder="E-mail" type="email" />
                    <button>Assinar</button>
                </div>

                <div class="wraper">
                    <img
                    src="../../../src/assets/logo-ifc.png"
                    alt="Logo do IFC Campus Concórdia"
                    class="ifc"
                    />

                    <div class="card-f">
                        <div class="title"><a href="#conhecaMarte">Conheça Marte</a></div>
                        <p>Status das Missões<br />Mais Informações</p>
                    </div>
                    <div class="card-f">
                        <div class="title"><a href="/rovers.html">Rovers</a></div>
                        <p>Modelo interativo<br />Curiosity e Perseverance</p>
                    </div>
                    <div class="card-f">
                        <div class="title"><a href="#">Explorações Espaciais</a></div>
                        <p>Linha do tempo<br />Galeria de fotos<br />Sons de Marte</p>
                    </div>
                </div>

                <p class="adderalls">GeoMars© - IFC Campus Concórdia</p>
            </footer>
        `
    }

    static get styles() {
        return css`

            @media (max-width: 430px) {
                footer {
                    width: 267%;
                }

                .wraper {
                    justify-content: center;
                    align-items: center;
                }

                .ifc {
                    margin: 0 !important;
                    height: 450px !important;
                }

                .adderalls {
                    bottom: -10rem;
                    position: relative;
                    font-size: 2rem !important;
                }

                .card-f, .newsletter {
                    display: none !important;
                }

                footer {
                    bottom: 0;
                    height: 100rem !important;
                }

                .rover-andando-container {
                    bottom: 8rem;
                    position: relative;
                }

                .rover-andando {
                    width: 200px;
                    height: 200px;
                }

                @keyframes andando {
                    0% {
                    transform: translateX(0);
                    }
                    100% {
                    transform: translateX(calc(67% - 150px));
                    }
                }
            }

            @media (max-width: 1024px) {
                footer {
                    height: 100rem !important;
                }
            }

            footer {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 20px;
                background-image: url(footerbg.jpeg);
                background-size: cover;
                height: 70rem;
                color: white;
                position: relative;
                margin: 0
            }
            
            .rover-andando {
                position: relative;
                top: 1rem;
                width: 400px;
                animation: andando 30s linear infinite alternate;
                height: 400px;
                margin-bottom: -200px;
            }
            
            @keyframes andando {
                0% {
                transform: translateX(0);
                }
                100% {
                transform: translateX(calc(30vw - 150px));
                }
            }
            
            .newsletter {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-top: 200px;
                margin-bottom: 20px;
                font-size: 2rem;
            }
            
            .newsletter p {
                font-size: 2rem;
                margin-right: 10px;
                display: block;
                width: 100%;
            }
            
            .newsletter input {
                padding: 5px;
                padding-left: 15px;
                padding-right: 50px;
                border: none;
                border-radius: 16px;
                background-color: rgba(0, 0, 0, 0.523);
                outline: #ff5b2e41 solid 1px;
                font-size: 1.8rem;
            }
            
            .newsletter button {
                padding: 5px 50px;
                background-color: #ff5b2e;
                color: white;
                border: none;
                border-radius: 40px;
                cursor: pointer;
                font-size: 1.7rem;
                margin-left: -50px;
                z-index: 999;
                box-shadow: 0px 0px 90px 6px rgba(255, 255, 255, 0.22);
                -webkit-box-shadow: 0px 0px 90px 6px rgba(255, 255, 255, 0.22);
                -moz-box-shadow: 0px 0px 90px 6px rgba(255, 255, 255, 0.22);
                transition: 0.1s ease;
            }

            .newsletter button:hover {
                font-size: 1.8rem;
            }
            
            .ifc {
                height: 300px;
                margin: 20px 0;
                margin-right: 80px;
            }
            
            .wraper {
                display: flex;
                gap: 30px;
                margin: 20px 0;
            }
            
            .card-f {
                text-align: center;
                align-items: center;
                justify-content: center;
                margin-top: 12%
            }
            
            .card-f .title {
                font-weight: bold;
                margin-bottom: 10px;
                font-size: 1.5rem;
            }
            
            .adderalls {
                font-size: 1.2rem;
                margin-top: 20px;
            }

            .rover-andando-container {
                bottom: -2rem;
                position: relative;
            }  

            a {
                color: white;
                text-decoration: none;
            }
        `
    }
}