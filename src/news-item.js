import { LitElement, html, css } from 'lit';

class NewsItem extends LitElement {
  static properties = {
    title: { type: String },
    description: { type: String },
    date: { type: String },
    image: { type: String },
    tag: { type: String },
    timeAgo: { type: String },
  };

  static styles = css`
    :host {
      display: block;
      background: #000000;
      color: #fff;
      overflow: hidden;
      margin-bottom: 16px;
    }

    .container {
      display: flex;
      flex-direction: row;
    }

    .image {
      width: 40%;
      object-fit: cover;
      border-radius: 25px;
    }

    .content {
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 1rem;
    }

    .tag {
      font-size: 0.8em;
      color: #bbb;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .title {
      font-size: 1.8em;
      font-weight: bold;
      margin: 0 0 8px;
    }

    .description {
      font-size: 1.3em;
      line-height: 1.5;
      margin: 0 0 16px;
      color: #ccc;
    }

    .date {
      font-size: 0.9em;
      color: #bbb;
      align-self: flex-end;
    }
  `;

  render() {
    return html`
      <div class="container">
        <img class="image" src="${this.image}" alt="${this.title}" />
        <div class="content">
          <div>
            <div class="tag">${this.tag}</div>
            <div class="title">${this.title}</div>
            <div class="description">${this.description}</div>
          </div>
          <div class="date">há ${this.timeAgo} dias</div>
        </div>
      </div>
    `;
  }
}

customElements.define('news-item', NewsItem);
