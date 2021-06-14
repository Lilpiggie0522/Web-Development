
// if (4+3===7){
//     alert("You are smart!");
//     console.log("hellooooo");
//     console.log("hellooooo");
//     console.log("hellooooo");
//     console.log("hellooooo");
//     console.log("hellooooo");
// }

// function sayHello(){
//     console.log("Hello");
// }

// function sing(song){
//     console.log(song);
// }

// sing("ladeda");
// sing("hello");
// sing("backstreetboys");

/* 119 Functions */
// function checkDriverAge(age){
//     if(Number(age)<18){
//         alert("Sorry, you are too yound to drive this car. Powering off");
//     }

//     else if(Number(age===18)){
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }

//     else if(Number(age)>18){
//         alert("Powering On. Enjoy the ride!");
//     }
// }
// checkDriverAge(7);

// var checkDriverAge2 = function checkDriverAge(age){
//     if(Number(age)<18){
//         alert("Sorry, you are too yound to drive this car. Powering off");
//     }

//     else if(Number(age===18)){
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }

//     else if(Number(age)>18){
//         alert("Powering On. Enjoy the ride!");
//     }
// }
// checkDriverAge2(88);

// /* 121 Data Structures*/
// var list = ["tiger", "cat", "bear","bird"];

// console.log(listofAnimals[0]);

// var numbers= [0,1,2,3,4];

// var booleans = [true, false, false, true, true];

// var functions = [function apple(){
//     console.log(apple);
// }];

// var mixedList = ["apples", 3, undefined, true, false, function apple(){
//     console.log("apples");
// }];

// var list= [
//     ["tiger", "cat", "bear","bird"]
// ];

// console.log(list[0]);
// console.log(list);
// console.log(list[0][2]);

// 123 Objects

// var user = {
//     name: "john",
//     age:34,
//     hobby: "Soccer",
//     isMarried: false,
//     spells:["abracadbra","kakadu","boo"],
//     shout: function(){
//         console.log("AHHHHHHHHHHHH");
//     },
// };

// var list = [
//     {
//         username:"andy",
//         password:"secret",
//     },

//     {
//         username:"hozzane",
//         password:123
//     }
// ]

// var user1={
//     username:"lilpiggie",
//     password:"piggie123",
// };

// database= ["user0", user1,"user2"];

// newsfeed = [
//     {
//         username:"lil",
//         timeline:"2017",
//     },

//     {
//         username:"kaka",
//         timeline: "2011",
//     },
//     {
//         username:"zulfa",
//         timeline:"2010",
//     },
// ];

// var todos = [
//     "clean room",
//     "brush teeth",
//     "exercise",
//     "study javascript",
//     "eat healthy"
// ];
// var todosLength = todos.length;

// for (var i=0; i</* todosLength */todos.length;i++){
//     // todos[i]=todos[i].concat(["!"]);
//     todos.pop();
// }

// var counterOne = 10;
// while (counterOne>0){
//     console.log(counterOne);
//     counterOne--;
// }
// var counter2 = 10; 
// do{
//     console.log(counter2)
//     counter2--;
// } while (counter2>0)

// // for each loop
// todos.forEach(function(todo,i){
//     todos[i]=todos[i].concat(["!"]);
// });

// for(var i=0;i<todos.length;i++){
//     console.log(i);
// };

// 144
// function isUserValid(bool){
//     return bool;
// }

// var answer = isUserValid(false)? "You may eneter" : "Access denied!";

// function moveCommand(direction){
//     var whatHappens;
//     switch(direction){
//         case "foward":
//             whatHappens = "you encounter a monster";
//             break;
//         case "back":
//             whatHappens = "You arrived home";
//             break;
//         case "right":
//             whatHappens = "you found a river";
//             break;
//         case "left":
//             whatHappens = "you run into a troll";
//             break;
//         default:
//             whatHappens = "please enter a valid direction";
//     }
//     return whatHappens;
// }

// Destructuring
const obj ={
    player:"bobby",
    experience:"100",
    wizardLevel:false,
}
// const player = obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;

const{player, experience} = obj;
let{wizardLevel} = obj;

console.log(player);
console.log(experience);
console.log(wizardLevel);

// new ways to declare object properties (dynamic object properties)
const namee = "john snow";
const john = {
    [1+2]:"hello",
    ["ray"+"smith"]:"hihi",
}

// auto match properties and values (skip the declaration)
const a = "simon";
const b = true;
const c = {};
// skip: const obj={
//  a:"simon",
//  b:true,
//  c:{},
//}
const obj = {
    a,b,c
}

// template strings:
const naMe = "sally";
const age = 34;
const pet = "horse";

// const greeting = "hello" + naMe + "you seem to be doing" + greeting + "!";
const greetingBest = `Hello ${naMe} you seem to be ${age-10}. what a lovely ${pet} you have there!`;

//default arguments
function greet(name="", age=30, pet="cat"){
    return `Hello ${name} you seem to be ${age-10}. what a lovely ${pet} you have there!`;
}

// arrow functions
const add = (a,b) => a+b; 

// currying function
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(3);
multiplyBy5(5);

//What are the two elements of a pure function?
//1. Deterministic --> always produces the same results given the same inputs
//2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.
