let score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Losses: 0,
    Ties: 0
}
let res = document.getElementById("Res");
let rockBtn = document.querySelector('.js-rock-btn');
let paperBtn = document.querySelector('.js-paper-btn');
let scissorsBtn = document.querySelector('.js-scissors-btn');
let autoPlayBtn = document.querySelector('.js-auto-play');
let resetBtn = document.querySelector('.js-reset-btn');
let resetWarn = document.querySelector('.reset-warn');
let result = '';
let auto = false;
let intervalID;

autoPlayBtn.addEventListener('click', () => { autoPlay(); });
resetBtn.addEventListener('click', () => { resetResults(); });
rockBtn.addEventListener('click', () => { setResult('rock'); });
paperBtn.addEventListener('click', () => setResult('paper'));
scissorsBtn.addEventListener('click', () => setResult('scissors'));
document.body.addEventListener('keydown', (event) => {
    if (event === 'a') { autoPlay(); }
    else if (event.key === 'r') { setResult('rock'); }
    else if (event.key === 'p') { setResult('paper'); }
    else if (event.key === 's') { setResult('scissors'); }
    else if (event.key === 'a') { autoPlay(); }
    else if (event.key === 'Backspace') {
        resetWarn.innerHTML = `
Are you sure you want to reset score? <button onclick="resetResults(); resetWarn.innerHTML='';">Yes</button>
 <button onclick="resetWarn.innerHTML=''">No</button>
`
    }
});
function resetResults() {
    pcMove = ''
    result = ''
    score = {
        Wins: 0,
        Losses: 0,
        Ties: 0
    }
    res.innerHTML = ` <br>
    Wins : ${score.Wins} 
          <br>
          Losses : ${score.Losses}
          <br>  
          Ties : ${score.Ties}`;
}
function autoPlay() {
    if (!auto) {
        autoPlayBtn.innerHTML = 'Stop playing';
        autoPlayBtn.classList.add('auto-red-btn');
        intervalID = setInterval(function setResult() {
            const pcMove = setPcMove();
            const userMove = setUserMove();

            if (userMove === 'rock') {
                if (pcMove === 'rock') { result = 'tie'; }
                else if (pcMove === 'paper') { result = 'you lost'; }
                else if (pcMove === 'scissors') { result = 'you won' }
            }
            else if (userMove === 'paper') {
                if (pcMove === 'rock') { result = 'you won'; }
                else if (pcMove === 'paper') { result = 'tie'; }
                else if (pcMove === 'scissors') { result = 'you lost' }
            }
            else if (userMove === 'scissors') {
                if (pcMove === 'rock') { result = 'you lost'; }
                else if (pcMove === 'paper') { result = 'you won'; }
                else if (pcMove === 'scissors') { result = 'tie' }
            }

            if (result === 'you won') {
                score.Wins += 1;
            }

            else if (result === 'you lost') {
                score.Losses += 1;
            }

            else if (result === 'tie') {
                score.Ties += 1;
            }
            res.innerHTML = `	<p class="results-css">${result}</p>
        
        <p class="moves-res">
            You
            <img class="moves-css" src="uploads/${userMove}-emoji.png" alt="">
            <img class="moves-css" src="uploads/${pcMove}-emoji.png" alt="">
            Computer
        </p>
        <p class="score-css">
            Wins: ${score.Wins} <br>
            Losses: ${score.Losses} <br>
            Ties: ${score.Ties}
            </p>`;
            let strScore = JSON.stringify(score);
            localStorage.setItem('score', strScore);
        }
            , 2000);
        auto = true;
    }
    else {
        autoPlayBtn.innerHTML = 'Auto play';
        autoPlayBtn.classList.remove('auto-red-btn');
        clearInterval(intervalID);
        auto = false;
    }
}

function setResult(user) {
    const pcMove = setPcMove();
    const userMove = user;

    if (userMove === 'rock') {
        if (pcMove === 'rock') { result = 'tie'; }
        else if (pcMove === 'paper') { result = 'you lost'; }
        else if (pcMove === 'scissors') { result = 'you won' }
    }
    else if (userMove === 'paper') {
        if (pcMove === 'rock') { result = 'you won'; }
        else if (pcMove === 'paper') { result = 'tie'; }
        else if (pcMove === 'scissors') { result = 'you lost' }
    }
    else if (userMove === 'scissors') {
        if (pcMove === 'rock') { result = 'you lost'; }
        else if (pcMove === 'paper') { result = 'you won'; }
        else if (pcMove === 'scissors') { result = 'tie' }
    }

    if (result === 'you won') {
        score.Wins += 1;
    }

    else if (result === 'you lost') {
        score.Losses += 1;
    }

    else if (result === 'tie') {
        score.Ties += 1;
    }
    res.innerHTML = `	<p class="results-css">${result}</p>
    
    <p class="moves-res">
        You
        <img class="moves-css" src="uploads/${userMove}-emoji.png" alt="">
        <img class="moves-css" src="uploads/${pcMove}-emoji.png" alt="">
        Computer
    </p>
    <p class="score-css">
        Wins: ${score.Wins} <br>
        Losses: ${score.Losses} <br>
        Ties: ${score.Ties}
        </p>`;
    let strScore = JSON.stringify(score);
    localStorage.setItem('score', strScore);
}
function setPcMove() {
    let pcMove = '';
    let randNum = '';
    randNum = Math.random();
    if (randNum >= 0 && randNum < 1 / 3) {
        pcMove = "rock";
    } else if (randNum >= 1 / 3 && randNum < 2 / 3) {
        pcMove = "paper";
    } else if (randNum >= 2 / 3 && randNum < 1) {
        pcMove = "scissors";
    }
    return pcMove;
}
function setUserMove() {
    let userMove = '';
    let randNum = '';
    randNum = Math.random();
    if (randNum >= 0 && randNum < 1 / 3) {
        userMove = "rock";
    } else if (randNum >= 1 / 3 && randNum < 2 / 3) {
        userMove = "paper";
    } else if (randNum >= 2 / 3 && randNum < 1) {
        userMove = "scissors";
    }
    return userMove;
}
