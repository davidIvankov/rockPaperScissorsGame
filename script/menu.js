 // this is the code that describes behavior of menu in the app, it servs as navigation
 import { game, finalResult, currentGameCount, exit } from "./game.js";
 import { meetingAnUser } from './script.js'

 let currGameCount = currentGameCount,
 finalRes = finalResult,
 ext = exit,
 userName;
 
 const nameRegex = /^[A-Za-z]+$/,
 exit_function = () => {
    let answer = prompt('Are you shore?\nif you exit all logs will be lost and you can return only with page reload\n(type y for yes, n for no)')
    switch (answer) {
        case 'y':
        return alert('bye')
        break;
        case 'n':
         ext = false;   
         menu('')
        break;
        default :
        exit_function()
        break;
    }
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
         exit_function();
        break;
        default:
        menu(text)
        break;
    }

},
 ask_for_a_game = (user) => {
    if (finalResult) {
        let initialInput = prompt(`Wona play more ${user}?\n(type y for yes,n for no)`);
    finalRes = 0;
    currGameCount = 0;
    menu_switch(initialInput, user);
    }
    let initialInput = prompt(`Hi ${user}, good to see you!\nWona play rock paper scissors?\n(type y for yes,n for no)`);
    menu_switch(initialInput, user);
},
menu = (text) =>{
    if (!userName) {
   let user = set_name(text)
   ask_for_a_game(user)
    } else {
    ask_for_a_game(userName);
    };
};

export { menu, currGameCount, exit_function, ext }