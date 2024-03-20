Задача.
Создайте класс Person и его подкласс Teacher на примере функций Person и  Teacher
 
function Person(first, last, age, gender, interests) {
  this.name = {
    	first,
    	last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}

Все методы определены в прототипе конструктора. Например:

Person.prototype.greeting = function () {
  console.log("Hi! I'm " + this.name.first + ".");
};

Мы хотели создать класс Teacher,  который наследует всех членов от Person, но также включает в себя:
Новое свойство, subject - оно будет содержать предмет, который преподаёт учитель.
Обновлённый метод greeting(), который звучит немного более формально, чем стандартный метод greeting() — более подходит для учителя, обращающегося к некоторым ученикам в школе.
Определение функции-конструктора Teacher()
Первое, что нам нужно сделать, это создать конструктор Teacher() - добавьте ниже следующий код:
function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);
  this.subject = subject;
}

В качестве примечания мы могли бы просто сделать это:

function Teacher(first, last, age, gender, interests, subject) {
  this.name = {
    first,
    last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.subject = subject;
}

Teacher.prototype.greeting = function () {
   let prefix = "";
  if (
    this.gender === "male" ||
    this.gender === "Male" ||
    this.gender === "m" ||
    this.gender === "M"
  ) {
    prefix = "Mr.";
  } else if (
    this.gender === "female" ||
    this.gender === "Female" ||
    this.gender === "f" ||
    this.gender === "F"
  ) {
    prefix = "Mrs.";
  } else {
    prefix = "Mx.";
  }
 console.log(   "Hello. My name is " +
      prefix +
      " " +
      this.name.last +
      ", and I teach " +
      this.subject +
      ".");
}

Но это просто переопределяет свойства заново, а не наследует их от Person(), так что теряется смысл того, что мы пытаемся сделать. Он также занимает больше строк кода.





Задача.
Создайте классы пользователей и администраторов : User and Admin classes.

     В этом задании мы будем использовать частные свойства, чтобы скрыть определенные значения и предотвратить прямой доступ к ним. Доступ к частным свойствам возможен только из объявления класса.

Мы обозначаем частную переменную или функцию символом решетки (#).

     Например, если бы у нас был класс Person с номером социального страхования и функцией для расчета налоговой категории, мы бы не обязательно хотели, чтобы эта информация была общедоступной. Таким образом, мы можем сделать эти поля закрытыми, как в примере ниже:

     class Person {
        #socialSecurityNumber;
    
    
        #calculateTaxBracket() {
    
    
        }
    }

    
    Твое задание 

     Создайте класс пользователя User и класс администратора Admin. Класс Admin расширяет класс User. Класс User имеет общедоступную функцию updatePassword() и частную функцию resetPassword(). В классе Admin есть общедоступная функция deleteUser()  .

Параметры класса User
Parameters for the User class


    username: String
    (private) password: String

Параметры класса администратора

Parameters for the Admin class


    Parameters for the Admin class
username: String
    (private) password: String

Свойства класса Admin

     Следующие свойства также необходимо добавить в класс Admin. Они не являются параметрами.

   isAdmin = true;

Функции класса пользователя User

User class functions


    resetPassword(newPassword): Calls the private function updatePassword  with the new password


    updatePassword(newPassword): Sets the user's password to the newPassword. This is a private function.


     resetPassword(newPassword): вызывает частную функцию updatePassword с новым паролем.
     updatePassword(newPassword): устанавливает пароль пользователя newPassword. Это частная функция.

Функции класса администратора
Admin class functions


    deleteUser(userToDelete): Takes a string, userToDelete  and returns a string message: The user [userToDelete] has been deleted

     deleteUser(userToDelete): принимает строку userToDelete и возвращает строковое сообщение: пользователь [userToDelete] был удален.

Результат
Result


    [testUser, testAdmin]: An array containing an instance of the User  class and an instance of the Admin  class

     [testUser, testAdmin]: массив, содержащий экземпляр класса User и экземпляр класса Admin.

Ограничения

     Пароль должен быть частной переменной
     updatePassword должен быть частной функцией.
     Вы должны использовать ключевое слово Extensions, чтобы создать связь между пользователем и администратором.

Пример 1:
Example 1:
Input: 
*/


const userData = {
    username: "emma",
    password: 'ZRYAK3GSS3wQujr'
};


const adminData = {
    username: "sarah",
    password: 'r5tHZE9DUP1SgTB'
}




константные пользовательские данные = {
     имя пользователя: «Эмма»,
     пароль: 'ZRYAK3GSS3wQujr'
};

константные adminData = {
     имя пользователя: "Сара",
     пароль: 'r5tHZE9DUP1SgTB'
}


Результат:
/*
Result:
*/


[
    User { username: "emma" },
    Admin { username: "sarah", isAdmin: true}
]

[
     Пользователь {имя пользователя: "Эмма"},
     Администратор {имя пользователя: «Сара», isAdmin: true}
]

// Ответ

// Код JavaScript​​​​​‌​‌​‌‌​‌‌‌‌​‌​‌​‌‌‌‌​‌‌‌ ниже
// Измените эти логические значения, чтобы контролировать, видите ли вы
// ожидаемый ответ и/или подсказки.
const showExpectedResult = false;
const showHints = false;


const userData = {
    username: 'emma',
    password: 'ZRYAK3GSS3wQujr'
};


const adminData = {
    username: 'sarah',
    password: 'r5tHZE9DUP1SgTB'
}


const userToDelete = 'carter'


// Your code goes here


class User {


}


class Admin {


}


// Вот как будет называться ваш код.
// Ваш ответ должен быть наибольшим значением в массиве чисел.
// Вы можете отредактировать этот код, чтобы попробовать разные варианты тестирования.


const result= [
    new User(userData.username, userData.password),
    new Admin(adminData.username, adminData.password)
]



✓Тест пройден: данные имени пользователя соответствуют ожидаемым данным.
✓ Тест пройден: данные администратора соответствуют ожидаемым.
✓ Тест пройден: пароль является конфиденциальным.
✓ Тест пройден: пользователь не может удалить другого пользователя.
✓ Тест пройден: администратор может удалить другого пользователя.
✓ Тест пройден: сброс пароля работает должным образом.
