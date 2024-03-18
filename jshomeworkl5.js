/**Выполняйте пошагово.
1. Задайте объект room и его параметры:
ключ height со значением 3
ключ tv со значением samsung
ключ big со значением true
2. Выведите в alert или console.log все параметры объекта room по очереди
3. Выведите в alert или console.log тип данных параметра big
4. Выведите в alert или console.log количество символов в строке параметра tv (длину строки)
5. Выведите в alert или console.log результат расчёта: длина строки параметра tv минус 1
6. Поменяйте samsung на все заглавные буквы и выведите в alert или консоль лог.
7. Замените samsung на LG в нашем объекте room
8. 1. Добавьте в наш объект room ещё одну пару ключ-значение: ключ furniture, значение - массив из 3 строк: "table", "chair", "sofa"
2. выведите chair в console.log (путем обращения к массиву)
9. Удалите из нашего объекта room параметр big
10. 1. Задайте переменную paint со значением color
2. Создайте объект room и внутри него задайте ключ: в качестве имени ключа возьмите из переменной paint её значение color, в качестве значения присвойте blue
3. Выведите в консоль лог ключ и его значение blue
*/



const room = {
    height: 3,
    tv: "samsung",
    big: true
}

console.log(room.height);
console.log(room.tv);
console.log(room.big);
console.log(typeof room.big);
console.log(room.tv.length);
console.log(room.tv.length -1);


//6

room.tv = room.tv.toUpperCase();
console.log(room.tv);

//7

room.tv = "LG";
console.log(room.tv);

//8-----------------------------------------------------------

room.furniture = {
    table: "", 
    chair: "soft", 
    sofa: ""
};
console.log(room.furniture.chair);

//9 

delete room.big;
console.log(room);

//10

let paint = "color"
room [paint] = "blue";
console.log(room.color);


/** Создать объект Testing, который обладает 7 принципами тестирования, и 4 типа тестирования обладают этими свойствами – 7-ью принципами тестирования из Силлабуса 4.0. Выведите в консоль текст, подтверждающий это.  */

let testing = {
    principle1: "Testing shows presence, not absence of defects.",
    principle2: "Exhaustive testing is impossible; focus on techniques.",
    principle3: "Early testing saves time and money; start ASAP.",
    principle4: "Defects cluster together; use Pareto principle for risk.",
    principle5: "Tests wear out; modify existing, write new ones.",
    principle6: "Testing is context dependent; no universal approach.",
    principle7: "Absence-of-defects fallacy; validate, not just verify."
}

let testingTypes = {
    type1: ['principle1','principle2','principle3','principle4','principle5','principle6','principle7'],
    type2: ['principle1','principle2','principle3','principle4','principle5','principle6','principle7'],
    type3: ['principle1','principle2','principle3','principle4','principle5','principle6','principle7'],
    type4: ['principle1','principle2','principle3','principle4','principle5','principle6','principle7'], // values are in braces ' '

};


for (let type in testingTypes) {
    console.log("Тип тестирования:", type);
    console.log("Принципы тестирования:");
    
    for (let i = 0; i < testingTypes[type].length; i++){
    let principle = testingTypes[type][i];
    console.log("- " + testing[principle]);
}
}



// FROM LAURA SOLUTION:

/*
Создать объект Testing, который обладает 7 принципами тестирования, и 4 типа тестирования обладают этими свойствами – 7-ью принципами тестирования из Силлабуса 4.0. Выведите в консоль текст, подтверждающий это.

Вариант 1 решения задачи:
*/

/*
const Testing = {
    principles: {
        "1": "Тестирование позволяет идентифицировать дефекты.",
        "2": "Избранное содержание тестирования может быть планируемым и непредвиденным.",
        "3": "Полное тестирование невозможно.",
        "4": "Тестирование показывает наличие дефектов, но не их отсутствие.",
        "5": "Скопированные тесты воспроизводят те же самые дефекты.",
        "6": "Тестирование обучает нас о продукте.",
        "7": "Конечно, вы можете получить продукт, который и без тестирования выглядит так, как будто он работает."
    },
    types: {
        unit: ["1", "2", "4", "6"],
        integration: ["1", "2", "4", "6"],
        system: ["1", "2", "4", "6"],
        acceptance: ["1", "2", "4", "6"]
    }
};

// Выводим подтверждающий текст
console.log("Объект Testing обладает следующими принципами тестирования:");

for (const principle in Testing.principles) {
    console.log(`- Принцип ${principle}: ${Testing.principles[principle]}`);
}

console.log("\nКаждый из 4 типов тестирования обладает следующими принципами:");

for (const type in Testing.types) {
    console.log(`- Тип ${type} тестирования: ${Testing.types[type].map(principle => `Принцип ${principle}`).join(", ")}`);
}
*/

/*
 код создает объект `Testing` с принципами тестирования и типами тестирования, а затем выводит текст в консоль, подтверждающий соответствие условиям задачи.
 
 
Вариант 2 решения задачи: 
 */
