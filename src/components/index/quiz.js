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
        question: 'Pergunta 1',
        answers: ['Resposta 1', 'Resposta 2', 'Resposta 3'],
        correct: 2
      },
      {
        question: 'Pergunta 2',
        answers: ['Resposta A', 'Resposta B', 'Resposta C'],
        correct: 1
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
