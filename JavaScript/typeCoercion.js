1 == '1'; // this gives true. Because javascript engine automatically converts '1' to 1 and compare them. 

// type coercion happens when there is == sign, == sign means compare two value, and if they have different types try to coerce one into the same type

1 === '1'; // this gives false as javascript is being explicit and does exactly what its told which is converting two values even with different types.
// always use === sign as == might trick someone and it is not as useful.

if(1){
    console.log(5);// this gives 5 as javascript conerces 1 to true.
}