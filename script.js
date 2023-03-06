const winMessage = 'You Won !!',
lostMessage = ' You Lost :(',
rockRegex = /^rock$/i,
paperRegex = /^paper$/i,
scissorsRegex = /^scissors$/i,
paperGame = {
    rock: `${winMessage}\n paper beats rock.`,
    paper: `Draw`,
    scissors: `${lostMessage}\n scissors beat paper.`
},
scissorsGame = {
    rock: `${lostMessage}\n rock beats scissors.`,
    scissors: `Draw`,
    paper: `${lostMessage}\n scissors beat paper.`
},
rockGame = {
    scissors: `${winMessage}\n rock beats scissors.`,
    rock: `Draw`,
    paper: `${lostMessage}\n paper beats rock.`
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
game = (input) =>{
   if (player_game(input) === false){
    return game(prompt(`rock paper scissors!\n(type rock, paper or scissors.)`))

   }
   
    let computerInput = computer_game()
   let result = prompt(`${player_game(input)[computerInput]}\nplayer: ${input}\ncomputer:${computerInput}\n\n(press enter for next round.)\n(type something and submit for exit)`);
   if (!result) {
    return game(prompt('rock paper scissors!'))
   } else {
    alert('bye')
   }




}

let playersInput = prompt('rock paper scissors!');

game(playersInput)


 
