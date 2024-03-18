"use strict"

const obj = {}; //object

const user = {};

console.log(user.color);//undefined

obj.color = "black";

console.log(obj.color);//black
//or
console.log(obj["color"]);//black

//symbols:

const SIZE = Symbol();
obj.SIZE = 0;
console.log(obj.SIZE);
obj[SIZE] = 8;

console.log(obj[SIZE]);//8
console.log(obj["SIZE"]);//0

for (let key in obj) {
    console.log(`${key} - ${obj[key]}`); //color - black, SIZE - 0
}

const sam = {
    name: "Sam",
    speak(){
        console.log(`${this.name} can speak`)//Sam can speak
        return;
    }
}

sam.speak();

console.log(delete sam.name);//true

//GETTERS AND SETTERS:

/*const obj = {
    get propName(){

    }

    set propName(value){

    }
}
*/

const user1 = {
    name: "John",
    surname: "Doe",

    get fullName(){
        return `${this.name} ${this.surname}`
    },

    //DESTRUCTURAZING OF ARRAY: 

    set fullName(value){
        [this.name, this.surname] = value.split(" "); //into array
    }
}

console.log(user1.fullName); //John Doe

user1.fullName = "Bob Miller";

console.log(user1.fullName);

Object.defineProperty(user1, "job", {
    value: "qa",
    writable: true,
    enumerable: true,
    configurable: true
});

console.log(user1.job);

const user2 = {
    name: "John",
    surname: "Weak",
}

Object.defineProperty(user2, "fullName", {
    get (){
    return `${this.name} ${this.surname}`
    }

    // writable: true,
    // enumerable: true,
    // configurable: true
})

console.log(user2);


// INHERITANCE

const animal = {
    eats: true,
    walk(){
        console.log("Animal walks")
    }

};

const rabbit ={
    jumps: true,
};

rabbit.__proto__ = animal;

console.log(rabbit.eats);
console.log(rabbit.jumps);

rabbit.walk();

//CLASSES

class Person {

    name;
    constructor(name = 'friend') { //default name, if no name is defined
        this.name = name;
    }

    introduceSelf(){
        console.log(` Hi! I'm ${this.name}`) //change name
    }

}

const fekla = new Person();

fekla.introduceSelf();

class Animals {
    constructor(){

    }

    sleep(){
        console.log("Zzzzzz");
    }
}


const animalOne = new Animals();
animalOne.sleep(); //Zzzzzz

//POLYMORPHISM

class Professor extends Person{
    teaches;

    constructor(name, teaches){
        super(name) //from Person
        this.teaches = teaches //from this 
    }

    introduceSelf(){ // method override 
        console.log(`My name is ${this.name}, I will teach you${this.teaches}`)
    }
}

const dunya = new Professor("Dunya", "Java");
dunya.introduceSelf(); //My name is Dunya, I will teach youJava

//INCAPSULATION






