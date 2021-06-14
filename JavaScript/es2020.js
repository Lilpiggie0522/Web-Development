// bigint => bigint is a new type just like boolean and ints

typeof 1233333333333333312983902183912222222312312312312n;

// add letter 'n' after a number then the type becomes bigint
// bigint is used to do calculations once the number you are trying to do calculation with goes beyond the maximum safe number of javascript!
// Number.MAX_SAFE_INTEGER; with n at the back of a number, the calculation can be performed and data type automatically changes to bigint

// optiaonal chaining operator

let will_pokemon = {
    pikachu:{
        species:'Mouse-pokemon',
        height:'0.4',
        weight: 6,
    }
};

let andrei_pokemon = {
    pikachu:{
        species:'Mouse-Pokemon',
        height: '0.8',
        weight: 30,
    }
}
// if not using chaining operator:
let weight = will_pokemon.pikachu.weight;

if(andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight){
    let weight_2 = andrei_pokemon.pikachu.weight;
    console.log(weight_2);
}
else{
    let undefinedWeight2 = undefined;
    console.log(undefinedWeight2);
}

// while using chaining operator:
let weight3 = andrei_pokemon?.pikachu?.weight;
console.log(weight3)

// nullish coalescing operator:
let andrei_pokemon = {
    pikachu:{
        species:'Mouse-Pokemon',
        height: '0.8',
        weight: 30,
        power: '',
    },
};
let power = andrei_pokemon?.pikachu?.power || 'no power'; // this only checks if the evaluation of the expression gives true, but
// it might not be accurate since an empty string '' would also be evaluated as false and the boolean false also gives false.
console.log(power);

// using nullish coalescing operator: 
let power = andrei_pokemon?.pikachu?.power?? 'no power' // this does not check
// if the expression is falsy, this checks if the value is null or undefined.