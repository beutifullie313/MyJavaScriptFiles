class Car {

    constructor(){

    }
}

console.log(typeof Car); //function

let car1 = new Car();
let car2 = new Car();

console.log(car1 instanceof Car) //true
console.log(car1 instanceof Array)//false
console.log(car1 instanceof Object)//true

class Car20{
    #year; //private class

    static getNextVin(){
        return Car20.nextVin++;
    }
    constructor(make,model){
        this.make = make;
        this.model = model;
        this.userGears = ["P", "N", "R", "D"];
        this.userGear = this.userGears[0];
        this.vin = Car20.getNextVin();
    }

    shift(gear){
        if (this.userGears.indexOf(gear) <0){
        throw new Error(console.log(`Wrong gear ${gear}`));
    }
    
    this.userGear = gear;
}

static areSame(car1,car2){
    return car1.vin === car2.vin;
}

static areSimilar(car1, car2){
    return car1.make === car2.make && car1.model === car2.model;
}
}

Car20.nextVin = 0;

const car21 = new Car20("Tesla", "S");
const car22 = new Car20("Tesla", "S");
const car23 = new Car20("Mazda", "3");

console.log(car21.vin);//0
console.log(car22.vin);//1
console.log(car23.vin);//2

car21.nextVin = 99;

console.log(car21.vin); // it hasn't change as static method is working

console.log(Car20.areSimilar(car21,car22)); //true
console.log(Car20.areSimilar(car21,car23)); //false
console.log(Car20.areSimilar(car22,car23));//false

console.log(Car20.areSame(car21,car22));//false
console.log(Car20.areSame(car21,car23));//false
console.log(Car20.areSame(car22,car23));//false



// const car3 = new Car2("Tesla","Model S");
// const car4 = new Car2("Mazda","3");

// car3.shift("D");
// car4.shift("R");

// console.log(car3.userGear);
// console.log(car4.userGear);


class InsurancePolicy{}

function makeInsurable(o){
    o.addInsurancePolicy = function(p){this.InsurancePolicy = p};
    o.getInsurancePolicy = function (){ return this.InsurancePolicy};
    o.isInsured = function () {return !!this.InsurancePolicy};
}

//LINKING CLASSES = IMPURITIES

makeInsurable(Car20.prototype); //liking with classe insurance

const car30 = new Car20();

car30.addInsurancePolicy(new InsurancePolicy()); //mix 2 classes

console.log(car30.isInsured());


for(let properties in car30){ //to show all properties of object: 
    console.log(properties);
    /*
    true
make
model
userGears
userGear
vin
InsurancePolicy
addInsurancePolicy
getInsurancePolicy
isInsured
*/
}





