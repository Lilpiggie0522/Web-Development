// primitive type pass by value
var a = 5; // a is the memory address that contains value 5
var b = a; // b is the memory address that only copies the value of a

b++;
console.log(b);

// object pass by reference
let obj1 = {name:'yao', password:'123'};// obj1 is the memory address that stores the info

let obj2 = obj1; // this tells the memory address of obj2 is the obj1 which refers to the memory address of the stored info.

obj2.password = 'easypeasy'; // when changing password, it is changing the object in memory.
console.log(obj1);
console.log(obj2);

// trying with array 
var c = [1,2,3,4,5]; // arrays are objects therefore pass by reference
var d = c;
d.push(18763321);// changing d will change c cuz arrays are objects.
console.log(c);

// if we do not want to change the original array where d is referencing from,
// then we should create an empty array and use concat. such as:
var c =[1,2,3,4,5];
var d = [].concat(c);
d.push(18765521);
console.log(c);

// cloning an object so that objects are not affected of each other (pass by reference) =>
let obj = {a:'a', b:'b',c:'c'};
let clone = Object.assign({},obj);
obj.c = 5;
console.log(clone);

// short syntax of cloning something
let obj = {a:'a', b:'b',c:'c'};
clone2 = {...obj};
obj.c =5;
console.log(clone2);

// shallow cloning
let obj = {
    a:'a',
    b:'b',
    c:{deep:'try and change me!'},
};

let clone = Object.assign({},obj);
let clone2 = {...obj};
// obj.c = 666;
obj.c.deep = 'hahahha';
console.log(obj); // this of course changes to hahah
console.log(clone); // this changes hahaha cuz of the shallow clone effect, which only clones the first layer of the object.
console.log(clone2); // this is same as last one

// deep clone 
// to have everything cloned from an object that does not pass by reference, we use:
let obj = {
    a:'a',
    b:'b',
    c:{deep:'try and change me!'},
};

let clone = Object.assign({},obj);
let clone2 = {...obj};
let superClone = JSON.parse(JSON.stringify(obj));// this converts the object into strings and then conver it back to object.
// obj.c = 666;
obj.c.deep = 'hahahha';
console.log(obj); // this of course changes to hahah
console.log(clone); // this changes hahaha cuz of the shallow clone effect, which only clones the first layer of the object.
console.log(clone2); // this is same as last one



