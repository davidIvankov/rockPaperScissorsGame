/*
this file contains three objects which are used when player selects rock, paper or scissors.
Then computer generates one of the three options which serve as keys to access message displayed
 on screene and value added to a playerScore, which are all stored in these objects.
*/
const winMessage = 'You Won !!',
lostMessage = ' You Lost :(',
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
}

export { paperGame, rockGame, scissorsGame, lostMessage, winMessage }