# Advanced javascript

# Ternary Operator
**function isUserValid(bool){
    return bool;
}**

**var answer = isUserValid(true)? "You may enter" : "Wrong password";**

# Switch statement
**function moveCommand(direction){
var whatHappens;
switch(direction){ <!-- Check if the parameter passed is equal to forward -->
        case "forward":
            whatHappends = "You encountered a monster";
            break;

        case "back":
            whatHappens = "You arrived home";
            break;

        case "right":
            whatHappens = "you found a river";
            break;
            
        case "left":
            whatHappens = "you run into a troll";
            break;

        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}**

# let statement
let a =3;
**let creates another scope with in curly brackets that anything outside of the brackets cannot access.**

**Note that once a variable has the name X is declared using let in root scope, it cannot be declared using var in another scope.** 

**We can have a let in the root and a let in new scope or a var in root and a let in scope.**

# const statement
**the const variable cannot be changed, this is a good thing because this variable will always have the same value. Anything that is not going to change should be assigned as a const.**

# Destructuring

**const obj ={
    player:"bobby",
    experience:"100",
    wizardLevel:false,
}**
**const{player, experience} = obj;**
**let{wizardLevel} = obj;**

# New ways to declare object properties (dynamic object properties)
**const namee = "john snow";
const john = {
    [1+2]:"hello",
    ["ray"+"smith"]:"hihi",
}**

# Auto match properties and values (skip the declaration)
**const a = "simon";
const b = true;
const c = {};
const obj = {
    a,b,c
}**

# Template strings:
**const naMe = "sally";
const age = 34;
const pet = "horse";
//uses back tick, the key above tab key on your keyboard!
const greetingBest = `Hello ${naMe} you seem to be ${age-10}. what a lovely ${pet} you have there!`;**

# Default arguments
**function greet(name="", age=30, pet="cat"){
    return `Hello ${name} you seem to be ${age-10}. what a lovely ${pet} you have there!`;
}**

# Arrow functions
**const add = (a,b) => {
    return a+b
    };**

# Currying function
**const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(3);
multiplyBy5(5);**

# Advanced arrays

**const array = [1,2,10,16];
const doubleArray=[];
const newArray = array.forEach((num)=>{
    doubleArray.push(num*2);
})**

# Map
*Note that Map method always has to return a value, this has something to do with the side effects of a function*

**Map method creates a new array than mutating the original array**

**const array = [1,2,10,16];
const MapArray = array.Map((num)=>{
    return num*2;
});
**

# Filter array
*This method checks all the elements in the array and gets the boolean value of whether it is greater than 5, if it is, then add it into the filterArray, otherwise loop to the next element!*
**const array = [1,2,10,16];
const filterArray = array.filter((num)=>{
    return num<5;
});
**

# Reduce array
**const array = [1,2,10,16];
const reduceArray = array.reduce((accumulator,num)=>{
    return accumulator+num;
},5)
**5 states the inital value of the accumulator**
**

