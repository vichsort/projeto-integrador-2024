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
Iremos usar um recurso do vite para criar um projeto básico onde vamos usar o LitElement.

```bash
npm create vite@latest ./ -- --template
```

Nesse processo, escolhemos as ferramentas que vamos usar no projeto, usando o Lit e o Javascript. Mas, ainda vamos usar um framework adicional que precisamos instalar: o tailwind. Para isso, basta fazer o seguinte:

```bash
npm install -d tailwindcss@latest postcss@latest autoprefixer@latest
```

Criaremos então um arquivo de configuração com o comando:
```bash
npx tailwindcss init -p
```

E em tailwind.config.js alteraremos os conteúdos dentro desse arquivo de configuração para fazer o lookout por arquivos dentro da pasta src:

```javascript
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

Agora, com isso feito, podemos usar qualquer elemento (em react, lit, etc.) para produzir o site com auxilio do tailwindcss.