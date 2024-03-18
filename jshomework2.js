// let text = "Knowledge of built-in JavaScript methods speeds up a tester's work."
// console.log(text.length);
// Методы:
// console.log(text.charAt(1));
// console.log (text[1]);
// console.log (text.charAt(text.length - 1));

// // извлечение подстроки:

// console.log (text.substring(1, 4)); 
// console.log (text.substr(1, 3)); 
// console.log (text.slice(1, 4));
// console.log (text.slice(-3));
// console.log (text.indexOf('l')); 
// console.log (text.lastIndexOf('l')); 
// console.log (text.split(","));
// console.log (text.replace('l',"L")); 
// console.log (text.replaceAll("l", "L")); 
// console.log (text.toUpperCase());
// console.log (text.toLowerCase());

// Исправьте текст в соответствии с глосарием ISTQB:

//  testing – The process within the software development lifecycle that evaluates the quality of a component or system and related work products.
// wrongEnglishText = “testing – The process //test within the //objective software development //The lifecycle //purpose that evaluates //for the //testing quality of a component or system and related work products.”
// Используйте переменные, методы для строковых типов данных.

let ISTQB = "Testing is the process within the software development lifecycle that evaluates the quality of a component or system and related work products.";
let wrongText = "Testing is the process test within the objective software development The lifecycle purpose that evaluates for the testing quality of a component or system and related work products."

wrongText = ISTQB;
// console.log(wrongText);

let correctText = wrongText.replaceAll(wrongText,ISTQB);
console.log(correctText);
testing – The process within the software development lifecycle that evaluates the quality of a component or system and related work products.
