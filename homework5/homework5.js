/* Task 1*/

 let mentor = { 
     course: "JS fundamental", 
     duration: 3,
     direction: "web-development" 
 };
 function propsCount(currentObject) {
     console.log(Object.keys(mentor).length);
 }
 propsCount(mentor);

/* Task 2 */

    const obj = {
        name: 'Hrihorii',
        surname: 'Permiakov',
        age: 29,
        yearBirth: 1992,
        gender: 'Male'
    }   
    function showProps(obj){
        console.log( Object.keys(obj));
        console.log(Object.values(obj));  
    }  

    showProps(obj);

/* Task 3 */
    class Person {
        constructor(name, surname){
        this.name = name;
        this.surname = surname; 
        }
        showFullName() {
            this.name + ' ' + this.surname; 
        }
    }
    class Student extends Person {
        constructor(name, surname, years){
            super(name, surname);
            this.years = years;
        }
        showFullName(midleName) {
            return this.name + ' ' + this.surname + ' ' + midleName;
        }
        showCourse(flowYear) {
            return flowYear - this.years;
        }  
    }

        let stud1 = new Student ('Hrihorii', 'Permiakov', 2009);

        console.log(stud1.showFullName('Leonidivch'));
        console.log('Current course:' + stud1.showCourse(2013));  

/* Task 4 */
const sortArr = [];
class Worker {
    #experience = 1.2;

    set setExp(value) {
        this.#experience = value;
    }
    get showExp() {
        return this.#experience;
    }

    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName,
        this.dayRate = dayRate,
        this.workingDays = workingDays,
        sortArr.push(this);
    }

    showSalary() {
        console.log(this.fullName + ':' + ' ' + this.dayRate * this.workingDays);
    }
    showSalaryWithExperience() {
        return( `${this.fullName} :  ${this.dayRate * this.workingDays * this.showExp}`);
    }   

    showSalaryExperience() {
        return( this.dayRate * this.workingDays * this.showExp);
    }   
}

let work1 = new Worker('Tom Hardy', 20, 23);
console.log(work1.fullName);
work1.showSalary();
console.log("New experience: " + work1.showExp);
console.log(work1.showSalaryWithExperience());
work1.setExp = 1.5;
console.log("New experience: " + work1.showExp);
let finalyExp1 = work1.showSalaryWithExperience();
console.log(finalyExp1);

let work2 = new Worker('Bret Pitt', 30, 25);
console.log(work2.fullName);
work2.showSalary();
console.log("New experience: " + work2.showExp);
console.log(work2.showSalaryWithExperience());
work2.setExp = 1.5;
console.log("New experience: " + work2.showExp);
let finalyExp2 = work2.showSalaryWithExperience();
console.log(finalyExp2);

let work3 = new Worker('Tom Tomson', 19, 27);
console.log(work3.fullName);
work3.showSalary();
console.log("New experience: " + work3.showExp);
console.log(work3.showSalaryWithExperience());
work3.setExp = 1.5;
console.log("New experience: " + work3.showExp);
let finalyExp3 = work3.showSalaryWithExperience();
console.log(finalyExp3);

let work4 = new Worker('Andy Ander', 24, 26);
console.log(work4.fullName);
work4.showSalary();
console.log("New experience: " + work4.showExp);
console.log(work4.showSalaryWithExperience());
work4.setExp = 1.5;
console.log("New experience: " + work4.showExp);
let finalyExp4 = work4.showSalaryWithExperience();;
console.log(finalyExp4);



console.log ('Sorted solary:')

let sotedSelery = sortArr.sort(function(a, b){
    return a.showSalaryExperience() - b.showSalaryExperience()
});
console.log(sotedSelery);



/* Task 5 */

class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
         return Object.getPrototypeOf(this).constructor.name;
    }    
}

class Triangle extends GeometricFigure{
    constructor(found, height) {
        super();
        this.found = found;
        this.height = height;
    }
    getArea() {
        return 0.5 * this.found * this.height;
    }
    toString() {
          return Object.getPrototypeOf(this).constructor.name;
    }  
}
class Square extends GeometricFigure{
    constructor(side) {
        super();
        this.side = side
    }
        getArea() {
        
            return this.side ** 2;
        }
        toString() {
             return Object.getPrototypeOf(this).constructor.name;  
        } 
}

class Circle extends GeometricFigure{
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    toString() {
         return Object.getPrototypeOf(this).constructor.name;
    } 
}
const geometric = new GeometricFigure();
const figures = [new Triangle(4, 5),  new Square(7), new Circle(5) ];

function handleFigures(figures) {
    let sumArea = [];
    for (let i = 0; i < figures.length ; i++){
            if (figures[i] instanceof GeometricFigure){
                 console.log(geometric.toString() + ': ' + figures[i].toString() + ' - area :' + ' ' + figures[i].getArea());
            }  
            sumArea[i] = figures[i].getArea();     
    }
    function sumArr ( sum, num){
                 return sum + num;
    }
    console.log(sumArea.reduce(sumArr, 0));
}

 handleFigures(figures);