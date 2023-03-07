let playerScore, computerScore, currentGameCount = 0,
defaultMenuMessage = 'Hi !\nWona play a game of rock paper scissors?\n(Type y for yes, n for no)',
meetingAnUser = 'Hi Stranger !\nWhat is your name?',
userName;

const winMessage = 'You Won !!',
lostMessage = ' You Lost :(',
nameRegex = /^[A-Za-z]+$/,
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
    computerScore = 0;
    playerScore = 0;
  while (currentGameCount < 5){
    let playersInput = prompt('rock paper scissors!');
    round(playersInput, name)
  }
   finalResult = get_a_final_message(computerScore, playerScore);
   prompt(`${finalResult}\ncomputer:${computerScore}\n${name}:${playerScore}`);
   return menu('Next Round?\n(Type y for yes, n for no, menu to go back to main menu)')

},
set_name = (text) =>{
    userName = prompt(text);
    if (!userName || !nameRegex.test(userName)){
        set_name(`${meetingAnUser}\n(that doesn't look like name to me, try again)`)
    }
    return userName;
},
menu_switch = (text, name) =>{
    switch (text){
        case 'y':
         game(name)
        break;
        case 'n':
            alert('bye');
        break;
        case 'menu':
            menu(meetingAnUser)
        default:
        menu(text)
    }

},
menu = (text) =>{
   let user = set_name(text)
    let initialInput = prompt(`Hi ${user}, good to see you!\nWona play rock paper scissors?\n(type y for yes,n for no)`);
    menu_switch(initialInput);
}
menu(meetingAnUser)





 
