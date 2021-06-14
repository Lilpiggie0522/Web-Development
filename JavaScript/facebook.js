// Building facebook 125
var database = [
    {
        username:"piggie",
        password:"super",
    },
    {
        username:"sally",
        password:"sally1",
    },
    {
        username:"peter",
        password:"ppp",
    },
    {
        username:"richard",
        password:"aha",
    },

]

var newsfeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!",
    } ,
    {
        username:"sally",
        timeline: "js is so cool!",
    } 
]

var usernamePrompt = prompt("what is your user name?");
var passwordPrompt = prompt("what is your password?");

// var signIn =function/* anonymous function */(user,pass){
//     if (user===database[0].username && 
//         pass===database[0].password){
//             console.log(newsfeed[0],newsfeed[1]);
//         }

//     else{
//         alert("sorry wrong user name or password!");
//     }
// }

// signIn(usernamePrompt,passwordPrompt);

// 128 Build Faceboook 2
function isUservalid(user,password){
    for(var i=0;i<database.length;i++){
        if(user===database[i].username && password===database[i].password){
            return true;
        }
    }
    return false;
}

function signIn(user,password){
    if(isUservalid(user,password)){
        console.log(newsfeed);
    }
    else{
        console.log("Wrong user name or password!");
    }
}


signIn(usernamePrompt,passwordPrompt);
