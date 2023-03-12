var player1 = true;
var player2 = false;
var back1 = document.querySelector("#player1");
var back2 = document.querySelector("#player2");
var onecscore = document.querySelector("#dice-1");
var twocscore = document.querySelector("#dice-2");
var onetscore = document.querySelector("#onetscore")
var twotscore = document.querySelector("#twotscore")
var hold = document.querySelector("#hold")
var rolldice = document.querySelector("#rolldice")
var imags = document.querySelector("#imags")
var newgame = document.querySelector("#newgame")

newgame.addEventListener("click" , () => {
    location.reload();
})

rolldice.addEventListener("click" , () firstplayer)
function firstplayer(){
    var autotgenerate = 
}


// rolldice.addEventListener('click', Rolldice)
// function Rolldice(){
//     var autotgenerate = Math.round(Math.random() * 5 ) + 1
//     imags.classList.remove('hidden')
//     imags.src = `./assets/${autotgenerate}.png`
//     if (autotgenerate == 1) {
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



// rolldice.addEventListener('click', Rolldice)
// function Rolldice(){
//     var autotgenerate = Math.round(Math.random() * 5 ) + 1
//     imags.classList.remove('hidden')
//     imags.src = `./assets/${autotgenerate}.png`
//     if (autotgenerate == 1) {
//         twocscore.textContent = 0;
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