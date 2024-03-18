// function addA(aString){
//     aString += "a";
//     return aString;
// };

// addA('JavaScript');
// console.log(addA('JavaScript'));

// // ---------------------------------------- FUNCTION-----------------------------
// // function nameFunction () { //creating a function 1
// //     //code
// // };

// let function = new Function(){ //creating a function 2
//     //code
// };

// nameFunction(); // calling a function

// function myFunction (parameters)

// -------today date -------------------

function getTheDate(){
    let rightNow = new Date();
    console.log(rightNow.toDateString());
}

getTheDate();

function getHello(){
    return 'Hello!'
}

let helloText = getHello();

console.log(helloText);

function getCir (){
    let radius = 12;
    return 2 * Math.PI * radius **2;
}

console.log(getCir());

// function with parameters -----------------------------------------------

function addNumbers(numbersToAdd){
    let sum = 0;
    for (oneNumber in numbersToAdd) { // this is the short way of loop
        sum += numbersToAdd[oneNumber]; // it doesn't need the end limit, always goes i++

    }
    return sum;
}

let myNumbers1 = [2,4,2,7];
let myNumbers2 = [3333, 222,111];
let myNumbers3 = [777, 555,777, 555];

let sum1 = addNumbers(myNumbers1);
let sum2 = addNumbers(myNumbers2);
let sum3 = addNumbers(myNumbers3);

console.log(`sum1 = ${sum1}`);
console.log(`sum2 = ${sum2}`);
console.log(`sum3 = ${sum3}`);

// function myTacos(meat, produce){ //255 parameters max 
//     // code
// };
// myTacos("Beef", "onion");
// console.log(meat);

function addToMyNumbers (number1, number2) {
    number1++;
    number2++;
    console.log(`number1: ${number1}`);
    console.log(`number2: ${number2}`);
}
let number1 =3;
let number2 = 12;

addToMyNumbers(number1,number2);

console.log(`original number1: ${number1}`);
console.log(`original number2: ${number2}`);

function welcome(yourName){
    if(typeof yourName === `undefined`){ // kosye kovychki
        yourName = 'friend';
    }
    console.log(`Hello, ${yourName}`);
}

welcome('Yuliya');

function welcome(yourName = 'Friend'){
    console.log(`Hello, ${yourName}`);
}

welcome();

function flexibleWelcome(){ //no parameters, you can add how many you want
    let welcome = "Welcome ";
    for(let i = 0; i < arguments.length; i++) {
        welcome += arguments[i] + ' ';
    }
    return welcome
}
console.log(flexibleWelcome('Mitrofanov', "Mitrofan", "Mitrofanovich"));

function flexibleWelcomeRest(...names){ //treats as array : spread operator!!!!!!!!!!!!!!!!!!!!!!!
    let welcome = "Welcome ";
    for(let i = 0; i < names.length; i++) {
        welcome += names[i] + ' ';
    }
    return welcome
}
console.log(flexibleWelcomeRest('Mitrofanov', "0", "Mitrofanovich"));

// ANONIMOUS FUNCTION 
let doTheThing = function(thingToDo){
    console.log('I will do: ' + thingToDo);

}
doTheThing('sleep');
doTheThing('play');

function greet(){
    console.log('Hello, world');

}

function greet(){
    console.log('Hello,world');
}

let sayGoodbye = function(){
    console.log('Goodbye');
}
greet();
sayGoodbye();

sayGoodbye = function(){
    console.log('Poka');
};

sayGoodbye();

//RECURSION-------------------------------------------------

function squareItUp(startingNumber){
    let square = startingNumber * startingNumber;

    if (square > 1000000){
        console.log(square);
    } else {
        squareItUp(square);
        }
}

squareItUp(1000000);
// what if we have 0, 1 or negative? => infinity

function squareItUp(startingNumber){
    // condition of ending function, if values are invalid
    if((typeof startingNumber != 'number') || (startingNumber <= 1)){
        return -1; // = exit from function
    }
    square = startingNumber * startingNumber;

    if (square > 1000000){
        console.log(square);
    } else {
        squareItUp(square);
        }
}

squareItUp(2);
squareItUp(0);
squareItUp(-1);
squareItUp(5022111);

// FUNCTIONS INSIDE FUNCTIONS

function turnIntoMartian(myName) {

    function recallName (myName) {
        let martianName = myName + "Martian";
        return martianName;
    }

    let martianName = recallName(myName);
    console.log(martianName);
}
turnIntoMartian();