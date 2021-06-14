var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var background = document.getElementById("gradient");
var h3 = document.getElementById("backgroundInfo");


// console.log(css);
// console.log(color1);
// console.log(color2);

var setGradient = function(){
    background.style.background = "linear-gradient(to right, " 
    + color1.value + ", " 
    + color2.value + ")"
    css.textContent = background.style.background + ";";
    // css.innerHTML = background.style.background + ";";
    // css.createTextNode(background.style.background + ";"); this does not work!
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


