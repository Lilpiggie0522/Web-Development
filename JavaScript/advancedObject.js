class Player {
    constructor(name, type){
        console.log(this);
        this.name = name;
        this.type = type;
    }

    introduce(){
        console.log(`Hi I am ${this.name}, I am a ${this.type}`)
    }
}

class Wizard extends Player{
   constructor(name,type){
       super(name,type);// super calls the constructor of the class it is extending from and run it
   }
   play(){
       console.log(`Weee I am a ${this.type}`);
   }
}

const wizard1 = new Wizard('shelly', 'healer');
const wizard2 = new Wizard('Shawn', 'dark magic');


