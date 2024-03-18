//1. Массив homeArray = [17, “test”, true, [4, 5], ‘last’]

// homeArray = [17, "test", true, [4, 5], 'last'];
// console.log(homeArray.length); // how many elements in array
// console.log(homeArray.toString()); // print array elements into string with commas
// console.log(homeArray.at(1));// method returns an indexed element from an array
// console.log(homeArray.join(" * ")); // joins all array elements into a string = toString, but you can specify the separator
// console.log(homeArray.pop()); //method removes the last element from an array, returns 'last'
// console.log(homeArray.push("blabla"));//method adds a new element to an array (at the end) and returns new array length => 5
// console.log(homeArray.shift()); //removes the first array element, method returns the value that was "shifted out":
// console.log(homeArray.unshift()); //adds a new element to an array (at the beginning), and "unshifts" older elements, returns the new array length
// delete homeArray[o]; // deletes indexed element, leaves undefined holes in the array
// console.log(homeArray);

// let homeArray = [17, "test", true, [4, 5], 'last'];//method creates a new array by merging (concatenating) existing array 
// // let array2 = [1,3,5,67,9];
// // console.log(homeArray.concat(array2));
// console.log(homeArray.copyWithin(2,1));//method copies array elements to another position in an array,Copy to index 2, all elements from index 0
// console.log(homeArray.flat());//method creates a new array with sub-array elements concatenated to a specified depth
// console.log(homeArray.splice(2,1, "Kiwi"));//method can be used to add new items to an array
// console.log(homeArray.slice(2));//slices out a piece of an array into a new array

//Из текста о принципах тестирования из Силлабуса ISTQB 4.0 составить массив и вывести в консоль в виде текста.
// Например, В тестировании различают семь принципов тестирования: ...
// let testingPrinciples = [];
// testingPrinciples [1] = " Testing shows the presence, not the absence of defects. Testing can show that defects are present in the test object, but cannot prove that there are no defects (Buxton 1970). Testing reduces the probability of defects remaining undiscovered in the test object, but even if no defects are found, testing cannot prove test object correctness."; 
// testingPrinciples [2] = "Exhaustive testing is impossible. Testing everything is not feasible except in trivial cases (Manna 1978). Rather than attempting to test exhaustively, test techniques (see chapter 4), test case prioritization (see section 5.1.5), and risk-based testing (see section 5.2), should be used to focus test efforts.";
// testingPrinciples [3] = "Early testing saves time and money. Defects that are removed early in the process will not cause subsequent defects in derived work products. The cost of quality will be reduced since fewer failures will occur later in the SDLC (Boehm 1981). To find defects early, both static testing (see chapter 3) and dynamic testing (see chapter 4) should be started as early as possible.";
// testingPrinciples [4] =  "Defects cluster together. A small number of system components usually contain most of the defects discovered or are responsible for most of the operational failures (Enders 1975). This phenomenon is an illustration of the Pareto principle. Predicted defect clusters, and actual defect clusters observed during testing or in operation, are an important input for risk-based testing (see section 5.2).";
// console.log(testingPrinciples.toString());

// function greet(name) {
//     if (name === undefined) {
//       return "Hello, stranger!";
//     } else {
//       return "Hello, " + name + "!";
//     }
//   }
  

// Задача.
// Создать функцию  getGreetings, возвращающую массив, содержащий строки "Hello, World" на разных языках.

// console . log ( "Hello world ! " ) ; 
// console . log("! Hola mundo ! " ); 
// console . log ( "Hallo wereld ! " ) ; 
// console . log ( "Пpивeт мир!" ) ;
// Создать декларируемую функцию (function Declaration) и функцию выражение (function Expression).

// FUNCTION DECLARATION

// function getGreetings(array){
//   return (console.log(array));
// }

// let  array = ["Hello world ! ", "! Hola mundo ! ", "Hallo wereld ! ", "Пpивeт мир!"];

// getGreetings(array);

// //FUNCTION EXPRESSION


// const getGreetings = function(){
//   return ["Hello world ! ", "! Hola mundo ! ", "Hallo wereld ! ", "Пpивeт мир!"];
// }

// console.log(getGreetings());

// Напишите функцию, которая принимает название типа тестирования, и возвращает определение этого типа тестирования с соответствии с Силлабусом 4.0. International Software Testing Qualifications Board.  

// let function_name = "Black-box testing"

// function sillabus (testing_type){
//   if (testing_type === "Functional testing") {
//     return "Functional testing evaluates the functions that a component or system should perform. The functions are “what” the test object should do. The main objective of functional testing is checking the functional completeness, functional correctness and functional appropriateness. Non-functional testing evaluates attributes other than functional characteristics of a component or system. "

//   } else if(testing_type === "Non-functional testing") {
//     return "Non-functional testing is the testing of “how well the system behaves”. The main objective of nonfunctional testing is checking the non-functional software quality characteristics. The ISO/IEC 25010 standard provides the following classification of the non-functional software quality "
//   } else if (testing_type === "Black-box testing") {
//     return "is specification-based and derives tests from documentation external to the test object. The main objective of black-box testing is checking the system's behavior against its specifications."
//   } 
  
// }

// testing_type = "Functional testing"

// console.log(sillabus(testing_type));




// function sillabus(testing_type) {
//   if (testing_type === "Functional testing") {
//     return "Functional testing evaluates the functions that a component or system should perform";
//   } else if (testing_type === "Non-functional testing") {
//     return "Non-functional testing is the testing of “how well the system behaves";
//   } else if (testing_type === "Black-box testing") {
//     return "Black-box testing is specification-based and derives tests from documentation external to the test object.";
//   }
// }

// let testing_type = "Functional testing";
// console.log(sillabus(testing_type));



// function testType(definition) {

  //     if (definition === 'Functional Testing') {
  //         return "Functional testing evaluates the functions that a component or system should perform.";
  //     }
  //     // else if (
  //     //     definition === 'Non-functional testing' ) {
  //     //     return "Non-functional testing is the testing of “how well the system behaves”. The main objective of nonfunctional testing is checking the non - functional software quality characteristics.";
  //     // } else (
  //     //     return "undefined"
  //     // )
  // }
  // let definition = "Functional testing"
  
  // console.log(testType(definition))







