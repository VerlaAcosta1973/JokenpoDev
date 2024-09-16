const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
const figureResult = document.querySelector('.figure-result')

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

let human_score = 0
let machine_score = 0

const playTheGame = (human, machine) => {
    
    console.log(`Humano: ${human}.  Máquina: ${machine}`)

    if(human === machine){
        result.innerHTML = "Deu empate!!!"
        figureResult.innerHTML = "&#x1F4AA";
    }else if((human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) || (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) || (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)){
        human_score++
        humanScore.innerHTML = human_score
        result.innerHTML = "Você Ganhou!!!"
        figureResult.innerHTML = "&#x1F3C6";
        
    }else{
        machine_score++
        machineScore.innerHTML = machine_score
        result.innerHTML = "Você perdeu para a Alexa"
        figureResult.innerHTML = "&#x1F948";
    }
}

