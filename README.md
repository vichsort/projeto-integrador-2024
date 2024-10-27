# Projeto Integrador
## Tecnologias usadas:
Vite, Lit e Tailwind <br>
Como fazer pra baixar tudo? <br>
No seu terminal, digite
```bash
npm install
```
o trabalho vai ser todo feito sozinho. <br>
dai para fazer funcionar, abra no terminal a pasta e insira
```bash
npm run dev
```

## Onde mexer:
- O index.html a nível base é a primeira página do site,
- Dentro do src, temos os componentes e o css (global)
- Dentro do src, em components temos os componentes com seus estilos e renderizações próprias (escopadas)

## Como foi feito:
(depois eu explico melhor)

```bash
npm create vite@latest ./ -- --template
```

escolhido: lit e javascript

```bash
npm install -d tailwindcss@latest postcss@latest autoprefixer@latest
```

```bash
npx tailwindcss init -p
```

em tailwind.config.js:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
