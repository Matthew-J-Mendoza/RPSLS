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
let p2Turn = false;

//Score
let p1Score = 0;
let opScore = 0;
//Choice
let p1Choice = []
let opChoice;
//Acceptable inputs
const Player1Controller = ['a', 's', 'd', 'f', 'z']
const Player2Controller = ['j', 'k', 'l', ';', '/']

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
    opChoich = ocatData.toLocaleLowerCase();
}
//Menu Buttons---------------------------------------------------------
cpuBtn.addEventListener('click', function () {
    Opponent = 'cpu';
    Mode();
});
playerBtn.addEventListener('click', function () {
    Opponent = 'p2';
    Mode();
});
//Mode-------------------------------------------------------------
function Mode() {
    NextPage('../pages/Mode.html');
    console.log(`Opponent is ${Opponent}`)
    //Note: Set time out for getting elments and eventListeners
    setTimeout(function () {
        let Short = document.getElementById('Short2')
        let Standard = document.getElementById('Standard')
        let Extended = document.getElementById('Extended')

        //1 win
        Short.addEventListener('click', function () {
            scoreLimit = 1;
            console.log('it works')
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
    }, 500);
}
//Game Controller------------------------------------------------------
function Game() {
    console.log(`Players need a score of: ${scoreLimit} to win`)
    console.log(`score: ${p1Score} - ${opScore}`)
    p1Turn = true;
    inSession = true;
    NextPage('../pages/g.html');
    setTimeout(function () {
        let whosTurn = document.getElementById('');

        let Key1 = document.getElementById('Key1');
        let Key2 = document.getElementById('Key2');
        let Key3 = document.getElementById('Key3');
        let Key4 = document.getElementById('Key4');
        let Key5 = document.getElementById('Key5');
        // Note: Make this into one object (p1Score +'-'+opScore)
        let p1ScoreDisplay = document.getElementById('');
        let opScoreDisplay = document.getElementById('');
    }, 500);
    //Post P1 turn

    function p1End() {
        p1Turn = false;

    }
    //End Round----------------------------------------------
    function Judge() {
        if (p1Choice[1].includes(opChoich)) {
            console.log('OP Wins')
            opScore += 1;
        } else if (p1Choice[0] === opChoich) {
            console.log('tie!!!!!!!!!!!!!!!!!!!!!!!')
        } else {
            console.log('P1 Wins')
            p1Score += 1;
        }
        p1Turn = true;
        console.log(`score: ${p1Score} - ${opScore}`)
        if (p1Score === scoreLimit || opScore === scoreLimit) {
            inSession = false;
            p1Turn = false
            console.log('Game is done')
            setTimeout(function () {
                location.reload();
            }, 5000)
        }
    }
    //-----------------------Controler----------------------------------

    thing.addEventListener('keydown', function (event) {
        if (p1Turn === true) {
            console.log(event.key)
            if (Player1Controller.includes(event.key)) {
                switch (event.key) {
                    case 'a':
                        //Rock
                        console.log(`player 1 chose: Rock`)
                        p1Choice = ['rock', ['spock', 'paper']].slice()
                        break;
                    case 's':
                        //paper
                        console.log(`player 1 chose: paper`)
                        p1Choice = ['paper', ['lizard', 'scissors']].slice()
                        break;
                    case 'd':
                        //scissors
                        console.log(`player 1 chose: scissors`)
                        p1Choice = ['scissors', ['spock', 'rock']].slice()
                        break;
                    case 'f':
                        //lizard
                        console.log(`player 1 chose: lizard`)
                        p1Choice = ['lizard', ['scissors', 'rock']].slice()
                        break;
                    case 'z':
                        //spock
                        console.log(`player 1 chose: spock`)
                        p1Choice = ['spock', ['paper', 'lizard']].slice()
                        break;
                }
                p1Turn = false
                if (Opponent === 'cpu') {
                    console.log('CPU turn');
                    CPU('https://csa2020studentapi.azurewebsites.net/rpsls');
                    setTimeout(function () {
                        Judge()
                        console.log('CPU chose: ' + opChoich)
                    }, 2000);
                } else{
                    p2Turn = true
                }
            } else {
                console.log('Invalid Input')
            }
        } else if(Opponent === 'p2'){
            if (Player2Controller.includes(event.key)) {
                switch (event.key) {
                    case 'j':
                        opChoich = 'rock'
                        break;
                    case 'k':
                        opChoich = 'paper'
                        break;
                    case 'l':
                        opChoich = 'scissors'
                        break;
                    case ';':
                        opChoich = 'lizard'
                        break;
                    case '/':
                        opChoich = 'spock'
                        break;
                }
                Judge();
                p2Turn = false
        } else{
            console.log('Invalid Input')
        }
    }
    });
}