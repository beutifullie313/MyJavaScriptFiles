// ways of creating objects

const obj = {};
const obj1 = new Object;

//create


console.log(typeof obj);

//objectname.property

obj.name = "John";

obj ["age"] = 25;

//or

let age = "age";
obj [age] = 25;

console.log(obj["name"]);
console.log(obj[age]) // 25
console.log(obj.age); //25

//arr[0]...arr[n]

console.log(obj); //{ name: 'John', age: 25 } = order from first defined parameter to the last defined

obj[55] = "55";

console.log (obj); //{ '55': '55', name: 'John', age: 25 }

//for of , for in

for(key in obj){
    console.log(key); //55, name, age
}

// for(key of obj){
//     console.log(key); //error: obj is not iterable
// }

for(let i=0; i < obj.length; i++){
    console.log(i);
}

obj.name = {
    firstName: "John",
    lastName: "Doe",
};
console.log(obj.name.firstName);

//or

console.log(obj["name"]["lastName"]);

 
obj.name.fullname = function () {this.firstName + " " + this.lastName};

 console.log(obj.name.fullnameName);

 obj.name.fullname = () => {this.name.firstName + " " + this.name.lastName};

 console.log(obj.name.fullnameName);

 const myArr = Object.values(obj);
 console.log(myArr); // in form of array

 let myString = JSON.stringify(obj);

 console.log(myString); //{"55":"55","name":{"firstName":"John","lastName":"Doe"},"age":25}

 let arrString = JSON.stringify(myArr);

 console.log(arrString);


 //prototype

 function Person(first, last, age,eye){ //constructor
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
 }

 const myFather = new Person("John", "Doe", 35, "blue");

 console.log(myFather.firstName);

 const myMother = new Person("Mary", "Doe", 38, "brown");

 console.log(myMother.firstName);

 myFather.nationality = "English";

 console.log(myFather); // + new parameter nationality
 console.log(myMother);// no new parameter nationality

 function Person(first, last, age,eye, country){ //constructor
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "Russian";

 }

 console.log(myFather); // + new parameter nationality English as declared separately
 console.log(myMother);// no new parameter nationality Russian as defined for this Prototype

 //or 

//  Person.prototype.name = 
//  _proto_

 // to get properties of object:

 console.log(myMother.valueOf()); // return all object properties

 Person.prototype.country = "USA"; //add new parameter

 console.log(myMother.country); //USA for all objects
 console.log(myFather.country);//USA for all objects







