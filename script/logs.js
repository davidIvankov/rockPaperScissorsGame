import { allGamesLog } from "./game.js";
import { menu } from './menu.js'
const get_choices = (i) =>{
let message = '';
for (let j = 0; j < 5 ; j++) {
   message += `${allGamesLog[i].playerChoices[j]} I ${allGamesLog[i].computerChoices[j]}\n`
};
return message;
}
,logs = () =>{

let gameCount = 0;    

for (let i = 0; i<allGamesLog.length; i++){
    gameCount++

    alert(`${allGamesLog[i].winner}\n\t Game counts:${gameCount}.\n${allGamesLog[i].userName}: ${allGamesLog[i].userScore}\ncomputer: ${allGamesLog[i].computerScore}\n-----------------------------------------------------------------\n${allGamesLog[i].userName} I computer\n-----------------------------------------------------------------\n${get_choices(i)}-----------------------------------------------------------------`)

}

return menu();

};


export { logs }
