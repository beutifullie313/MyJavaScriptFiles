// let a = 2;
// let b = 3;
// let result = (a + b)/2;
// console.log(result);

// let a = 8;
// let b= 5;
// let perimeter = (a + b) * 2;
// console.log (perimeter);

// bmi = weight/heigth**2;

// let weight = 54;
// let heigth = 158;
// let bmi = (weight/heigth**2);
// console.log(bmi);

// Напишите программу, 
// которая дает возможность купить билет в кино на взрослый сеанс 
// только теm, кто старше 16 лет

// let age = 18;
// if(age >= 16){
// console.log("Welcome to the cinema")
// } else {
//     console.log("You're not allowed");
// }

// about BODYBUILDERS
// let weight = 101;
// if(weight < 10){
//     console.log("Ameba");
// } else if(weight >=10 && weight < 30){
//     console.log("Dryzsh")
// } else if(weight >= 30 && weight < 50){
//     console.log("Kachok")
// } else if(weight >= 50 && weight < 100){
//     console.log("Mashina")
// }else("Biorobot");
// // } else if(weight >=100){
//     console.log("Biorobot")

// HOMEWORK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Задача 1
// Напишите программу для бара-автомата. 
// Клиент вводит имя Name и возраст age и получает напиток. 
// Если клиент моложе 21 года, то выводится строка “Возьмите стакан сока”, 
// если клиенту 21 или больше,  
// выводится строка “Могу предложить бокал вина”, если больше 80-ти,выводится строка “Может, кефир?”

// let name = 'Yuliya';
// let age = 80;
// if (age < 21){
//     console.log("Take a cup of juice");
// } else if (age > 21 && age < 80) {
//     console.log('Могу предложить бокал вина');
// } else {
//     console.log('Может, кефир?');
// }


// Задача 2.
// Вычислить BMI = вес(кг)/рост(м)*2 и вывести комментарии: 
// Underweight (Below 18.5) - выводит надпись “Мало каши ел(а) 
// • Healthy Weight (18.5 - 24.9) выводит надпись “Молодец! Так держать!”
// • Overweight (25.0 - 29.9) выводит надпись” А тортик лучше отдать соседке” 
// • Obesity (30.0 and Above) выводит надпись “С завтрашнего дня - на воде и огурцах!”

// let weight = 18.5;
// let height = 1.58;
// let BMI = weight / height ** 2;


// if (BMI < 18.6){
//     console.log("Мало каши ел(а)");
// } else if (BMI >= 18.5 && BMI <= 24.9) {
//     console.log('Молодец! Так держать!');
// } else if (BMI >= 25.0 && BMI <= 29.9) {
//     console.log('А тортик лучше отдать соседке');
// } else if (BMI >= 30.0) {
//     console.log('С завтрашнего дня - на воде и огурцах!');
// }

// SOLVE WITH SWITCH OPERATOR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// switch (true){
//     case BMI < 18.5:
//         console.log("Мало каши ел(а)");
//         break;
//         case BMI >= 18.5 && BMI <= 24.9:
//         console.log('Молодец! Так держать!');
//         break;
//         case BMI >= 25.0 && BMI <= 29.9:
//         console.log('А тортик лучше отдать соседке');
//         break;
//         case BMI >= 30.0:
//         console.log('С завтрашнего дня - на воде и огурцах!');
//         break;

// Задача 3
// Напишите программу для расчета стоимости билетов. 
// Для пассажиров старше 18 лет- полная цена, 
// для младенцев младше 2 лет - 10% стоимости, 
// для детей от 2-х до 18ти лет - 50 % стоимости, 
// для пенсионеров старше 65 лет - 60% стоимости.

let age = 65;
let ticketPrice = 100;

if (age > 18 && age < 65){
    console.log(`adult ${ticketPrice}`);
} else if (age < 2){
    console.log(`baby ${ticketPrice*0.1}`);
} else if(age >= 2 && age <= 18){
    console.log(`children ${ticketPrice*0.5}`);
} else if(age >= 65){
    console.log(`retired ${ticketPrice*0.6}`);
}



