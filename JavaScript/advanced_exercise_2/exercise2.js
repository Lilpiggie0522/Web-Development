//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

var experiencePoints = winBattle()? 10 : 1; 

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            
            whatHappens = "you encounter a monster";
            return whatHappens;
        case "back":
            whatHappens = "you arrived home";
            return whatHappens;

        case "right":
            whatHappens = "you found a river";
            return whatHappens;
            
        case "left":
            whatHappens = "you run into a troll";
            return whatHappens;
            
        default:
            whatHappens = "please enter a valid direction";
    }
   
}

//#2 return value when moveCommand("forward"); monster

//#3 return value when moveCommand("back"); home

//#4 return value when moveCommand("right"); river

//#5 return value when moveCommand("left"); troll

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!
function result(stepp){
var consequence;

switch(stepp){
    case true:
        consequence = "You have balls";
        break;
        
    case false:
        consequence = "You pussy!";
        break;
    
    default:
        consequence = "nonono!";
}
    return consequence;
}