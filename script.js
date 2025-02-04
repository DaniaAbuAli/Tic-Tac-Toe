//variables
const selectBox = document.querySelector(".select-box");
const buttonPlayers = document.querySelectorAll(".player");
const playersName = document.querySelector(".players-name");
const check = document.querySelectorAll(".check");
const playAgain = document.querySelector(".play-again");
const resetGame = document.querySelector(".reset-game");
const container = document.querySelector(".container");
const startGame = document.querySelector('input[value="Start Game"]');
const title = document.querySelector(".title");
let boxes = document.querySelectorAll(".box");
const x = document.querySelector('input[name="player X"]');
const o = document.querySelector('input[name="player O"]');
const pointOne = document.querySelector(".info .one p span");
const pointTwo = document.querySelector(".info .two p span");
const playerOne = document.querySelector(".info .one p");
const playerTwo = document.querySelector(".info .two p");

let players = {},
  game = true;
let playerOnePoints = 0,
  playerTwoPoints = 0;
let i = 0;

//hide select box and show the form
//Select the number of players
buttonPlayers.forEach((el) => {
  el.addEventListener("click", function () {
    selectBox.classList.remove("show");
    selectBox.classList.add("hide");
    if (el.className === "player two") {
      playersName.classList.remove("hide");
      playersName.classList.add("show");
      o.style.display = "block";
      startGame.style.marginTop = "-15px";
    } else if (el.className === "player one") {
      playersName.classList.remove("hide");
      playersName.classList.add("show");
      o.style.display = "none";
      console.log(playersName.querySelector("h2"));
      playersName.querySelector("h2").textContent = "Enter Player Name";
      startGame.style.marginTop = "-40px";
      players.player2 = `Robot`;
    }
  });
});

//hide form and show play area
// start playing
startGame.addEventListener("click", (e) => {
  e.preventDefault();
  players.player1 = x.value;
  console.log(players.player2);
  if (players.player2 === undefined) players.player2 = o.value;
  playersName.classList.remove("show");
  playersName.classList.add("hide");
  container.classList.remove("hide");
  container.classList.add("show");
  title.textContent = `${players.player1}'s turn`;
  playerOne.childNodes[1].textContent = `${players.player1}   : `;
  playerTwo.childNodes[1].textContent = `${players.player2}   : `;
  playTheGame();
});

// hide play area and back to select box
// If the player wants to return to the home page
resetGame.addEventListener("click", () => {
  container.classList.remove("show");
  container.classList.add("hide");
  selectBox.classList.remove("hide");
  selectBox.classList.add("show");
  (playerOnePoints = 0), (pointOne.textContent = 0);
  pointTwo.textContent = 0;
  playerTwoPoints = 0;
  x.value = "";
  o.value = "";
  players = {};
  clearBoard();
  playTheGame();
});
//If the player wants to play again with the same player he is playing with
playAgain.addEventListener("click", function () {
  title.textContent = `${players.player1}'s turn`;
  clearBoard();
  playTheGame();
});

function playTheGame() {
  game = true;
  boxes.forEach((box) => {
    let newBox = box.cloneNode(true);
    box.parentNode.replaceChild(newBox, box);
  });
  let newBoxes = document.querySelectorAll(".box");
  newBoxes.forEach((box) => {
    box.addEventListener("click", function () {
      if (game && box.innerHTML === "") {
        if (i % 2 === 0) {
          box.innerHTML = `<i class="fa-solid fa-x"></i>`;
          box.classList.add("player-1");
          title.textContent = `${players.player2}'s turn`;
          i++;
          if (checkWinner()) {
            game = false;
            return;
          }
          if (players.player2 === "Robot" && game) {
            setTimeout(playWithRobot, 500);
          }
        } else {
          box.innerHTML = `<i class="fa-solid fa-o"></i>`;
          box.classList.add("player-2");
          title.textContent = `${players.player1}'s turn`;
          i++;
          if (checkWinner()) game = false;
        }
      }
    });
  });
  boxes = newBoxes;
}

