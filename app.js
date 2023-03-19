// // var player1 = true;
// // var player2 = false;
// // var back1 = document.querySelector("#player1");
// // var back2 = document.querySelector("#player2");
// // var onecscore = document.querySelector("#dice-1");
// // var twocscore = document.querySelector("#dice-2");
// // var onetscore = document.querySelector("#onetscore")
// // var twotscore = document.querySelector("#twotscore")
// // var hold = document.querySelector("#hold")
// // var rolldice = document.querySelector("#rolldice")
// // var imags = document.querySelector("#imags")
// // var newgame = document.querySelector("#newgame")

// // newgame.addEventListener("click" , () => {
// //     location.reload();
// // })


// // function first(){
// // rolldice.addEventListener('click', Rolldice)
// // function Rolldice(){
// //     var autotgenerate = Math.round(Math.random() * 5 ) + 1
// //     imags.classList.remove('hidden')
// //     imags.src = `./assets/${autotgenerate}.png`
// //     if (autotgenerate == 1 && player1 == true && player2 == false) {
// //         two()
// //         player1 = false;
// //         player2 = true;
// //         onecscore.textContent = 0;
// //     } else {
// //         onecscore.textContent = Number(onecscore.textContent) + autotgenerate
// //     }   
// // }

// // hold.addEventListener('click', holdHandler)


// // function holdHandler() {
// //     onetscore.textContent = Number(onecscore.textContent) + Number(onetscore.textContent)

// //     onecscore.textContent = 0

// //     if(Number(onetscore.textContent) >= 30) {
// //         alert("Player 1 wins")
// //     }
// // }
// // }


// // function two(){
// // rolldice.addEventListener('click', Rolldice)
// // function Rolldice(){
// //     var autotgenerate = Math.round(Math.random() * 5 ) + 1
// //     imags.classList.remove('hidden')
// //     imags.src = `./assets/${autotgenerate}.png`
// //     if (autotgenerate == 1 player2 == false && player1 == true) {
// //         twocscore.textContent = 0;
// //         first()
// //         player1 = true;
// //         player2 = false;
// //     } else {
// //         twocscore.textContent = Number(twocscore.textContent) + autotgenerate
// //     }   
// // }

// // hold.addEventListener('click', holdHandler)


// // function holdHandler() {
// //     twotscore.textContent = Number(twocscore.textContent) + Number(twotscore.textContent)

// //     twocscore.textContent = 0

// //     if(Number(twotscore.textContent) >= 30) {
// //         alert("Player 2 wins")
// //     }
// // }
// // }
// // // rolldice.addEventListener("click" , () firstplayer)
// // // function firstplayer(){
// // //     var autotgenerate = 
// // // }


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
const player1 = document.querySelector("#player1")
const player2 =  document.querySelector("#player2")
const active = document.querySelector('.active')
let activePlayer = 1; // Initialize active player to player 1
let currentScore = 0; // Initialize current score to 0

setTimeout(diceImage.src = "./Techno Kids 33.gif", 100)

// Function to switch active player
function switchPlayer() {
  // Reset current score and update UI
  currentScore = 0;
  if (activePlayer === 1) {
    player1CurrentScore.textContent = 0;
    activePlayer = 2;
    player2.classList.add('player1')
    player1.classList.add('player2')
  } else {
    player2CurrentScore.textContent = 0;
    activePlayer = 1;
    player1.currentScore.add('player1');
    player2.currentScore.add('player2');
  }
}

