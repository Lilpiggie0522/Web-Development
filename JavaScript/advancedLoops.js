const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples:5,
    oranges:10,
    grapes:1000,
}
// for loop
for (let i=0; i<basket.length; i++){
    console.log(basket[i]);
}

// for each loop
basket.forEach((item)=>{
    console.log(item);
})

//for of loop
// Iterating - arrays, strings
for(item of basket){ // item can be named anything, it is the of word that matters
    console.log(item);
}

// Iterating over strings
for(item of 'strings'){
    console.log(item);
}
// for in loop
for(item in detailedBasket){ // for in loops allows us to loop over the object properties
    console.log(item);
}

// enumerating is not iterating, enumerating is for objects
// for of loop does not work with objects cuz objects are not iterable
// for in loop works with objects, strings and arrays cuz arrays are essentially objects with indexes.

