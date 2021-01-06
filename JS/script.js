//Global Variables=----------------------------------------------------
//Opponent
let playerBtn = document.getElementById('playerBtn');
let cpuBtn = document.getElementById('cpuBtn');
let Opponent;
//Mode
let scoreLimit = 0;
//Game
let inSession = false;
let p1Turn = false;
//Score
let p1Score = 0;
let opScore = 0;
//Choice
let p1Choice;
let opChoice;
//Page Injection-------------------------------------------------------

async function NextPage(url) {
    let OCA = await fetch(url);
    let ocatData = await OCA.text();
    thing.innerHTML = ocatData
}

//CPU API--------------------------------------------------------------
async function CPU(url) {
    let OCA = await fetch(url);
    let ocatData = await OCA.text();
}
//Menu Buttons---------------------------------------------------------
cpuBtn.addEventListener('click', function () {
    NextPage('');
    Opponent = 'cpu';
    Mode();
});
playerBtn.addEventListener('click', function () {
    NextPage('');
    Opponent = 'p2';
    Mode();
});
//Mode-------------------------------------------------------------
function Mode() {
    let Short = document.getElementById('')
    let Standard = document.getElementById('')
    let Extended = document.getElementById('')
    //1 win
    Short.addEventListener('click', function () {
        scoreLimit = 1;
        Game();
    })
    //3 out of 5
    Standard.addEventListener('click', function () {
        scoreLimit = 3;
        Game();
    })
    //4 out of 7
    Extended.addEventListener('click', function () {
        scoreLimit = 4;
        Game();
    })
}
//Game Controller------------------------------------------------------
function Game() {

    p1Score = 0;
    opScore = 0;
    p1Turn = true;
    inSession = true;
    NextPage('');
    let whosTurn = document.getElementById('');

    let Key1 = document.getElementById('Key1')
    let Key2 = document.getElementById('Key2')
    let Key3 = document.getElementById('Key3')
    let Key4 = document.getElementById('Key4')
    let Key5 = document.getElementById('Key5')

    // Note: Make this into one object (p1Score +'-'+opScore)
    let p1ScoreDisplay = document.getElementById('');
    let opScoreDisplay = document.getElementById('');
    //End Round----------------------------------------------
    function Judge() {
        switch (opChoich) {
            case '':
                switch (p1Choice) {
                    case '':
                        //P1 Loss
                        opScore++
                        opScoreDisplay.innerText = opScore;
                        break;
                    default:
                        //P1 Win
                        p1Score++
                        p1ScoreDisplay.innerText = p1Score;
                        break;
                    //Add other outcomes!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                }
                break;
        }
        if (p1Score === scoreLimit || opScore === scoreLimit) {
            inSession = false;
        }
    }
    //-----------------------Controler----------------------------------

    document.addEventListener('keydown', (event) => {
        if (inSession === true) {
            switch (p1Turn) {
                case true:

                    break;
                case false:
                    switch (Opponent) {
                        case 'p2':

                            break;
                        case 'cpu':

                            break;
                    }
                    break;
            }
            Judge();
        }
    });
}
//Back to main menu---------------------------------------------------
function mainMenu() {
    NextPage('');
    let playerBtn = document.getElementById('playerBtn');
    let cpuBtn = document.getElementById('cpuBtn');

    cpuBtn.addEventListener('click', function () {
        NextPage('');
        Opponent = 'cpu';
        Mode();
    });
    playerBtn.addEventListener('click', function () {
        NextPage('');
        Opponent = 'p2';
        Mode();
    });
}