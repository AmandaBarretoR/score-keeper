const btnPlayer1 = document.querySelector("#player-1");
const btnPlayer2 = document.querySelector("#player-2");
const btnReset = document.querySelector("#reset");
var scorePlayer1 = 0;
var scorePlayer2 = 0;

btnPlayer1.addEventListener("click", function(){
    const score = document.querySelector("#score");
    scorePlayer1++;
    score.innerText = `${scorePlayer1} to ${scorePlayer2}`;
    playerButtons();
})

btnPlayer2.addEventListener("click", function(){
    const score = document.querySelector("#score");
    scorePlayer2++;
    score.innerText = `${scorePlayer1} to ${scorePlayer2}`;
    playerButtons();
})

btnReset.addEventListener("click", function(){
    const score = document.querySelector("#score");
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    score.innerText = "0 to 0";
    playerButtons();
})

// Função que desabilita os botões player1 e player 2
const playerButtons = () => {
    if(scorePlayer1 == document.querySelector("select").value || scorePlayer2 == document.querySelector("select").value){
        btnPlayer1.disabled = true;
        btnPlayer2.disabled = true;
    } else {
        btnPlayer1.disabled = false;
        btnPlayer2.disabled = false;
    }
    
}
