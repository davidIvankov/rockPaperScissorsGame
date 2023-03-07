//this is file whose code contains logic for the game
let playerScore, computerScore, currentGameCount = 0,
finalResult;

const rockRegex = /^rock$/i,
paperRegex = /^paper$/i,
scissorsRegex = /^scissors$/i;

import { 
    rockGame,
    paperGame,
    scissorsGame,
    lostMessage,
    winMessage
} from './gameObjects.js';

import { menu, currGameCount } from './menu.js';

const computer_game = () =>{
    let randomValue = parseInt(Math.random() * 3);
    switch(randomValue){
        case 1:
            return 'paper';
        break;
        case 2:
            return 'rock';
        break;
        default:
            return 'scissors'
    }
},
player_game = (input) => {
    if (paperRegex.test(input)) {
        return paperGame
    } else if (rockRegex.test(input)) {
        return rockGame
    } else if (scissorsRegex.test(input)) {
        return scissorsGame
    } else {
        return false
    };
},
round = (input, name) =>{
    if (player_game(input) === false){
    return round(prompt(`rock paper scissors!\n(type rock, paper or scissors.)`))
   } else {


   let computerInput = computer_game();
   let res = player_game(input)[computerInput];
   currentGameCount++
  playerScore+= res.value 
  if (res.message !== 'Draw' && res.value === 0){
    computerScore++
  }
  
  alert(`${res.message}\n${name}: ${input}\ncomputer:${computerInput}`)
}
},
get_a_final_message = (scoreComp, scorePlayer) =>{
    if (scoreComp > scorePlayer) {
        return lostMessage
    } else if (scoreComp < scorePlayer) {
        return winMessage
    } else {
        return 'Draw'
    }
},
game = (name) =>{
    currentGameCount = currGameCount;
    computerScore = 0;
    playerScore = 0;
  while (currentGameCount < 5){
    let playersInput = prompt('rock paper scissors!');
    round(playersInput, name)
  }
   finalResult = get_a_final_message(computerScore, playerScore);
   prompt(`${finalResult}\ncomputer:${computerScore}\n${name}:${playerScore}`);
   return menu('')

}

export { game, finalResult, currentGameCount }

