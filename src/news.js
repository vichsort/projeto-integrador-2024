import './news-item.js';

const app = document.querySelector('#app');
app.innerHTML = `
  <div>

    <news-item
      tag="Tecnologia"
      title="Exploração Espacial"
      description="A SpaceX lança nova missão revolucionária para Marte."
      date="2024-12-20"
      timeAgo="3"
      image="https://via.placeholder.com/600x300"
    ></news-item>
    <news-item
      tag="Ciência"
      title="Descoberta de Nova Partícula"
      description="Cientistas descobrem uma nova partícula no acelerador de partículas."
      date="2024-12-18"
      timeAgo="5"
      image="https://via.placeholder.com/600x300"
    ></news-item>
  </div>
`;
