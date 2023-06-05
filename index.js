"use strict";
const roll = document.querySelector("#roll");
const hold = document.querySelector("#hold");
const newGame = document.querySelector("#newgame");
const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const playerOneScore = document.querySelector(".forone");
const playerTwoScore = document.querySelector(".fortwo");
let totalScoreForP1 = document.querySelector(".totalscoreForP1");
let totalScoreForP2 = document.querySelector(".totalscoreForP2");
let sum1 = 0;
let sum2 = 0;
let random;
let switchPlayer = 0;
const target = function () {
  if (sum1 || sum2 >= 20) {
    if (sum1 >= 20) {
      totalScoreForP1.textContent = `🎇Player 1 Win The Game`;
    } else if (sum2 >= 20) {
      totalScoreForP2.textContent = `🎇Player 2 Win The Game`;
    }
  }
};
const reset = function () {
  sum1 = 0;
  sum2 = 0;
  totalScoreForP1.textContent = sum1;
  totalScoreForP2.textContent = sum2;
};
const updadeplayer1 = function () {
  totalScoreForP1.textContent = sum1;
  playerOneScore.textContent = "";
  heading1.classList.remove("oposite");
  target();
};

const updatePlayer2 = function () {
  totalScoreForP2.textContent = sum2;
  playerTwoScore.textContent = "";
  heading2.classList.remove("oposite");
  target();
};

const gameLogic = function () {
  if (switchPlayer === 0) {
    heading1.classList.add("oposite");
    random = Math.floor(Math.random() * 6 + 1);
    playerOneScore.textContent = random;
    sum1 = sum1 + random;
    switchPlayer++;
    hold.addEventListener("click", updadeplayer1);
  } else if (switchPlayer === 1) {
    heading2.classList.add("oposite");
    random = Math.floor(Math.random() * 6 + 1);
    playerTwoScore.textContent = random;
    sum2 = sum2 + random;
    switchPlayer--;
    hold.addEventListener("click", updatePlayer2);
  }
};

roll.addEventListener("click", gameLogic);
newGame.addEventListener("click", reset);
