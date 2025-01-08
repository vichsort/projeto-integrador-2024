import { LitElement, html, css } from 'lit';

class Carrossel extends LitElement {
  static styles = css`
    .carrossel {
      display: flex;
      overflow: hidden;
      width: 300px;
    }
    .carrossel img {
      min-width: 100%;
      transition: transform 0.5s ease;
    }
    .botoes {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
    }
  `;

  static properties = {
    imagens: { type: Array },
    indiceAtual: { type: Number }
  };

  constructor() {
    super();
    this.imagens = [
      'https://via.placeholder.com/300?text=Imagem+1',
      'https://via.placeholder.com/300?text=Imagem+2',
      'https://via.placeholder.com/300?text=Imagem+3'
    ];
    this.indiceAtual = 0;
  }

  proximaImagem() {
    this.indiceAtual = (this.indiceAtual + 1) % this.imagens.length;
  }

  imagemAnterior() {
    this.indiceAtual = (this.indiceAtual - 1 + this.imagens.length) % this.imagens.length;
  }

  render() {
    return html`
      <div class="carrossel">
        ${this.imagens.map((img, index) => html`
          <img src="${img}" style="transform: translateX(${(index - this.indiceAtual) * 100}%);">
        `)}
      </div>
      <div class="botoes">
        <button @click="${this.imagemAnterior}">Anterior</button>
        <button @click="${this.proximaImagem}">Próxima</button>
      </div>
    `;
  }
}

customElements.define('carrossel', Carrossel);
