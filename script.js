
let countRound = prompt("What's your  number of rounds?");
console.log(countRound);
let countEl = 3;
let val;
let isWinnGamer = false;
let curRound = 0;
let countGamer = 0;
let countComp = 0;

function btnClick(event){
    val = event.target.value;
    alert('You chose' + message(val));
    determineWinner();
}

function message(num) {
    let message = '';
    if(num == 1) message = ' stoun';
    else if (num == 2) message = ' scissors';
    else if (num == 3) message = ' papier';
    return message; 
}

function rulesGame(numGamer, numComp){
    if (numGamer == 1 && numComp != 2) isWinnGamer = true;
    else if (numGamer == 2 && numComp != 1) isWinnGamer = true;
    else if (numGamer == 3 && numComp != 1) isWinnGamer = true;
    else if (numGamer == numComp) isWinnGamer = false;
    return isWinnGamer;
}



function determineWinner() {
    let choiceComp = Math.floor(Math.random() * countEl) + 1;
    alert('The computer chose' + message(choiceComp));
    isWinnGamer = rulesGame(choiceComp, val);
    if (choiceComp == val) {
        alert('The round is a draw');
    } else {
        if (isWinnGamer) {
            countGamer += 1;
            alert('You win!')
        } else {
            countComp += 1;
            alert('Computer win!')
        }
    }
    countRound -= 1;
    document.querySelector('.gamer').textContent = countGamer;
    document.querySelector('.comp').textContent = countComp;
    if (countRound > 0) {
        alert('Please make a choice');
    } else {
        alert('Game over');
        if(countComp > countGamer) alert ('The computer won the game!')
        else alert ('You won the game!')
    }
}

let btn = document.querySelectorAll('button');
for (let i = 0; i< btn.length; i++) {
    btn[i].addEventListener('click', btnClick);
}

