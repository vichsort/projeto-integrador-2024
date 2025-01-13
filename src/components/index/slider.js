
import { LitElement, html, css } from 'lit';

class TimelineSlider extends LitElement {
    static styles = css`
        :host {
            display: block;
            color: #fff;
        }

        .slider-container {
            position: relative;
            max-width: 100%;
            margin: auto;
            
        }

        .slides {
            display: flex;
            transition: transform 0.5s ease-in-out;
        }

        .slide {
            flex: 0 0 50%;
            box-sizing: border-box;
            text-align: center;
            padding: 3vw;
            align-items: center;
            justify-content: center;
            max-width: 90rem;
        }

        .slide h2 {
            font-size: 4rem;
            margin-bottom: 1rem;
            color: #fff;
        }

        .slide h3 {
            font-size: 2rem;
            margin-bottom: 1rem;
            color: #ddd;
        }

        .slide p {
            font-size: 1.2rem;
            line-height: 1.5;
            color: #ccc;
        }

        .navigation {
            position: absolute;
            top: 50%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            transform: translateY(-50%);
        }

        .navigation button {
            background-color: rgba(0, 0, 0, 0.0);
            color: #fff;
            border: none;
            cursor: pointer;
            border-radius: 50%;
            transition: 0.3s ease;
            font-size: 2rem;
            padding: 10px;
        }

        .navigation button:hover {
            color: #bbb;
        }

        .dots {
            text-align: center;
            position: absolute;
            bottom: 10px;
            width: 100%;
            border-radius: 3px;
            padding-top: 3vh;
        }

        .dots span {
            height: 3px;
            width: 30px;
            margin: 0 5px;
            background-color: #bbb;
            border-radius: 10%;
            display: inline-block;
            cursor: pointer;
        }

        .dots .active {
            background-color: #717171;
        }
    `;

    static properties = {
        slides: { type: Array },
        index: { type: Number },
    };

    constructor() {
        super();
        this.slides = [
            { year: '1965', title: 'Mariner 4', description: 'Foi a primeira missão bem-sucedida a sobrevoar Marte, enviando 21 imagens da superfície marciana de volta à Terra. Essas imagens revelaram um planeta árido, cheio de crateras, desafiando a visão romântica de um Marte repleto de canais e vida. Essa missão inaugurou a era da exploração marciana.' },
            { year: '1976', title: 'Viking 1 e 2', description: 'As sondas Viking foram as primeiras a pousar com sucesso em Marte. Equipadas com câmeras e instrumentos para análise de solo, realizaram experimentos para detectar possíveis sinais de vida. Embora nenhuma evidência conclusiva de organismos tenha sido encontrada, essas missões forneceram dados atmosféricos e geológicos fundamentais.' },
            { year: '1997', title: 'Mars Pathfinder e Sojourner', description: 'Esta missão combinou uma sonda estacionária, a Pathfinder, com o primeiro rover operacional, Sojourner. O rover explorou o solo marciano próximo à sonda, estudando rochas e solos enquanto demonstrava novas tecnologias para missões futuras. Foi uma das missões mais econômicas e bem-sucedidas da NASA.' },
            { year: '2001', title: 'Mars Odyssey', description: 'Orbitando Marte por mais de 20 anos, a Odyssey trouxe mapas detalhados de minerais, gelo subterrâneo e radiação no planeta. Sua detecção de grandes depósitos de água congelada foi crucial para futuras missões humanas e ajudou a entender o clima passado de Marte.' },
            { year: '2004', title: 'Spirit e Opportunity', description: 'Esses rovers gêmeos pousaram em lados opostos do planeta para investigar sinais de água no passado marciano. Apesar de projetados para operar por 90 dias, Spirit funcionou por seis anos e Opportunity por quase 15 anos, descobrindo minerais que indicam ambientes úmidos antigos e regiões potencialmente habitáveis.' },
            { year: '2006', title: 'Mars Reconnaissance Orbiter', description: 'Com instrumentos avançados, essa sonda orbitou Marte para capturar imagens de alta resolução da superfície. Ela identificou características como leitos de rios secos, dunas móveis e evidências de fluxos sazonais de água salgada, revolucionando o entendimento da geologia marciana.' },
            { year: '2012', title: 'Curiosity', description: 'Este rover, do tamanho de um carro, foi projetado para investigar a habitabilidade de Marte. Ele explorou a Cratera Gale, onde encontrou evidências de um antigo lago de água doce e moléculas orgânicas no solo, sugerindo que Marte já teve condições favoráveis à vida.' },
            { year: '2021', title: 'Perseverance e Ingenuity', description: 'Perseverance explora a Cratera Jezero em busca de sinais de vida microbiana passada, coletando amostras que serão retornadas à Terra em futuras missões. Ingenuity, o helicóptero experimental, realizou o primeiro voo controlado em outro planeta, abrindo caminho para novas formas de exploração aérea.' },
        ];
        this.index = 0;
    }

    showSlide(i) {
        this.index = (i + this.slides.length) % this.slides.length;
    }

    render() {
        return html`

            <div class="slider-container">
                <div class="slides" style="transform: translateX(-${this.index * 50}%);">
                    ${this.slides.map(
                        slide => html`
                            <div class="slide">
                                <h2>${slide.year}</h2>
                                <h3>${slide.title}</h3>
                                <p>${slide.description}</p>
                            </div>
                        `
                    )}
                </div>

                <div class="navigation">
                    <button @click="${() => this.showSlide(this.index - 1)}">&#10094;</button>
                    <button @click="${() => this.showSlide(this.index + 1)}">&#10095;</button>
                </div>

                <div class="dots">
                    ${this.slides.map(
                        (_, i) => html`
                            <span
                                class="dot ${this.index === i ? 'active' : ''}"
                                @click="${() => this.showSlide(i)}"
                            ></span>
                        `
                    )}
                </div>
            </div>
        `;
    }
}

customElements.define('timeline-slider', TimelineSlider);
