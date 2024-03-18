// console.log(66+67);

// VARIABLES: let, const, var

// let firstNumber = 66;
// let secondNumber = 77;
// let sum = firstNumber + secondNumber;
// console.log(sum);

// let myName = "JavaScript";
// const age = 25;
// var job = "tester";

// myName = "Java"
// console.log(myName + '. I am ' + age);

// // VAR BY DEFAULT IF WE DON'T SET VERIABLE TYPE

// address = 'USA';
// console.log(address);

// myName = "Poop"
// console.log (myName);

// let Math = 7;
// console.log(Math.max(5, 77, 100, -555555));


// console.log(Math);

// let two = 20000000;

// console.log(Math.max(5, 2, 77, 100, two, -500000))


// NUMBERS

// console.log(1e500); // infinity
// // overfillied 1*10^500 

// console.log(0.1+0.2 === 0.3); //is it true? = false

// console.log(0.1+0.2); // 0.30000000000000004

// console.log(1234/0); // division by 0 is not an error, it's INFINITY

// console.log(0/0 === 0/0); //false

// console.log(0/0); // =NaN

// console.log(NaN === NaN); // false, as NaN not equals to anything

// console.log(null >= 0);

// console.log(null === 0);

// console.log(null > 0);

// STRINGS

// let letter = "letter";
// console.log(letter);

// let digit = "digit";
// console.log(digit);

// let mySymbols = "/'"; // ecran
// console.log(mySymbols);

// let name1 = 'Vasia';
// let name2 = 'Vania';
// console.log (name1 > name2);


// console.log(50 +"50")

// IF STATEMENTS

// let age = 99;
// if(age <21) {
//     console.log("Buy only non alco");
// } else {
//     console.log("Let's drink!");
// }

// let x = 7
// let y = 4
// if (x <y) {
//     console.log("A");
// } else {
//     console.log ("B");
// }

// let year = 2024;
// if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {

// console.log(‘Год Високосный’);

// } else {

// console.log (‘Год самый обычный’);

// };
// let person = “Student”;
// let always = “Говорить без ограничений”;
// let q_a = “Говорить во время сессии Вопрос - Ответ”

// // обычный условный оператор
// let lectureSpeaking;
// if (person === ‘teacher’) {
// lectureSpeaking = always;
// } else {
// lectureSpeaking = q_a;
// };
// // используем тернарный оператор

// const lectureSpeaking = person === ‘teacher’ ? always : q_a;
// let person = “Student”;
// let always = “Говорить без ограничений”;
// let q_a = “Говорить во время сессии Вопрос - Ответ”

// обычный условный оператор
// let lectureSpeaking;
// if (person === ‘teacher’) {
// lectureSpeaking = always;
// } else {
// lectureSpeaking = q_a;
// };

// let isAble = age < 21 ? «Выбирай безалкогольные напитки!»
// : «Можешь выбирать любые напитки»

// // SWITCH OPERATOR///////////////////////////////////

// let myLanguage = “Russian”;
// switch (myLanguage) {
// case ‘English’:
// console.log(‘Hello!’);
// break;
// case ‘Spanish’:
// console.log(‘Hola!’);
// break;
// case ‘German’:
// console.log(‘Guten Tag!’);
// break;
// case ‘French’:
// console.log(‘Bon Jour!’);
// break;
// case ‘Russian’:
// console.log(‘Привет!’);
// break;
// default:

// console.log(‘I’m sorry, I don’t speak ’ + myLanguage );

// };