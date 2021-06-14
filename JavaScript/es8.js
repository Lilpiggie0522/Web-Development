// .padStart(); adds spaces before a string
'Turtle'.padStart(10); //This adds 10 spaces before 'Turtle'.

//.padEnd(); adds spaces after a string
'Turtle'.padEnd(10); //

// trailing commas and functions parameter lists and calls

const fun = (a,
    b,
    c,
    d,
    )=>{
    console.log(a);
}

fun(1,2,3,4,); // writing a comma at the end will not give an error;

// Object.values and entries

Object.keys

let obj ={
    username0:'santa',
    username1:'roldulf',
    username2:'mrGrinch',
};

// Loop over the object using
Object.keys(obj).forEach((key,index)=>{
    console.log(key,obj[key]); //=> accessing obj using obj[key] while looping
});

//Object.values() method
Object.values(obj).forEach((value)=>{ // this only gives the values of each property.
    console.log(value); // 
});

// Object.entries() method

Object.entries(obj).forEach((value)=>{ // this gives arrays with both property and value in
    console.log(value); // 
});

// Replace obj's username from username0 to user's actually name eg 'santa';
Object.entries(obj).map((username)=>{ // Object.entries(obj) gives an array with 2 elements
// .map loops through the arrays get from entries and mutate it then put in into new array
    return username[1] + username[0].replace('username','');
})