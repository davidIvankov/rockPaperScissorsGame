//this is file whose code contains logic for the game
let playerScore, computerScore = 0,
 currentGameCount = 1,
exit = false,
allGamesLog = [],
computerChoices = [],
playerChoices = [],
timeLeft = 10,
winner,
finalResult;

const rockRegex = /^rock$/i,
paperRegex = /^paper$/i,
exitRegex = /^exit$/i,
scissorsRegex = /^scissors$/i;

import { 
    rockGame,
    paperGame,
    scissorsGame,
    lostMessage,
    winMessage
} from './gameObjects.js';

import { menu, currGameCount, exit_function, ext } from './menu.js';

// class that creates objects that will be exported to the logs.js
class Score {
  constructor(user, compScore, userScore, winner, computerChoices, playerChoices) {
    this.userName = user;
    this.computerScore = compScore;
    this.userScore = userScore;
    this.winner = winner;
    this.computerChoices = computerChoices
    this.playerChoices = playerChoices
  }
}

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
    } else if (exitRegex.test(input)){
        return 'exit'
    } else {
        return false
    };
},
get_table = () =>{
let message = '';
for (let j = 0; j < 5 ; j++) {
   message += `${playerChoices[j]} I ${computerChoices[j]}\n`
};
return message;
},
round = (input, name) =>{
    if (player_game(input) === false){
    return round(prompt(`-------------------------------------------------------------------\n${currentGameCount}. You have only the below option\n\t rock\n\t paper\n\t scissors\nEXIT THE GAME\n\t exit`), name)
   } else if (input === 'exit') {
    currentGameCount = 6;
    exit = true;
   } else {
   let computerInput = computer_game();
   let res = player_game(input)[computerInput];
   computerChoices.unshift(computerInput);
   playerChoices.unshift(input);
   currentGameCount++
  playerScore+= res.value 
  if (res.message !== 'Draw' && res.value === 0){
    computerScore++
  }
  
  alert(` ${res.message}\n\n-----------------\n${name}: ${input}\ncomputer: ${computerInput}\n-------------------------------------------------------------------`)
}
},
get_a_final_message = (scoreComp, scorePlayer, user) =>{
    if (scoreComp > scorePlayer) {
        winner = 'winner is computer';
        return lostMessage
    } else if (scoreComp < scorePlayer) {
        winner = `winner is ${user}`;
        return winMessage
    } else {
        winner = 'Draw';
        return 'Draw'
    }
},
game = (name) =>{
    exit = ext;
    currentGameCount = currGameCount;
    computerScore = 0;
    playerScore = 0;
  while (currentGameCount < 6){
    let playersInput = prompt(`-----------------------------------------------------------------\n${currentGameCount}. Type one of the option below\n--------------\n\t rock\n\t paper\n\t scissors\n--------------\n\t exit--Exit game!\n-----------------------------------------------------------------`);
    round(playersInput, name)
  }
  if (exit) {
   return exit_function()
  } else {
   finalResult = get_a_final_message(computerScore, playerScore, name);
   let table = get_table()
   allGamesLog.unshift(new Score(name, computerScore, playerScore, winner, computerChoices, playerChoices))
   computerChoices = [];
   playerChoices = [];
   alert(` ${finalResult}\ncomputer: ${computerScore}\n${name}: ${playerScore}\n-----------------------------------------------------------------\n${name} I computer\n-----------------------------------------------------------------\n${table}\n-----------------------------------------------------------------\n-----------------------------------------------------------------`);
   return menu('')
  };
}

export { game, finalResult, currentGameCount, allGamesLog, exit, computerChoices, playerChoices }