function checkWinner() {
  if (
    boxes[0].innerHTML === `<i class="fa-solid fa-x"></i>` &&
    boxes[1].innerHTML === `<i class="fa-solid fa-x"></i>` &&
    boxes[2].innerHTML === `<i class="fa-solid fa-x"></i>`
  ) {
    title.textContent = `${players.player1} won !`;
    playerOnePoints++;
    pointOne.textContent = playerOnePoints;
    return true;
  } else if (
    boxes[3].innerHTML === `<i class="fa-solid fa-x"></i>` &&
    boxes[4].innerHTML === `<i class="fa-solid fa-x"></i>` &&
    boxes[5].innerHTML === `<i class="fa-solid fa-x"></i>`
  ) {
    title.textContent = `${players.player1} won !`;
    playerOnePoints++;
    pointOne.textContent = playerOnePoints;
    return true;
  } else if (
    boxes[6].innerHTML === `<i class="fa-solid fa-x"></i>` &&
    boxes[7].innerHTML === `<i class="fa-solid fa-x"></i>` &&
    boxes[8].innerHTML === `<i class="fa-solid fa-x"></i>`
  ) {
    title.textContent = `${players.player1} won !`;
    playerOnePoints++;
    pointOne.textContent = playerOnePoints;
    return true;
  } else if (
    boxes[0].innerHTML === `<i class="fa-solid fa-x"></i>` &&
    boxes[3].innerHTML === `<i class="fa-solid fa-x"></i>` &&
    boxes[6].innerHTML === `<i class="fa-solid fa-x"></i>`
  ) {
    title.textContent = `${players.player1} won !`;
    playerOnePoints++;
    pointOne.textContent = playerOnePoints;
    return true;
  } else if (
    boxes[1].innerHTML === `<i class="fa-solid fa-x"></i>` &&
    boxes[4].innerHTML === `<i class="fa-solid fa-x"></i>` &&
    boxes[7].innerHTML === `<i class="fa-solid fa-x"></i>`
  ) {
    title.textContent = `${players.player1} won !`;
    playerOnePoints++;
    pointOne.textContent = playerOnePoints;
    return true;
  } else if (
    boxes[2].innerHTML === `<i class="fa-solid fa-x"></i>` &&
    boxes[5].innerHTML === `<i class="fa-solid fa-x"></i>` &&
    boxes[8].innerHTML === `<i class="fa-solid fa-x"></i>`
  ) {
    title.textContent = `${players.player1} won !`;
    playerOnePoints++;
    pointOne.textContent = playerOnePoints;
    return true;
  } else if (
    boxes[0].innerHTML === `<i class="fa-solid fa-x"></i>` &&
    boxes[4].innerHTML === `<i class="fa-solid fa-x"></i>` &&
    boxes[8].innerHTML === `<i class="fa-solid fa-x"></i>`
  ) {
    title.textContent = `${players.player1} won !`;
    playerOnePoints++;
    pointOne.textContent = playerOnePoints;
    return true;
  } else if (
    boxes[2].innerHTML === `<i class="fa-solid fa-x"></i>` &&
    boxes[4].innerHTML === `<i class="fa-solid fa-x"></i>` &&
    boxes[6].innerHTML === `<i class="fa-solid fa-x"></i>`
  ) {
    title.textContent = `${players.player1} won !`;
    playerOnePoints++;
    pointOne.textContent = playerOnePoints;
    return true;
  } else if (
    boxes[0].innerHTML === `<i class="fa-solid fa-o"></i>` &&
    boxes[1].innerHTML === `<i class="fa-solid fa-o"></i>` &&
    boxes[2].innerHTML === `<i class="fa-solid fa-o"></i>`
  ) {
    title.textContent = `${players.player2} won !`;
    playerTwoPoints++;
    pointTwo.textContent = playerTwoPoints;
    return true;
  } else if (
    boxes[3].innerHTML === `<i class="fa-solid fa-o"></i>` &&
    boxes[4].innerHTML === `<i class="fa-solid fa-o"></i>` &&
    boxes[5].innerHTML === `<i class="fa-solid fa-o"></i>`
  ) {
    title.textContent = `${players.player2} won !`;
    playerTwoPoints++;
    pointTwo.textContent = playerTwoPoints;
    return true;
  } else if (
    boxes[6].innerHTML === `<i class="fa-solid fa-o"></i>` &&
    boxes[7].innerHTML === `<i class="fa-solid fa-o"></i>` &&
    boxes[8].innerHTML === `<i class="fa-solid fa-o"></i>`
  ) {
    title.textContent = `${players.player2} won !`;
    playerTwoPoints++;
    pointTwo.textContent = playerTwoPoints;
    return true;
  } else if (
    boxes[0].innerHTML === `<i class="fa-solid fa-o"></i>` &&
    boxes[3].innerHTML === `<i class="fa-solid fa-o"></i>` &&
    boxes[6].innerHTML === `<i class="fa-solid fa-o"></i>`
  ) {
    title.textContent = `${players.player2} won !`;
    playerTwoPoints++;
    pointTwo.textContent = playerTwoPoints;
    return true;
  } else if (
    boxes[1].innerHTML === `<i class="fa-solid fa-o"></i>` &&
    boxes[4].innerHTML === `<i class="fa-solid fa-o"></i>` &&
    boxes[7].innerHTML === `<i class="fa-solid fa-o"></i>`
  ) {
    title.textContent = `${players.player2} won !`;
    playerTwoPoints++;
    pointTwo.textContent = playerTwoPoints;
    return true;
  } else if (
    boxes[2].innerHTML === `<i class="fa-solid fa-o"></i>` &&
    boxes[5].innerHTML === `<i class="fa-solid fa-o"></i>` &&
    boxes[8].innerHTML === `<i class="fa-solid fa-o"></i>`
  ) {
    title.textContent = `${players.player2} won !`;
    playerTwoPoints++;
    pointTwo.textContent = playerTwoPoints;
    return true;
  } else if (
    boxes[0].innerHTML === `<i class="fa-solid fa-o"></i>` &&
    boxes[4].innerHTML === `<i class="fa-solid fa-o"></i>` &&
    boxes[8].innerHTML === `<i class="fa-solid fa-o"></i>`
  ) {
    title.textContent = `${players.player2} won !`;
    playerTwoPoints++;
    pointTwo.textContent = playerTwoPoints;
    return true;
  } else if (
    boxes[2].innerHTML === `<i class="fa-solid fa-o"></i>` &&
    boxes[4].innerHTML === `<i class="fa-solid fa-o"></i>` &&
    boxes[6].innerHTML === `<i class="fa-solid fa-o"></i>`
  ) {
    title.textContent = `${players.player2} won !`;
    playerTwoPoints++;
    pointTwo.textContent = playerTwoPoints;
    return true;
  } else if (
    boxes[0].innerHTML !== `` &&
    boxes[1].innerHTML !== `` &&
    boxes[2].innerHTML !== `` &&
    boxes[3].innerHTML !== `` &&
    boxes[4].innerHTML !== `` &&
    boxes[5].innerHTML !== `` &&
    boxes[6].innerHTML !== `` &&
    boxes[7].innerHTML !== `` &&
    boxes[8].innerHTML !== ``
  ) {
    title.textContent = `It's a tie!`;
    game = false;
  }
}
function clearBoard() {
  i = 0;
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.classList.remove("player-1");
    box.classList.remove("player-2");
  });
}
function playWithRobot() {
  let emptyBoxes = Array.from(boxes).filter((box) => box.innerHTML === "");
  if (emptyBoxes.length > 0) {
    let randomBox = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
    randomBox.innerHTML = `<i class="fa-solid fa-o"></i>`;
    randomBox.classList.add("player-2");
    title.textContent = `${players.player1}'s turn`;
    i++;
    if (checkWinner()) game = false;
  }
}
