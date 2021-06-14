// ecmascript 10 

//flat
 const jurassickPark = [[1],2,3,4,[5,6,[7,[3,[5]]]],8];
 jurassickPark.flat(50); // this flats the array to the utmost level which is 1,2,3,4,5...
 
 // using flat to clean up the data:
 const entries = ['bob', 'sally', 'cindy',,,,,,'tim'];
 entries.flat();

 // flatmap

const jurassickParkChaos = jurassickPark.flatMap((number)=>{ // flatmap uses the basic map function and flattens the results to the depth of one!
    return number + 'gg';
})

//trimStart() removes all the blank space within the string
const userEmail = '                     eddytheeagle@gmail.com';
const userEmail2 = 'johhnydeeeee@gmail                        ';
console.log(userEmail.trimStart());
console.log(userEmail2.trimStart());

// fromEntries
userProfiles = [['commanderTom', 23], ['derekZealander',40], ['hansel', 18]];
const obj = Object.fromEntries(userProfiles); // this converts the array into an object with values associated
Object.entries(obj); // this is what it is in es8, it converts an object into arrays.

// try catch

try{
    gg+'hi';
}
catch{
    console.log('you messed up');
}