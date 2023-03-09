import { allGamesLog } from "./game.js";
import { menu } from './menu.js'
const logs = () =>{
    console.log(allGamesLog)
let gameCount = 0;    
let allGames = '';
for (let i = 0; i<allGamesLog.length; i++){
    gameCount++

    allGames += `${gameCount}.\n${allGamesLog[i].userName}: ${allGamesLog[i].userScore}\ncomputer: ${allGamesLog[i].computerScore}\n${allGamesLog[i].winner}\n
`
}
alert(allGames);
return menu();

};

export { logs }