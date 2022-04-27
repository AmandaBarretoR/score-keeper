const btnP1 = document.querySelector("#p1");
const btnP2 = document.querySelector("#p2");
const btnReset = document.querySelector("#reset");
const spanP1 = document.querySelector("#scoreP1");
const spanP2 = document.querySelector("#scoreP2");
const playTo = document.querySelector("#playTo");

let maxScore = document.querySelector("#playTo").value;
scoreP1 = 0;
scoreP2 = 0;

btnP1.addEventListener("click", function(){
    scoreP1++;
    spanP1.innerText = `${scoreP1}`;
    spanP2.innerText = `${scoreP2}`;
    playerButtons();
    
})

btnP2.addEventListener("click", function(){
    scoreP2++;
    spanP1.innerText = `${scoreP1}`;
    spanP2.innerText = `${scoreP2}`;
    playerButtons();
})

btnReset.addEventListener("click", function(){
    resetGame();
    playerButtons();
})

playTo.addEventListener("change", function(){
    maxScore = this.value;
    playerButtons();
    resetGame();
})

const resetGame = () => {
    scoreP1 = 0;
    scoreP2 = 0;
    spanP1.innerText = `${scoreP1}`;
    spanP2.innerText = `${scoreP2}`;
}

const playerButtons = () => {
    if(scoreP1 == maxScore){
        btnP1.disabled = true;
        btnP2.disabled = true;
        spanP1.classList.add('winner');
        spanP2.classList.add('loser');
    } else if(scoreP2 == maxScore){
        btnP1.disabled = true;
        btnP2.disabled = true;
        spanP1.classList.add('winner');
        spanP2.classList.add('loser');
    } else {
        btnP1.disabled = false;
        btnP2.disabled = false;
        spanP1.classList.remove('winner','loser');
        spanP2.classList.remove('winner','loser');
    }
}

