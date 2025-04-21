let score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Losses: 0,
    Ties: 0
}
let res = document.getElementById("Res");
let result = '';
let auto = false;
let intervalID;
let autoPlayBtn = document.querySelector('.auto-btn');

function autoPlay() {
    if (!auto) {
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
            , 3000);
        auto = true;
        autoPlayBtn.classList.add('auto-btn-on');
        autoPlayBtn.innerText = 'Stop';
    }
    else {
        clearInterval(intervalID);
        auto = false;
        autoPlayBtn.classList.remove('auto-btn-on');
        autoPlayBtn.innerText = 'Auto Play';
    }
}

function setResult(usermove) {
    const pcMove = setPcMove();
    const userMove = usermove;

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
