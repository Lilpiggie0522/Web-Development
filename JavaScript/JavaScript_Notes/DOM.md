# DOM is Document Object Model, which allows the modification of html and css files using javascript.

# DOM selectors are as follows:
**document.getElementsByTagName("h1");**

**documents.getElementsByClassName("second");** *This gives an array* so in order to access the tag itself, **documents.getElementsByClassName("second")[0];** should be used.

**documents.getElementById("first");** *Note that there can only be one ID in a html file so it is getelementById("").*

# DOM Query Selector
**documents.querySelector("li");** This only selects the first one coming up

**documents.querySelectorAll("li");** Selects all

**documents.querySelector("li","h1");** h1 is displayed before li

**documents.querySelector("li").getAttribute("random");** *Gets the attribute name which is called random*

**document.querySelector("li").setAttribute("random","100");** *Sets the attribute random to 100.*

# Changing styles of the html using javascript code
**document.querySelector("h1").style.background="yellow";** *Note that this creates an issue of seperation of concern so it is strongly not recommend to use it!*

## Thus the correct way of changing style using js is using classes:
*Also, it is better to assign a variable to the document selector*
**var h1 = document.querySelector("h1");
h1.className="coolTitle";**

## There is also classList:
**document.querySelector("li").classList;** *This give an empty array cuz there is no classes there*

## Adding a class using classList:
**document.querySelector("li").classList.add("done");**

## Removing a class using classList:
**document.querySelector("li").classList.remove("done");**

## Toggle a class using classList: *This toggles the class on and off*
**document.querySelector("li").classList.toggle("done");**

## Parent elements and children elements:
**document.qureySelectorAll("li")[1].parentElements** *This gives the parent element, which is ul*

**document.qureySelectorAll("li")[1].parentElements.parentElements.children** *This gives all the children of body, which are h1, p, ul, etc*
