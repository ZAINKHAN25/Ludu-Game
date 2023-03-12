// var player1 = true;
// var player2 = false;
// var back1 = document.querySelector("#player1");
// var back2 = document.querySelector("#player2");
// var onecscore = document.querySelector("#dice-1");
// var twocscore = document.querySelector("#dice-2");
// var onetscore = document.querySelector("#onetscore")
// var twotscore = document.querySelector("#twotscore")
// var hold = document.querySelector("#hold")
// var rolldice = document.querySelector("#rolldice")
// var imags = document.querySelector("#imags")
// var newgame = document.querySelector("#newgame")

// newgame.addEventListener("click" , () => {
//     location.reload();
// })


// function first(){
// rolldice.addEventListener('click', Rolldice)
// function Rolldice(){
//     var autotgenerate = Math.round(Math.random() * 5 ) + 1
//     imags.classList.remove('hidden')
//     imags.src = `./assets/${autotgenerate}.png`
//     if (autotgenerate == 1 && player1 == true && player2 == false) {
//         two()
//         player1 = false;
//         player2 = true;
//         onecscore.textContent = 0;
//     } else {
//         onecscore.textContent = Number(onecscore.textContent) + autotgenerate
//     }   
// }

// hold.addEventListener('click', holdHandler)


// function holdHandler() {
//     onetscore.textContent = Number(onecscore.textContent) + Number(onetscore.textContent)

//     onecscore.textContent = 0

//     if(Number(onetscore.textContent) >= 30) {
//         alert("Player 1 wins")
//     }
// }
// }


// function two(){
// rolldice.addEventListener('click', Rolldice)
// function Rolldice(){
//     var autotgenerate = Math.round(Math.random() * 5 ) + 1
//     imags.classList.remove('hidden')
//     imags.src = `./assets/${autotgenerate}.png`
//     if (autotgenerate == 1 player2 == false && player1 == true) {
//         twocscore.textContent = 0;
//         first()
//         player1 = true;
//         player2 = false;
//     } else {
//         twocscore.textContent = Number(twocscore.textContent) + autotgenerate
//     }   
// }

// hold.addEventListener('click', holdHandler)


// function holdHandler() {
//     twotscore.textContent = Number(twocscore.textContent) + Number(twotscore.textContent)

//     twocscore.textContent = 0

//     if(Number(twotscore.textContent) >= 30) {
//         alert("Player 2 wins")
//     }
// }
// }
// // rolldice.addEventListener("click" , () firstplayer)
// // function firstplayer(){
// //     var autotgenerate = 
// // }


// Define variables for game elements
var body = document.querySelector('body')
const player1Score = document.querySelector("#onetscore");
const player2Score = document.querySelector("#twotscore");
const player1CurrentScore = document.querySelector("#dice-1");
const player2CurrentScore = document.querySelector("#dice-2");
const rollButton = document.querySelector("#rolldice");
const holdButton = document.querySelector("#hold");
const resetButton = document.querySelector("#newgame");
const diceImage = document.querySelector("#imags");
const areyousure = document.querySelector("#areyousure");
const workingarea = document.querySelector("#workingarea")
const heading = document.querySelector("#heading")
const btn25 = document.querySelector("#btn25")

let activePlayer = 1; // Initialize active player to player 1
let currentScore = 0; // Initialize current score to 0

// Function to switch active player
function switchPlayer() {
  // Reset current score and update UI
  currentScore = 0;
  if (activePlayer === 1) {
    player1CurrentScore.textContent = 0;
    activePlayer = 2;
  } else {
    player2CurrentScore.textContent = 0;
    activePlayer = 1;
  }
}

// Function to update current score and UI for active player
function rollDice() {
  // Generate random number between 1 and 6
  const roll = Math.floor(Math.random() * 6) + 1;
  // Update dice image and current score
  diceImage.src = `./assets/${roll}.png`;
  if (roll === 1) {
    // Switch to other player's turn if roll is 1
    switchPlayer();
  } else {
    // Update current score and UI
    currentScore += roll;
    if (activePlayer === 1) {
      player1CurrentScore.textContent = currentScore;
    } else {
      player2CurrentScore.textContent = currentScore;
    }
  }
}

// Function to update total score and check for winner
function hold() {
  // Update total score and UI for active player
  if (activePlayer === 1) {
    player1Score.textContent = Number(player1Score.textContent) + currentScore;
  } else {
    player2Score.textContent = Number(player2Score.textContent) + currentScore;
  }
  // Check for winner
  if (Number(player1Score.textContent) >= 30) {
    alert("Player 1 wins!");
  } else if (Number(player2Score.textContent) >= 30) {
    alert("Player 2 wins!");
  } else {
    // Switch to other player's turn if no winner
    switchPlayer();
  }
}

// Event listeners for roll, hold, and reset buttons
rollButton.addEventListener("click", rollDice);
holdButton.addEventListener("click", hold);
resetButton.addEventListener("click", () => location.reload());

body.addEventListener('keydown', (e) => {
    if (e.key === "Escape"){     
            areyousure.classList.remove('hidden');
            workingarea.classList.remove('hidden')
            heading.classList.remove('hidden')
            btn25.classList.remove('hidden')
            location.reload();
    }
} )

function myfuction(){
    areyousure.classList.add('hidden');
    workingarea.classList.add('hidden')
    heading.classList.add('hidden')
    btn25.classList.add('hidden')
    location.reload();
}