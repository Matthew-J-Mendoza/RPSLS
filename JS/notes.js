let thing = document.getElementById('thing');
let btn = document.getElementById('btn');
let player1Turn = false
let p1Choice;
let p2Choice;
let Opponent;
let opChoich = false


async function OneCallAPI(url){
   
    
    let OCA = await fetch(url);
    let ocatData = await OCA.text();

    //thing.innerHTML = url
    thing.innerHTML = ocatData
    
}

btn.addEventListener('click',function(){
    OneCallAPI('../pages/g.html');
    player1Turn = true
    console.log('Begin');
    Opponent = 'p2'
})
//How to access the api
async function RSPLS(url){
   
    
    let OCA = await fetch(url);
    let ocatData = await OCA.text();
}
//RSPLS('https://csa2020studentapi.azurewebsites.net/rpsls');
//---------------------------------------------------------
document.addEventListener('keydown', (event) => {
    if(player1Turn === true){
        console.log(event.key)
        switch(event.key){
            case 'a':
            p1Choice = 'rock'
            break;
            case 's':
            p1Choice = 'paper'
            break;
            case 'd':
            p1Choice = 'scissors'
            break;
            case 'f':
            p1Choice = 'lizard'
            break;
            case 'x':
            p1Choice = 'spock'
            break;
        }
        console.log(p1Choice)
        player1Turn = false
    } else if(opChoich){
        switch(Opponent){
            case "p2":
                switch(event.key){
                    case 'a':
                    p2Choice = 'rock'
                    break;
                    case 's':
                    p2Choice = 'paper'
                    break;
                    case 'd':
                    p2Choice = 'scissors'
                    break;
                    case 'f':
                    p2Choice = 'lizard'
                    break;
                    case 'x':
                    p2Choice = 'spock'
                    break;
                }
                switch(p2Choice){
                    case 'rock':
                    if(p1Choice == ''){

                    } else{
                        
                    }
                    break;
                    case 'paper':
                    if(p1Choice == ''){

                    } else{
                        
                    }
                    break;
                    case 'scissors':
                    if(p1Choice == ''){

                    } else{
                        
                    }
                    break;
                    case 'lizard':
                    if(p1Choice == ''){

                    } else{
                        
                    }
                    break;
                    default:
                    if(p1Choice == ''){

                    } else{
                        
                    }
                    break;
                }
            break;
            case 'CPU':
    
            break;
        }
    }
    
});





switch(event.key){
    case 'a':
        //Rock
    p1Choice = ['spock','paper'].slice()
    break;
    //paper
    case 's':
    p1Choice = ['lizard', 'scissors'].slice()
    break;
    case 'd':
        //scissors
    p1Choice = ['spock','rock']
    break;
    case 'f':
        //lizard
    p1Choice = ['scissors','rock'].slice()
    break;
    case 'x':
        //spock
    p1Choice = ['paper','lizard'].slice()
    break;
}