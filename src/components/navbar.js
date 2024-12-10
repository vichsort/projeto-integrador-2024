import { LitElement, css, html } from 'lit'

export class appNav extends LitElement {
  render() {
    return html`
      <nav>
        <a href="#landing"><img src="logo.svg" alt="Logo" class="logo"></a>
        <div class="items">
          <a href="#conhecaMarte">Conheça Marte</a>
          |
          <a href="#rovers">Rovers</a>
          |
          <a href="#exploracoes">Explorações Espaciais</a>
        </div>
      </nav>
    `
  }

  static get styles() {
    return css`
      nav {
        display: flex;
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
        color: white;
        width: 100dvw;
        padding: 2rem 8rem;
        align-items: center;
        position: fixed;  
        top: 0;
        left: 0;
        z-index: 1000;
      }

      .items {
          display: inline-flex;
          margin-left: auto;
          font-size: larger;
      }

      .items item a:hover {
          transition: 0.1s ease;
          font-weight: bold;
      }

      .logo {
          width: 60px;
          height: 60px;
          transition: 0.2s ease;
      }

      .logo:hover {
          width: 63px;
          height: 63px;
      }

    `
  }
}