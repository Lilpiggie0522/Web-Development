// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("mouseleave", function(){
//     console.log("CLICK!!!");
// })

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteButton = document.getElementsByClassName("newDeleteButton");

function inputLengthValid(){
    if(input.value.length>0){
        return true;
    }
    else{
        return false;
    }
}
    
function createListElement(){
    var newli = document.createElement("li");
        newli.appendChild(document.createTextNode(input.value));
        ul.appendChild(newli);
        newli.classList.add("newListClass");
        newli.addEventListener("click", function(){
            newli.classList.toggle("done");
        });
        input.value="";
        ///////////////
    var newButton = document.createElement("button");
        newButton.appendChild(document.createTextNode("Delete"));
        newli.appendChild(newButton);
        newButton.classList.add("newDeleteButton");

        newButton.addEventListener("click", function(){
            this.parentElement.remove();
          })
}

var clikkkkkk=function addListAfterClick(){
    if (inputLengthValid()){
        createListElement();
        }
}

var enterrrrrr=function addListAfterKeyPress(event){
    if (inputLengthValid() && event.keyCode===13){
        createListElement();
        }
}

// var removeButton= function(){
//     deleteButton[0].parentElement.remove();
// }


button.addEventListener("click", clikkkkkk);
    

input.addEventListener("keypress", enterrrrrr);

// deleteButton.addEventListener("click", removeButton);










