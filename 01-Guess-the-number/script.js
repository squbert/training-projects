'use strict';

const getQuerySelector = element => document.querySelector(element);
const buttonChecked = getQuerySelector('.check');
const inputNumber = getQuerySelector('.number-input');
const buttonAgain = getQuerySelector('.again');
const guessMessage = getQuerySelector('.guess-message');
const question = getQuerySelector('.question');
const body = getQuerySelector('body');
const scorePlayer = getQuerySelector('.score');
const highScore = getQuerySelector('.high-score');

const getGuessMessage = message => (guessMessage.textContent = message);
const getPlayerScore = value => (scorePlayer.textContent = value);
const getQuestionNumber = value => (question.textContent = value);
const getRandomNumber = () => Math.trunc(Math.random() * 20) + 1;

let secretNumber = getRandomNumber();
let score = 20;
let bestScore = 0;

buttonChecked.addEventListener('click', () => {
  const guestNumber = Number(inputNumber.value);

  if (!guestNumber) {
    getGuessMessage('Введите число!');
  } else if (guestNumber === secretNumber) {
    getGuessMessage('Правильно!');
    body.style.backgroundColor = 'rgb(9, 250, 21)';
    getQuestionNumber(secretNumber);
    question.style.fontSize = '5rem';

    if (score > bestScore) {
      bestScore = score;
      highScore.textContent = bestScore;
    }
  } else if (guestNumber !== secretNumber) {
    getGuessMessage(
      guestNumber > secretNumber ? 'Слишком много' : 'Слишком мало'
    );
    score--;
    getPlayerScore(score);
  }

  if (score <= 0) {
    getGuessMessage('ИГРА ОКОНЧЕНА!');
    getPlayerScore(0);
  }
});

buttonAgain.addEventListener('click', () => {
  score = 20;
  secretNumber = getRandomNumber();
  getPlayerScore(score);
  body.style.backgroundColor = 'black';
  getQuestionNumber('???');
  getGuessMessage('Начни угадывать!');
  question.style.fontSize = '4rem';
  inputNumber.value = '';
});
