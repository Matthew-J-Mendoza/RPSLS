let audio = new Audio('../audio/Music.mp3');
//Global Variables=----------------------------------------------------
//Opponent
let playerBtn = document.getElementById('playerBtn');
let cpuBtn = document.getElementById('cpuBtn');
let Opponent;
//Mode
let scoreLimit = 0;
let RoundCount = 1;
let RoundLimit = 0;
//Game
let inSession = false;
let p1Turn = false;
let p2Turn = false;
let winnerString = '';
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
    Opponent = 'CPU';
    Mode();
});
playerBtn.addEventListener('click', function () {
    Opponent = 'Player 2';
    Mode();
});
//Mode-------------------------------------------------------------
function Mode() {
    document.getElementById('opType').innerText = Opponent;
    NextPage('../pages/Mode.html');
    console.log(`Opponent is ${Opponent}`)
    //Note: Set time out for getting elments and eventListeners
    setTimeout(function () {
        let Short = document.getElementById('Short')
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
            RoundLimit = 5;
            Game();
        })
        //4 out of 7
        Extended.addEventListener('click', function () {
            scoreLimit = 4;
            RoundLimit = 7;
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
    NextPage('../pages/Game.html');
    setTimeout(function () {
        let whosTurn = document.getElementById('whosTurn');
        let resultsBox = document.getElementById('resultsBox')
        let opTag = document.getElementById('opTag')
        let p1Tag = document.getElementById('p1Tag')
        let p1Hand = document.getElementById('p1Hand');
        let opHand = document.getElementById('opHand');
        let Rounds = document.getElementById('Rounds');
        let roundResult = document.getElementById('roundResult')
        let Key1 = document.getElementById('Key1');
        let Key2 = document.getElementById('Key2');
        let Key3 = document.getElementById('Key3');
        let Key4 = document.getElementById('Key4');
        let Key5 = document.getElementById('Key5');
        let symbol = document.getElementById('symbol')
        let RoundFinish = document.getElementById('RoundFinish')
        // Note: Make this into one object (p1Score +'-'+opScore)
        let ScoreDisplay = document.getElementById('ScoreDisplay');
        Rounds.innerText = `Round ${RoundCount}/${RoundLimit}`
        if (scoreLimit === 1) {
            Rounds.innerText = `Until someone wins`
        }
    }, 500);
    //Post P1 turn

    function p1End() {
        p1Turn = false;

    }
    //End Round----------------------------------------------
    function Keys(k1, k2, k3, k4, k5) {
        Key1.innerText = k1
        Key2.innerText = k2
        Key3.innerText = k3
        Key4.innerText = k4
        Key5.innerText = k5
    }
    function chosenHand() {
        switch (p1Choice[0]) {
            case 'rock':
                p1Hand.className = 'far fa-hand-rock text-white'
                break;
            case 'paper':
                p1Hand.className = 'far fa-hand-paper text-white'
                break;
            case 'scissors':
                p1Hand.className = 'far fa-hand-scissors text-white'
                break;
            case 'lizard':
                p1Hand.className = 'far fa-hand-lizard text-white'
                break;
            case 'spock':
                p1Hand.className = 'far fa-hand-spock text-white'
                break;
        }
        switch (opChoich) {
            case 'rock':
                opHand.className = 'far fa-hand-rock text-white'
                break;
            case 'paper':
                opHand.className = 'far fa-hand-paper text-white'
                break;
            case 'scissors':
                opHand.className = 'far fa-hand-scissors text-white'
                break;
            case 'lizard':
                opHand.className = 'far fa-hand-lizard text-white'
                break;
            case 'spock':
                opHand.className = 'far fa-hand-spock text-white'
                break;
        }
    }
    function ResultDipslay() {
        chosenHand()
        opTag.innerText = Opponent;
        resultsBox.classList.add("results")
        p1Tag.innerText = 'Player 1'
        ScoreDisplay.innerText = `${p1Score} - ${opScore}`
        if (scoreLimit > 1) {
            if(RoundCount != RoundLimit){
                RoundCount++
                p1Turn = true
            }else{
                inSession = false;
            }
            Rounds.innerText = `Round ${RoundCount}/${RoundLimit}`
        }

    }
    function Judge() {
        if (p1Choice[1].includes(opChoich)) {
            roundResult.innerText = `${Opponent} beats Player 1`;
            symbol.innerText ='<'
            opScore += 1;
        } else if (p1Choice[0] === opChoich) {
            roundResult.innerText = 'Tie';
            symbol.innerText = '='
        } else {
            roundResult.innerText = `Player 1 beats ${Opponent}`;
            symbol.innerText = '>'
            p1Score += 1;
        }
        whosTurn.innerText = `Player 1's Turn..`
        
        ResultDipslay()

        if (p1Score === scoreLimit || opScore === scoreLimit || RoundCount === RoundLimit) {
            inSession = false;
            //p1Turn = false
            console.log('Game is done')
            if(p1Score > opScore){
                winnerString = 'Player 1'
            } else{
                winnerString = Opponent
            }
            RoundFinish.innerText = 'Game has ended!'
            setTimeout(function () {
                endScreen();
            }, 5000)
        } else{
            RoundFinish.innerText = 'Next Round';
            setTimeout(function(){
                RoundFinish.innerText = ''
            },2000)
        }
    }
    //-----------------------Controler----------------------------------

    document.addEventListener('keydown', function (event) {
        if (p1Turn === true && inSession === true) {
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
                    whosTurn.innerText = `${Opponent}'s Turn..`
                if (Opponent === 'CPU') {
                    console.log('CPU turn');
                    CPU('https://csa2020studentapi.azurewebsites.net/rpsls');
                    setTimeout(function () {
                        Judge()
                        console.log('CPU chose: ' + opChoich)
                    }, 2000);
                } else {
                    Keys('J', 'K', 'L', ';', '/')
                    p2Turn = true

                }
            } else {
                console.log('Invalid Input')
            }
        } else if (Opponent === 'Player 2' && inSession === true) {
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
                Keys('A', 'S', 'D', 'F', 'Z')
                Judge();
                p2Turn = false
            } else {
                console.log('Invalid Input')
            }
        }
    });
}

//----------endGame-------

function endScreen(){
    NextPage('../pages/EndScreen.html');
    setTimeout(function(){
        let finalScore = document.getElementById('finalScore');
        let refresh = document.getElementById('refresh');
        let winner = document.getElementById('winner');
        let winOrTie = document.getElementById('winOrTie')

        if(p1Score === opScore){
            winOrTie.innerText = 'Tie'
        } else{
            winOrTie.innerText = 'Is the winner'
            winner.innerText = winnerString
        }
        finalScore.innerText = `${p1Score} - ${opScore}`
        refresh.addEventListener('click',function(){
            location.reload();
        })
    },500)
}