import { LitElement, html, css } from 'lit';

export class RoverCard extends LitElement {
  static styles = css`
    :host {
      position: relative;
        min-width: 300px; 
        max-width: 300px;
        overflow: hidden;
        border-radius: 70px;
        cursor: pointer;
        padding: 10px;
    }

    .image-card {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.5s all ease-in-out;
    }

    .conteudo-card {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.7);
      opacity: 0;
      transition: 0.5s all ease-in-out;
    }

    .titulo-card {
      color: white;
      font-size: 2rem;
      font-weight: bold;
      text-align: center;
      margin-bottom: 1rem;
    }

    .paragrafo-card {
      color: white;
      font-size: 1.2rem;
      text-align: center;
      margin: 0 1rem;
    }

    :host(:hover) .image-card {
      filter: blur(5px);
      transform: scale(1.1);
    }

    :host(:hover) .conteudo-card {
      opacity: 1;
    }
  `;

  static properties = {
    image: { type: String },
    title: { type: String },
    description: { type: String },
  };

  constructor() {
    super();
    this.image = '';
    this.title = 'Título';
    this.description = 'Descrição do card.';
  }

  render() {
    return html`
      <img src="${this.image}" alt="${this.title}" class="image-card" />
      <div class="conteudo-card">
        <h1 class="titulo-card">${this.title}</h1>
        <p class="paragrafo-card">${this.description}</p>
      </div>
    `;
  }
}

customElements.define('rover-card', RoverCard);
