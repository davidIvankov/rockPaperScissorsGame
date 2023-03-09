 // this is the code that describes behavior of menu in the app, it servs as navigation
 import { game, finalResult, currentGameCount, exit } from "./game.js";
 import { meetingAnUser } from './script.js'

 let currGameCount = currentGameCount,
 finalRes = finalResult,
 ext = exit,
 userName;
 
 const nameRegex = /^[A-Za-z]+$/,
 exit_function = () => {
    let answer = prompt('Are you sure?\n if you exit all logs will be lost and you can return only with page reload\n(type yes(y), OR no(no))')
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
           if ((/y/i).test(initialInput)){
            return game(name)
           } else if ((/n/i).test(initialInput) || !initialInput) {
           return exit_function();
           } else {
            menu('')
           };
},

 ask_for_a_game = (username) => {
    let initialInput;
    if (finalResult) {
        initialInput = prompt(`Wanna play more ${username}?\n(type yes(y), OR no(n))`);
        finalRes = 0;
        currGameCount = 0;
       return menu_selection(initialInput, username);
    } else {
    initialInput = prompt(`Hi ${username}, good to see you!\Wanna play rock paper scissors?\n(type yes(y), for no(n))`);
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