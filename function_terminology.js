// function map (f, a){ // function head
//     let result = []; // function body
//     let i;// function body
//     for (i=0; i != a.length; i++) {// function body
//     console.log(`a[${i}] = ${a[i]} : ${f(a[i])}`);
//     result[i] = f(a[i]); // argument which is called in function
//     console.log(`result[${i}] = ${result[i]}`);
//     }
//     return result;// function body

// }



// let f = function(x){
//     return x*x*x;
// }
// let numbers = [0,1,2,5,10];
// let cube = map(f, numbers);
// console.log(cube);

// FUNCTION DECLARATION


// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
// https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript
// https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript
// https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript
// https://www.codewars.com/kata/582e4c3406e37fcc770001ad/train/javascript
//https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c/train/javascript  for
//https://www.codewars.com/kata/63f96036b15a210058300ca9/train/javascript index

// let str = ["Hello", "World!"];
//               0        1                          // индексы
var line = 'Hello World! You are Welcome'; // разделить строку по пробелу и записать в массив, 
 let array = ["Hello", "World!", "You", "are", "Welcome"];   //  result                                            // где каждый элемент - строка
// console.log(str);
function newStr(str, letter){
  
  let result = [];
  for (let i=0; i < str.length; i++){   // i - это индекс слова
  
    //  console.log(str[i]);                          // текущий элемент строки - слово
  for (let j=0; j < str[i].length; j++) {         // j - это индекс буквы слова
  if (str[i][j] === letter) {                        // i,j - это буква j для слова i
    resul.push(str[i]);
//  return(str[i][j]);   // выводим букву каждого слова
  }
    
  }
    
  }
 return result;
}

console.log(newStr(line, "l"));
console.log(newStr(array, "l"));
