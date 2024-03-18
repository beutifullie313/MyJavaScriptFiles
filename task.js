const text = "Hello, world!";

// Методы строк в JavaScript
const upperCaseText = text.toUpperCase(); // Преобразует строку в верхний регистр
const lowerCaseText = text.toLowerCase(); // Преобразует строку в нижний регистр

// Стрелочная функция для обрезки текста
const truncateText = (str, maxLength) => {
  return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
}

const truncatedText = truncateText(text, 5); // Обрезает текст до 5 символов

// console.log("Upper case:", upperCaseText);
// console.log("Lower case:", lowerCaseText);
// console.log("Truncated text:", truncatedText);

const modifiedText2 = text.toLowerCase().slice(0, 5);
const modifiedText4 = text.slice(0, 5).toLowerCase();
console.log(modifiedText2);
console.log(modifiedText4);

// 2)  const modifiedText2 = text.toLowerCase().slice(0, 5);

// 3)  const modifiedText3 = text.slice(0, 5).toUpperCase();

//  4)  const modifiedText4 = text.slice(0, 5).toLowerCase();