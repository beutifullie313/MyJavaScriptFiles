// let a = 2 * (3 - 1);
// let b = 6-2;
// console.log (a == b);

// (5 < 2 && 3 > '3'); // false js treats them both as number 3
// (5 > 2 && 3 == '3'); // true as == treats as meanings 3 = 3
// (5 < 2 && 3 > '3');

// let olyaApples = 20;
// let mashaApples = 20/2;
// console.log(olyaApples > mashaApples); //true

// let str = "I like Java Script";
// console.log(str.indexOf('J'));
// console.log(str.substring(7,11)) // starting with this symbol and till the end

//HOMEWORK03 REVIEW FROM TATSIANA:

// +Задача 1 Напишите последовательность команд, в результате которых
// переменные х и у обменяются своими значениями. Выведите значения переменных х и у в консоль. Используйте 2 способа
// SWAP THE VARIABLE VALUES:

// let x = 10;
// let y = 20;


// WAY1:
// temp = x; // temporary variable not to 
// x = y;
// y = temp;

// WAY 2:

// x = x + y;
// y = x - y;
// x = x - y;
 

// console.log(x);
// console.log(y);


// +Задача 2 Create variables for the names with age: Tom, Sam, Jack, Ted.
//  Tom is 16, each friend is 2 years older, starting from Tom in order.

//  a)Count the age of each person;

// b) Insert the names with the age to the string, using concatenation and ${}:
// “Tom is - 16 years old, Sam is - …. years old, Jack is … years old,
//  Ted is … years old. And the total of our age is ….years old”.

//  c) Find out what is the Unicode Value of the 1st letter of the name,
// and add the total to the string: “The total of the Unicode values of
//  the 1st letter of the all names is ….!”.

let Tom = 16;
let Sam = Tom + 2;
let Jack = Sam + 2;
let Ted = Jack + 100;// now we know all their ages
let total = Tom + Sam + Jack + Ted // their total age is 174

console.log(`Tom's age is ${Tom}, Sam's age: ${Sam},Jack's age: ${Jack},Ted's age: ${Ted}. And the total of our age is ${total} years old `); //just print their ages and total

let names = ["Tom", "Sam", "Jack", "Ted"]; // array of names


for (let i = 0; i < names.length; i++) { // loop for each name
        let firstLetter = names[i][0]; // get the first letter of the name
        console.log(firstLetter.toString());// print all first letters T S J T

        let sumOfUnicode = 0; // Variable to store the sum of Unicode values

        for (let i = 0; i < names.length; i++) { // Loop for each name
            let firstLetterUnicode = names[i].charCodeAt(0); // Get the Unicode value of the first letter
            console.log(firstLetterUnicode); // print each first letter Unicode: 84 83 74 84
            sumOfUnicode += firstLetterUnicode; // Add the Unicode value to the total sum
        }
        
        console.log(`The total of the Unicode values of the first letter of all names is ${sumOfUnicode}!`);
    }

// function position(letter){
//     const alphabet = "abcdefghijklmnopqrstuvwxyz";
//       return "Position of alphabet: " + (alphabet.indexOf(letter) + 1)
//     }

//     // REVERSE A STRING

//     function solution(str){
//         return str.split("").reverse().join("");
//       }

//       //https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript

//       function warnTheSheep(queue) {
//         let array = queue.reverse();
//         if (array[0] == 'wolf'){
//           return "Pls go away and stop eating my sheep"; // if wolf is on the first position
//            sheepPosition = array.indexOf('wolf');
//           return `Oi! Sheep number ${sheepPosition} ! You are about to be eaten by a wolf!`;
//       }
        












// REVIEW 2/14

// str = "Hello World";

// console.log(str.length);
// <=str.length -1 = < str.length
// for (let i = 0; i < str.length; i++) {
// //     console.log(str[i]); // [i] = current element
// //  } 
//     console.log(i); //current index
//  } 

// // inversed order??????????

// for (let i = 11; i > str.length; i--){
// console.log(i);
//}


// // console.log(str.indexOf("w")); // index of all letters W
// for (let i = 0; i < str.length; i++){
//     if(str[i] == "W"){
//         console.log (i);
//     }
// }

// // output elements with even indexes:

// for(let i = 0; i < str.length; i++){
//     if(i %2 === 0) {
//         console.log(str[i])
//     }
// }

// MULTIPLY ALL ELEMENTS IN ARRAY:

// let arrayNumber = [1,2,3,10];
// let mult = 1 // multiplication always start with 1 not to multiply on 0
// for( let i = 0; i < arrayNumber.length; i++){
//    console.log(arrayNumber[i]);
//    mult *= arrayNumber[i]; 
// }


// console.log(mult);

// ADD ELEMENTS WITH EVEN ELEMENT:

// let arrayNumber = [1,2,3,10,20,100];
// let sum1 = 0;

// for( let i = 0; i < arrayNumber.length; i++){
//   if(i % 2 === 0) {
//     sum1 += arrayNumber[i]
//   } 
// }

// console.log(sum1);

// ADD EVEN ELEMENTS IN ARRAY:


// let arrayNumber = [1,2,3,10,20,100]; //EVEN ELEMENTS: 2,10,20,100
//                 // 0 1 2  3  4   5    // EVEN INDEXES: 0,2,4
// let sumEven = 0;

// for( let i = 0; i < arrayNumber.length; i++){
//   if(arrayNumber[i] % 2 === 0) {
//     sumEven += arrayNumber[i]
//   } 
// }

// console.log(sumEven);

