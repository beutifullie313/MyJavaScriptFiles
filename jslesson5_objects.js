const arr1 = [1,2,3];
const arr2 = arr1;
arr1.push('a');

console.log(arr2); // both arrays have been changed

let obj = {};

const guitar = {};

console.log(typeof obj) // object

obj = "Hello";

console.log(typeof obj); // string

// guitar = 15;

guitar.bodyColor = "black"; // object

console.log(typeof guitar); // not possible, it was a constanta

guitar.tune = function(){};

console.log(guitar);// { bodyColor: 'black', tune: [Function (anonymous)] }

Number("15") // object number
String // object string

//creating of object:

const meta = {
    for:1,
    return:2,
    let:3

}

console.log(meta.for + meta.let + meta.return); //6

const person1 = new Object;
person1.feet = 2;
person1.name = "Olga";
person1.hair = "black";

console.log(person1); //all parameters
console.log(person1.hair); //black

//CHANGE PARAMETERS:

guitar.bodyColor = "green";
console.log(guitar); // from black turned to green

console.log(person1["name"]); // = console.log(person1.name)

let key = "lips";
person1[key] = 2; // add new parameter with argument

console.log(person1);//{ feet: 2, name: 'Olga', hair: 'black', lips: 2 }

//OBJECT INSIDE OBJECT

const personBoy = {
    fullName: {
        firstName: "John",
        lastName: "davis",
    },
    age: 20
    
}

console.log(personBoy.fullName.firstName) //John
console.log(personBoy["fullName"]["firstName"]) // John =console.log(personBoy.fullName.firstName)

delete personBoy.age; //delete parameter

console.log(personBoy.age);

//THIS:

let sandwich ={
    meat: "",
    cheese: "",
    bread: "",
    condiment: "",

    makeSandwich: function(meat, cheese, bread, condiment){
        sandwich.meat = meat;
        sandwich.cheese = cheese;
        sandwich.bread = bread;
        sandwich.condiment = condiment;

        let mySandwich = sandwich.bread + ", " + sandwich.meat + ", " + sandwich.cheese + "," + sandwich.condiment

        return mySandwich;
            
        }
    }

    console.log(sandwich.makeSandwich); //[Function: makeSandwich]
    console.log(sandwich.makeSandwich("ham", "cheddar", "wheat", "mayo")); 

    // BETTER WAY

    sandwich ={
        meat: "",
        cheese: "",
        bread: "",
        condiment: "",
    
        makeSandwich: function(meat, cheese, bread, condiment){
            this.meat = meat;
            this.cheese = cheese;
            this.bread = bread;
           this.condiment = condiment;
    
            let mySandwich = this.bread + ", " + this.meat + ", " + this.cheese + "," + this.condiment // this order will be printed
    
            return mySandwich;
                
            }
        }
    
        console.log(sandwich.makeSandwich); //[Function: makeSandwich]
        console.log(sandwich.makeSandwich("ham", "cheddar", "wheat", "mayo")); // = order of the params makeSandwich: function(meat, cheese, bread, condiment)



        // ARROW Function:

        function myFunc(theObject){
            theObject.name = "Toyota";
        }

        const myCar = {
            make: "Honda",
            model: "Accord",
            year: 1998
        };

        let x, y;

        x = myCar.make; // x = "Honda"

        console.log(x);

        myFunc(myCar);// this function will change the parameter

        y = myCar.make; // y = "Toyota" , parameter has been changed by function

        console.log(y);

        let carFunc = function(theObject){
            theObject.name = "Niva";

        }

        carFunc(myCar);

        console.log(myCar);

        let arrowFunc = theObject => theObject.name = "BMW";
        arrowFunc(myCar);

        console.log(myCar);

        let arrowEmpty = () => "Hello"


        //SIMPLIFYING 

        //1. FULL SYNTAX

        function square (num1, num2){
            return num1 * num2;
        }

        console.log(square(5,10));

        //2. SHORTER

        let square2 = function(num1, num2){
            return num1 * num2;
        }

        console.log(square2(5,10));

        //3. MORE SHORTER ARROW FUNCTION

        let arrowSquare = (num1, num2) => {
            return num1 * num2;
        }

        console.log(arrowSquare(5,10));

        ////4. MORE SHORTER ARROW FUNCTION
        let arrowSquare2 = (num1, num2) => num1 * num2;

        console.log(arrowSquare2(5,10));



    








