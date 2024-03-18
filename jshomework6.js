/**Задача. -----------------------
Создание простого конструктора: Создайте конструктор Person, который принимает параметры name и age, и создает объекты, представляющие людей. Каждый объект должен иметь метод greet, который выводит приветствие с именем и возрастом этого человека.
Изучение прототипов: Расширьте предыдущий пример, добавив метод celebrateBirthday в прототип Person, который увеличивает возраст человека на единицу.
*/


// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// const yuliya = new Person("Yuliya", 33);
// console.log(yuliya);

// Person.prototype.greet = function() {
//     return `Hello ${this.name} , ${this.age} `;
// }

// console.log(yuliya.greet());

// Person.prototype.celebrateBirthday = function() {
//     return this.age + 1;
// }

// console.log(yuliya.celebrateBirthday());



/**5. Создать конструктор объекта Testing, который обладает 7 принципами тестирования, и 4 типа тестирования обладают этими свойствами – 7-ью принципами тестирования из Силлабуса 4.0. Выведите в консоль текст, подтверждающий это. Используя данный конструктор можно создавать конкретный экземпляр тестирования программного продукта.
 */

function Testing() {
    this.principle1 = "Testing shows presence, not absence of defects.",
    this.principle2= "Exhaustive testing is impossible; focus on techniques.",
    this.principle3= "Early testing saves time and money; start ASAP.",
    this.principle4= "Defects cluster together; use Pareto principle for risk.",
    this.principle5= "Tests wear out; modify existing, write new ones.",
    this.principle6= "Testing is context dependent; no universal approach.",
    this.principle7= "Absence-of-defects fallacy; validate, not just verify."

}

 let type1 = new Testing();
 let type2 = new Testing();
 let type3 = new Testing();
 let type4 = new Testing();

 console.log(type1);
 
 


