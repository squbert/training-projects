'use strict';

const getElement = element => document.querySelector(element);

const firstPlayerElement = getElement('.player--0');
const firstPlayerScoreElement = getElement('#score--0');
const firstPlayerCurrentScoreElement = getElement('#current--0');
const secondPlayerElement = getElement('.player--1');
const secondPlayerScoreElement = getElement('#score--1');
const secondPlayerCurrentScoreElement = getElement('#current--1');
const diceElement = getElement('.dice');
const buttonNewGameElement = getElement('.btn--new');
const buttonRollElement = getElement('.btn--roll');
const buttonHoldElement = getElement('.btn--hold');

let currentScore;
let activePlayer;
let isPlay;
let totalScore;

const initGame = () => {
  diceElement.classList.add('hidden');
  firstPlayerScoreElement.textContent = 0;
  firstPlayerCurrentScoreElement.textContent = 0;
  secondPlayerScoreElement.textContent = 0;
  secondPlayerCurrentScoreElement.textContent = 0;
  totalScore = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  isPlay = true;
  firstPlayerElement.classList.remove('player--winner');
  secondPlayerElement.classList.remove('player--winner');
  firstPlayerElement.classList.remove('player--active');
  secondPlayerElement.classList.remove('player--active');
  firstPlayerElement.classList.add('player--active');
};

initGame();

const switchPlayer = () => {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  firstPlayerElement.classList.toggle('player--active');
  secondPlayerElement.classList.toggle('player--active');
};

buttonRollElement.addEventListener('click', () => {
  if (isPlay) {
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    diceElement.classList.remove('hidden');
    diceElement.src = `dice${randomNumber}.png`;
    if (randomNumber != 1) {
      currentScore += randomNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

buttonHoldElement.addEventListener('click', () => {
  if (isPlay) {
    totalScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];
    if (totalScore[activePlayer] >= 100) {
      isPlay = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
      diceElement.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

buttonNewGameElement.addEventListener('click', initGame);
