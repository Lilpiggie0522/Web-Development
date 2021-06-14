// what is a program?
// A program allocates memory and parses and executes.

// javascript engine reads the script we write. engine consists of two parts, a memory heap and a call stack.


//memory leak => once memory space are all used up and filled with unused-variables,
// then it fills up the memory heap and eventually the browser will not be able to work. 

// call stack => 
// call stack reads and executes the code! once a code is run, it is then removed out of the call stack.
console.log('1');
console.log('2');
console.log('3');

const one = () =>{
    const two = () =>{
    console.log('4');
    }
    two();
}

// the above function runs as:
// => 
console.log('4');
two();
one();
// call stack here
// javascript only has one call stack hence, we call it single thread. 
// some languages have more than one call stack, we call then multi-thread.


//synchronaus programming means line 1 gets executed then 2 then 3, can't start before previous ones finishes because of the call stack.

//stack overflow: got to many stuff in the call stack until it does not have enough space anymore.

// stack overflow caused by recursion:
function foo(){
    foo();
};
foo();

// non-blocking:
// if a line of code or a thread is taking too long, then the rest of the thread has to wait
// hence we need something non-blocking! which is asychronaus:

// Asynchronaus:
console.log('1');
setTimeout(()=>{
    console.log('2');
}, 2000)
console.log('3');

console.log('1');
setTimeout(()=>{
    console.log('2');
}, 2000)  // this triggers the web API and tells web API
// setTimeout() has been called. and start a timer of 2 seconds that tells in two second you have to do something
// because now the call stack is empty, the javascript engine goes to next line and executes it.
// after 2 seconds, web API tells setTimeout() should be run and run what is inside of it.
// which adds a callback() and adds into call back queue 
// event loop checks if the call stack is empty, then checks callback.
// then moves callstack() into call stack from callback queue. and run the function inside. 
// Call stack

// web api

// callback queue

//event loop

// there is also onclick onload and ondone in callback queue
Element.addEventListener('click',()=>{
    console.log('click');
})// everytime a click happens on the dom, we run callback function.

