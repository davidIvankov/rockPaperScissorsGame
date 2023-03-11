/*
this file contains three objects which are used when player selects rock, paper or scissors.
Then computer generates one of the three options which serve as keys to access message displayed
 on screene and value added to a playerScore, which are all stored in these objects.
*/
const winMessage = '-----------------------------------------------------------------\nCongratulations you Won!\n',
lostMessage = '-----------------------------------------------------------------\nSorry You Lost!',
paperGame = {
    rock: {
        message:`${winMessage}\n\t paper beats rock.`,
        value: 1
    },
    paper: {
        message:`\t Draw`,
        value: 0
    },
    scissors: {
        message:`${lostMessage}\n\t scissors beat paper.`,
        value: 0
    }
},
scissorsGame = {
    rock: {
        message:`${lostMessage}\n\t rock beats scissors.`,
        value: 0
    },
    scissors: {
        message:`\t Draw`,
        value: 0
    },
    paper: {
        message:`${winMessage}\n\t scissors beat paper.`,
        value: 1
    }
},
rockGame = {
    scissors: {
        message:`${winMessage}\n\t rock beats scissors.`,
        value: 1
    },
    rock: { 
        message:`\t Draw`,
        value: 0
    },
    paper: {
        message:`${lostMessage}\n\t paper beats rock.`,
        value: 0
    }
}

export { paperGame, rockGame, scissorsGame, lostMessage, winMessage }