/*
const Testing = {
    principles: {
        presenceOfDefects: "Testing shows the presence, not the absence of defects.",
        exhaustiveTesting: "Exhaustive testing is impossible.",
        earlyTesting: "Early testing saves time and money.",
        defectsCluster: "Defects cluster together.",
        testsWearOut: "Tests wear out.",
        contextDependent: "Testing is context dependent.",
        absenceOfDefectsFallacy: "Absence-of-defects fallacy."
    },
    testTypes: {
        functional: "Functional testing evaluates the functions that a component or system should perform.",
        nonFunctional: "Non-functional testing is the testing of 'how well the system behaves'.",
        blackBox: "Black-box testing is specification-based and derives tests from documentation external to the test object.",
        whiteBox: "White-box testing is structure-based and derives tests from the system's implementation or internal structure (e.g., code, architecture, work flows, and data flows)."
    }
};

// Вывод в консоль
console.log("Testing Principles:");
for (const principle in Testing.principles) {
    console.log(`${principle}: ${Testing.principles[principle]}`);
}

console.log("\nTest Types:");
for (const type in Testing.testTypes) {
    console.log(`${type}: ${Testing.testTypes[type]}`);
}
*/

// Вариант 3 решения задачи:

const Testing = {
    principles: {
        presenceOfDefects: "Testing shows the presence, not the absence of defects.",
        exhaustiveTesting: "Exhaustive testing is impossible.",
        earlyTesting: "Early testing saves time and money.",
        defectsCluster: "Defects cluster together.",
        testsWearOut: "Tests wear out.",
        contextDependent: "Testing is context dependent.",
        absenceOfDefectsFallacy: "Absence-of-defects fallacy."
    },
    testTypes: {
        functional: "Functional testing evaluates the functions that a component or system should perform.",
        nonFunctional: "Non-functional testing is the testing of 'how well the system behaves'.",
        blackBox: "Black-box testing is specification-based and derives tests from documentation external to the test object.",
        whiteBox: "White-box testing is structure-based and derives tests from the system's implementation or internal structure (e.g., code, architecture, work flows, and data flows)."
    },
    // Метод для вывода всех принципов тестирования
    printPrinciples() {
        console.log("Testing Principles:");
        for (const principle in this.principles) {
            console.log(`${principle}: ${this.principles[principle]}`);
        }
    },
    // Метод для вывода всех типов тестирования
    printTestTypes() {
        console.log("\nTest Types:");
        for (const type in this.testTypes) {
            console.log(`${type}: ${this.testTypes[type]}`);
        }
    }
};

// Вызов методов для вывода информации в консоль
Testing.printPrinciples();
Testing.printTestTypes();

// Вариант 4 решения задачи:

const Testing = {
    principles: {
        presenceOfDefects: "Testing shows the presence, not the absence of defects.",
        exhaustiveTesting: "Exhaustive testing is impossible.",
        earlyTesting: "Early testing saves time and money.",
        defectsCluster: "Defects cluster together.",
        testsWearOut: "Tests wear out.",
        contextDependent: "Testing is context dependent.",
        absenceOfDefectsFallacy: "Absence-of-defects fallacy."
    },
    functionalTesting: function() {
        console.log("Functional testing evaluates the functions that a component or system should perform.  It has some principles: ");
        for (const principle in this.principles) {
            console.log(`${principle}: ${this.principles[principle]}`);
        }
    },
    nonFunctionalTesting: function() {
        console.log("Non-functional testing is the testing of 'how well the system behaves'. It has some principles: ");
        for (const principle in this.principles) {
            console.log(`${principle}: ${this.principles[principle]}`);
        }
    },
    blackBoxTesting: function() {
        console.log("Black-box testing is specification-based and derives tests from documentation external to the test object.  It has some principles: ");
        for (const principle in this.principles) {
            console.log(`${principle}: ${this.principles[principle]}`);
        }
    },
    whiteBoxTesting: function() {
        console.log("White-box testing is structure-based and derives tests from the system's implementation or internal structure (e.g., code, architecture, work flows, and data flows).  It has some principles: ");
        for (const principle in this.principles) {
            console.log(`${principle}: ${this.principles[principle]}`);
        }
    }
};

// Пример вызова функции и вывода свойств - принципов тестирования
Testing.functionalTesting();


 /****************************************************************************************************
Testing Principles
1. Testing shows the presence, not the absence of defects.
2. Exhaustive testing is impossible.
3. Early testing saves time and money.
4. Defects cluster together.
5. Tests wear out.
6. Testing is context dependent.
7. Absence-of-defects fallacy.

Test types:
1. Functional testing evaluates the functions that a component or system should perform.
2. Non-functional testing is the testing of “how well the system behaves”.
3. Black-box testing is specification-based and derives tests from documentation external to the test object.
4. White-box testing (see section 4.3) is structure-based and derives tests from the system's implementation or internal structure (e.g., code, architecture, work flows, and data flows).











