import { LitElement, html, css } from 'lit';

class QuizComponent extends LitElement {
  static properties = {
    questions: { type: Array },
    currentQuestionIndex: { type: Number },
    selectedAnswer: { type: Number },
    showFeedback: { type: Boolean }
  };

  static styles = css`
    :host {
      display: block;
      text-align: center;
      color: white;
      padding: 20px;
      border-radius: 10px;
      width: 1000px;
      margin: 0 auto;
      font-size: 1.5rem;
    }

    .question {
      margin-bottom: 20px;
      font-size: 1.2em;
    }

    .answers {
      display: flex;
      flex-direction: row;
      gap: 10px;
      justify-content: center;
    }

    .answer {
      padding: 10px;
      border: 2px solid white;
      border-radius: 5px;
      cursor: pointer;
      background-color: transparent;
      color: white;
      transition: background-color 0.3s, border-color 0.3s;
    }

    .answer:hover {
      background-color: #333;
    }

    .answer.correct {
      border-color: green;
      background-color: #004d00;
    }

    .answer.incorrect {
      border-color: red;
      background-color: #4d0000;
    }

    .navigation {
      display: flex;
      justify-content: center;
      margin: 20px;
      
    }

    .navigation button {
      background-color: rgba(0, 0, 0, 0);
      color: white;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s;
    }

    .navigation button:hover {
      background-color: #555;
    }

    .seta{
      display: flex;
      justify-content: center;
      height: 20px;
    }

  `;

  constructor() {
    super();
    this.questions = [
      {
        question: 'Quais foram as três sondas mais famosas lançadas pela NASA?',
        answers: ['Perseverance, Exploration e Mars I', 'Explorer, Curiosity e Perseverance', 'Curiosity, Space IV e Explorer'],
        correct: 1
      },
      {
        question: 'Em que ano a sonda Perseverance foi lançada?',
        answers: ['1998', '2020', '2021'],
        correct: 2
      },
      {
        question: 'O que é um desafio para a colonização de Marte?',
        answers: ['A falta de água e oxigênio', 'A falta de tecnologia para lançar satélites', 'A presença de vida extraterrestre'],
        correct: 0
      },
      {
        question: 'Quais minerais encontrados em Marte são essenciais para a agricultura e sustentabilidade?',
        answers: ['Ferro e níquel', 'Fósforo e nitrogênio', 'Platina e carbono'],
        correct: 1
      },
      {
        question: 'O que tem impulsionado as discussões sobre a colonização de outros corpos celestes?',
        answers: ['Superlotação futura da Terra', 'A busca por mais recursos naturais', 'A descoberta de novas tecnologias'],
        correct: 0
      },
      {
        question: 'Qual é o objetivo das missões de exploração espacial, como a da sonda Mars Curiosity Rover?',
        answers: ['Estudar a atmosfera da Terra', 'Explorar asteróides próximos', 'Descobrir sinais de vida em Marte'],
        correct: 2
      },
      {
        question: 'Por que Marte é considerado um dos principais alvos para a colonização humana?',
        answers: ['Porque é o planeta mais próximo da Terra', 'Por ter uma atmosfera rica em oxigênio', 'Por apresentar características semelhantes a da Terra'],
        correct: 2
      },
      {
        question: 'Qual é a principal evidência que sugere que Marte já teve água em estado líquido no passado?',
        answers: ['A presença de minerais raros', 'A descoberta de vales fluviais erodidos', 'A presença de tempestades de areia'],
        correct: 1
      },
      {
        question: 'Qual foi a descoberta significativa feita pelo Curiosity Rover em 2018?',
        answers: ['Moléculas orgânicas complexas preservadas em rochas', 'Indícios de um grande oceano subterrâneo', 'Presença de uma magnetosfera natural'],
        correct: 0
      },
      {
        question: '⁠Por que a robótica é importante nas missões de exploração espacial?',
        answers: ['Porque são mais baratos do que missões tripuladas', 'Porque os robôs podem sobreviver mais facilmente nas condições extremas do espaço', 'Porque permite a construção de colônias em outros planetas'],
        correct: 1
      },
      {
        question: 'O que é necessário para transformar Marte em um ambiente habitável para os seres humanos?',
        answers: ['A criação de uma atmosfera densa e oxigenada', 'A construção de habitats subterrâneos', 'A mudança da órbita de Marte'],
        correct: 0
      },
      {
        question: 'Qual é o maior obstáculo para a colonização de Marte atualmente?',
        answers: ['A falta de tecnologias para explorar outros planetas', 'O alto custo das missões espaciais', 'A pressão atmosférica extremamente baixa de Marte'],
        correct: 2
      }
    ];
    this.currentQuestionIndex = 0;
    this.selectedAnswer = null;
    this.showFeedback = false;
  }

  selectAnswer(index) {
    if (this.showFeedback) return;
    this.selectedAnswer = index;
    this.showFeedback = true;
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.resetState();
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.resetState();
    }
  }

  resetState() {
    this.selectedAnswer = null;
    this.showFeedback = false;
  }

  render() {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    return html`
      <div class="navigation">
        <button @click="${this.previousQuestion}" ?disabled="${this.currentQuestionIndex === 0}"><img src="src/assets/seta cima.svg" alt="" srcset="" class="seta"></button>
      </div>
      <div class="question">${currentQuestion.question}</div>
      <div class="answers">
        ${currentQuestion.answers.map((answer, index) => html`
          <div
            class="answer ${
              this.showFeedback
                ? index === currentQuestion.correct
                  ? 'correct'
                  : index === this.selectedAnswer
                  ? 'incorrect'
                  : ''
                : ''
            }"
            @click="${() => this.selectAnswer(index)}"
          >
            ${answer}
          </div>
        `)}
      </div>
      <div class="navigation">
        <button @click="${this.nextQuestion}" ?disabled="${this.currentQuestionIndex === this.questions.length - 1}"><img src="src/assets/seta.svg" alt="" srcset="" class="seta"></button>
      </div>
    `;
  }
}

customElements.define('quiz-component', QuizComponent);
