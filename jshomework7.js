/*Задача.
Определите класс Shape. 
Он имеет три свойства: name, sides, и sideLength. 
Этот класс моделирует только фигуры, все стороны которых имеют одинаковую длину, например квадрат или равносторонний треугольник.
Добавьте конструктор в этот класс. 
Конструктор принимает аргументы для свойств name, sides и sideLength и инициализирует их.
Добавьте в класс новый метод calcPerimeter(), который вычисляет ее периметр (длину внешнего края фигуры) и записывает результат в консоль.
Создайте новый экземпляр класса Shape с именем square. 
Дайте name ему square, sides =  и sideLength = 5​
Вызовите свой calcPerimeter() метод в экземпляре, чтобы проверить, записывает ли он результаты вычислений в консоль браузера, как ожидалось.
Создайте новый экземпляр ShapeCalled triangle с name -  triangle и sidesof = 3,  sideLength = 3
Вызовите  triangle.calcPerimeter(), чтобы убедиться, что все работает.
*/

class Shape {
    name;
    sides;
    sideLength;

    constructor(name,sides,sideLength){
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter(){
        let result = this.sides * this.sideLength;
        console.log(result);
        
    }
}

const square = new Shape("Square", 4, 5 )
square.calcPerimeter();

const triangle = new Shape("Triangle", 3, 3);
triangle.calcPerimeter();




/*Задача.
создать Square класс, который наследуется от Shape, и добавляет calcArea()метод, вычисляющий площадь квадрата. 
Также настройте конструктор так, чтобы name свойству Square экземпляров объекта автоматически присваивалось значение square, а sides для свойства автоматически устанавливалось значение 4. Поэтому при вызове конструктора вам нужно просто предоставить свойство sideLength.
Создайте экземпляр класса Square, вызываемого square с соответствующими значениями свойств, и вызовите его методы calcPerimeter() и calcArea(), чтобы показать, что он работает нормально.
*/


class Square extends Shape {
    
    constructor(sideLength){
        super("Square", 4, sideLength); // Call parent class constructor with required arguments
    }

    calcArea(){
        console.log(this.sideLength * this.sideLength);
    }
    
}

const square2 = new Square(4);
square2.calcPerimeter(); //NaN
square2.calcArea(); //NaN


//CODEWARS CLASSES

/*      Classy Classes  
https://www.codewars.com/kata/55a144eff5124e546400005a
2.      Fun with ES6 Classes #1 - People, people, people
https://www.codewars.com/kata/56f7f8215d7c12c0e7000b19
3.      SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes
https://www.codewars.com/kata/56ff9b53140fcca90b000530
*/


