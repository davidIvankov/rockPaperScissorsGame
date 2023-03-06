let playerScore = 0,
computerScore = 0,
currentGameCount = 0;

const winMessage = 'You Won !!',
lostMessage = ' You Lost :(',
rockRegex = /^rock$/i,
paperRegex = /^paper$/i,
scissorsRegex = /^scissors$/i,
paperGame = {
    rock: {
        message:`${winMessage}\n paper beats rock.`,
        value: 1
    },
    paper: {
        message:`Draw`,
        value: 0
    },
    scissors: {
        message:`${lostMessage}\n scissors beat paper.`,
        value: 0
    }
},
scissorsGame = {
    rock: {
        message:`${lostMessage}\n rock beats scissors.`,
        value: 0
    },
    scissors: {
        message:`Draw`,
        value: 0
    },
    paper: {
        message:`${winMessage}\n scissors beat paper.`,
        value: 1
    }
},
rockGame = {
    scissors: {
        message:`${winMessage}\n rock beats scissors.`,
        value: 1
    },
    rock: { 
        message:`Draw`,
        value: 0
    },
    paper: {
        message:`${lostMessage}\n paper beats rock.`,
        value: 0
    }
},
computer_game = () =>{
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
round = (input) =>{
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
  if (currentGameCount < 4){
  alert(`${res.message}\nplayer: ${input}\ncomputer:${computerInput}`)
  }else {
    return
  }
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
}
game = () =>{
    computerScore = 0;
    playerScore = 0;
  while (currentGameCount < 5){
    let playersInput = prompt('rock paper scissors!');
    round(playersInput)
  }
   finalResult = get_a_final_message(computerScore, playerScore);
   prompt(`${finalResult}\ncomputer:${computerScore}\nplayer:${playerScore}`);
   return menu()

},
menu = () =>{
    let initialInput = prompt('Hi! I wona play a game of rock paper scissors\n(type y for yes, or n for no)')
    switch (initialInput){
        case 'y':
         game()
        break;
        case 'n':
            alert('bye');
        break;
        default:
        menu()
    }
}
menu()





 