// Function to update current score and UI for active player
function rollDice() {
  // Generate random number between 1 and 6
  const roll = Math.floor(Math.random() * 6) + 1;
  // Update dice image and current score
  if (roll === 1) {
    setTimeout(diceImage.src = "./Techno Kids 33.gif", 100)
    diceImage.src = `./assets/${roll}.png`;
    setTimeout(diceImage.src = "./Techno Kids 33.gif", 100)
    // Switch to other player's turn if roll is 1
    switchPlayer();
  } else {
    // Update current score and UI
    diceImage.src = `./assets/${roll}.png`;
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

// // // const userbody = document.querySelector('body');
// // // const newgame = document.querySelector('#newgame');
// // // const hold = document.querySelector('#hold');
// // // const rolldice = document.querySelector('#rolldice');
// // // const player1tscore = document.querySelector('#onetscore');
// // // const player2tscore = document.querySelector('#twotscore');
// // // const player1cscore = document.querySelector('#dice-1');
// // // const player2cscore = document.querySelector('#dice-2');
// // // const diceimg = document.querySelector('#imags');

// // // newgame.addEventListener("click", ()=>{
// // //   location.reload();
// // // })

// // // rolldice.addEventListener("click", ()=> {
// // //   const currentplayer = true;

// // //   var automatic = Math.round(Math.random() * 5) + 1;
// // //   diceimg.src = `./assets/${automatic}.png`;

// // //   if(automatic == 1){
// // //     // console.log(automatic)
// // //     currentplayer === false;
// // //   }
// // //   else{
// // //     currentplayer === true;
// // //   }
// // //   if(currentplayer === true ){
// // //     // diceimg.src = `./assets/${automatic}.png`;
// // //     player1cscore.innerHTML = `${automatic + Number(player1cscore.innerHTML)}`;
// // //   }
// // //   else if(currentplayer === false){
// // //     player2cscore.innerHTML = `${automatic + Number(player2cscore.innerHTML)}`;
// // //   }
   
// // // })

// // // hold.addEventListener('click', holdHandler)

// // // function holdHandler() {
// // //     onetscore.textContent = Number(onecscore.textContent) + Number(onetscore.textContent)

// // //     onecscore.textContent = 0

// // //     if(Number(onetscore.textContent) >= 30) {
// // //         alert("Player 1 wins")
// // //     }
// // // }

// // Get elements from the DOM
// const diceImg = document.querySelector('.dice');
// const player1Score = document.querySelector('#onetscore');
// const player2Score = document.querySelector('#twotscore');
// const newGameBtn = document.querySelector('#newgame');
// const rollDiceBtn = document.querySelector('#rolldice');
// const holdBtn = document.querySelector('#hold');

// // Define variables to keep track of game state
// let currentPlayer = 1;
// let currentScore = 0;
// let player1TotalScore = 0;
// let player2TotalScore = 0;
// let gameOver = false;

// // Function to roll the dice and update the image and score
// function rollDice() {
//   if (gameOver) return;
  
//   const randomNum = Math.floor(Math.random() * 6) + 1;
//   diceImg.src = `./assets/${randomNum}.png`;
  
//   if (randomNum === 1) {
//     currentScore = 0;
//     if (currentPlayer === 1) {
//       currentPlayer = 2;
//       player1Score.textContent = '0';
//       document.querySelector('#player1').classList.remove('active');
//       document.querySelector('#player2').classList.add('active');
//     } else {
//       currentPlayer = 1;
//       player2Score.textContent = '0';
//       document.querySelector('#player2').classList.remove('active');
//       document.querySelector('#player1').classList.add('active');
//     }
//   } else {
//     currentScore += randomNum;
//     if (currentPlayer === 1) {
//       player1Score.textContent = currentScore;
//     } else {
//       player2Score.textContent = currentScore;
//     }
//   }
// }

// // Function to hold the current score and update the total score
// function hold() {
//   if (gameOver) return;
  
//   if (currentPlayer === 1) {
//     player1TotalScore += currentScore;
//     document.querySelector('#onetscore').textContent = player1TotalScore;
//   } else {
//     player2TotalScore += currentScore;
//     document.querySelector('#twotscore').textContent = player2TotalScore;
//   }
  
//   // Check if the game is over
//   if (player1TotalScore >= 100 || player2TotalScore >= 100) {
//     gameOver = true;
//     const winner = player1TotalScore >= 100 ? 'Player 1' : 'Player 2';
//     alert(`${winner} wins the game!`);
//     newGameBtn.disabled = false;
//     rollDiceBtn.disabled = true;
//     holdBtn.disabled = true;
//   } else {
//     currentScore = 0;
//     if (currentPlayer === 1) {
//       currentPlayer = 2;
//       player1Score.textContent = '0';
//       document.querySelector('#player1').classList.remove('active');
//       document.querySelector('#player2').classList.add('active');
//     } else {
//       currentPlayer = 1;
//       player2Score.textContent = '0';
//       document.querySelector('#player2').classList.remove('active');
//       document.querySelector('#player1').classList.add('active');
//     }
//   }
// }

// // Function to start a new game
// function newGame() {
//   currentPlayer = 1;
//   currentScore = 0;
//   player1TotalScore = 0;
//   player2TotalScore = 0;
//   player1Score.textContent = '0';
//   player2Score.textContent = '0';
//   diceImg.src = `./assets/1.png`;
//   gameOver = false;
//   newGameBtn.disabled = true;
//   rollDiceBtn.disabled = false;
//   holdBtn.disabled = false;
//   document.querySelector('#player1').classList.add('active');
//   document.querySelector('#player2').classList.remove('active');
