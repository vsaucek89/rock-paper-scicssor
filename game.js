let playerScore = 0
let compScore = 0
game()






function game(){
    for(let i = 0;i<5;i++){
        let playerChoice = prompt("rock, paper, or scissors?")
        let computerChoice = computerPlay()
        console.log(play(playerChoice,computerChoice))
        console.log(playerScore+"-"+compScore)
    }
    if(playerScore == compScore){
        console.log("the game is a tie.")
    }else if(playerScore > compScore){
        console.log("you win the game!!!!")
    }else{
        console.log("you lose the game")
    }
}

function computerPlay() {
    let compNum = Math.random()*3 
    if(0 <= compNum && compNum < 1){
        return "rock"
    }else if(1 <= compNum && compNum < 2){
        return "paper"
    }else{
        return "scissors"
    }
}

function play(playersel, compsel){
    let playsel = playersel.toLowerCase()
    if(playsel == compsel){
        return "tie"
    }else if(playsel == "rock"){
        if(compsel == "paper"){
            compScore++
            return "you lose!"
        }else if(compsel == "scissors"){
            playerScore++
            return "you win!"
        }
    }else if(playsel == "paper"){
        if(compsel == "scissors"){
            compScore++
            return "you lose!"
        }else if(compsel == "rock"){
            playerScore++
            return "you win!"
        }
    }else{
        if(compsel == "rock"){
            compScore++
            return "you lose!"
        }else{
            playerScore++
            return "you win"
        }
    }
}