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
      transform: scale(1.08);
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
      transform: scale(1.2);
    }

    :host(:hover) .conteudo-card {
      opacity: 1;
    }

    .modal {
      display: none;
      position: fixed;
      z-index: 100;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0, 0, 0, 0.8);
      opacity: 0;
      transition: 0.3s ease-in-out;
    }

    .conteudo-modal {
      position: relative;
      color: #fff;
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      margin: auto;
      padding: 20px;
      width: 80%;
      max-width: 500px;
      border-radius: 25px;
      border: 1px solid #fff;
    }

    .fechar {
      position: absolute;
      right: 10px;
      top: 10px;
      color: #aaa;
      font-size: 28px;
      font-weight: bold;
      cursor: pointer;
    }

    .fechar:hover,
    .fechar:focus {
      text-decoration: none;
      cursor: pointer;
      color: #eee;
    }

    .modal[open] {
      display: flex;
      opacity: 1;
    }
  `;

  static properties = {
    image: { type: String },
    title: { type: String },
    description: { type: String },
    modalTitle1: { type: String },
    modalDescription1: { type: String },
    modalTitle2: { type: String },
    modalDescription2: { type: String },
    modalTitle3: { type: String },
    modalDescription3: { type: String },
    mostrarModal: { type: Boolean }
  };

  constructor() {
    super();
    this.image = '';
    this.title = 'Título';
    this.description = 'Descrição do card.';
    this.modalTitle1 = 'Título 1';
    this.modalDescription1 = 'Descrição 1';
    this.modalTitle2 = 'Título 2';
    this.modalDescription2 = 'Descrição 2';
    this.modalTitle3 = '';
    this.modalDescription3 = '';
    this.mostrarModal = false;
  }

  toggleModal() {
    this.mostrarModal = !this.mostrarModal;
  }

  render() {
    return html`
      <img src="${this.image}" alt="${this.title}" class="image-card" />
      <div class="conteudo-card">
        <h1 class="titulo-card">${this.title}</h1>
        <p class="paragrafo-card">${this.description}</p>
      </div>
      <div class="modal" ?open="${this.mostrarModal}">
        <div class="conteudo-modal">
          <span class="fechar" @click="${this.fecharModal}">&times;</span>
          <h1>${this.modalTitle1}</h1>
          <p>${this.modalDescription1}</p>
          <h1>${this.modalTitle2}</h1>
          <p>${this.modalDescription2}</p>
          <h1>${this.modalTitle3}</h1>
          <p>${this.modalDescription3}</p>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    this.addEventListener('click', () => this.toggleModal());
  }
}

customElements.define('rover-card', RoverCard);
