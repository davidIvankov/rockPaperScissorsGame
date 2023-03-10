 // this is the code that describes behavior of menu in the app, it servs as navigation
 import { game, finalResult, currentGameCount, exit } from "./game.js";
 import { meetingAnUser } from './script.js';
 import { logs } from "./logs.js";

 let currGameCount = currentGameCount,
 finalRes = finalResult,
 ext = exit,
 userName;
 
 const nameRegex = /^[A-Za-z]+$/,
 exit_function = () => {
    let answer = prompt('------------------------------------------------------------------\nAre you sure?\n if you exit all scores will be lost and you cant go back.\n--------------\ny\t(yes),\n n\t(no)\n------------------------------------------------------------------')
    switch (answer.toLowerCase()) {
        case 'y':
            alert('bye');
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
    if (!userName) {
      return  exit_function();
    }
    else if (!nameRegex.test(userName)){
       return set_name(`${meetingAnUser}\n(that doesn't look like name to me, try again)`)
    } else {
    return userName;
    };
},

menu_selection = (initialInput, name) =>{
           if ((/^y$/i).test(initialInput)){
             game(name)
           } else if ((/^n$/i).test(initialInput) || !initialInput) {
            exit_function();
           } else if ((/^logs$/i).test(initialInput)){
             logs();

           } else {
            menu('')
           };
},

 ask_for_a_game = (username) => {
    let initialInput;
    if (finalResult) {
        initialInput = prompt(`-------------------------------------------------------------------\nWanna play more ${username}?\n \t y(yes)\n \t n(no)\n----------\n logs for all previus scores\n-------------------------------------------------------------------`);
        finalRes = 0;
        currGameCount = 1;
       return menu_selection(initialInput, username);
    } else {
    initialInput = prompt(`-------------------------------------------------------------------\nHi ${username}, good to see you!\nWanna play rock paper scissors?\n---------------------------------\ny\t(yes)\nn\t(no)\n-------------------------------------------------------------------`);
    menu_selection(initialInput, username);
    };
},


menu = (text) =>{
    if (!userName) {
        let user = set_name(text)
        if (user) {
        ask_for_a_game(user)
        } else {
            return;
        }
    } else {
        ask_for_a_game(userName);
    };
};

export { menu, currGameCount, exit_function, ext }