/* Task 1*/
// let mentor = { 
//     course: "JS fundamental", 
//     duration: 3,
//     direction: "web-development" 
// };
// function propsCount(currentObject) {
//     console.log(Object.keys(mentor).length);
// }
// propsCount(mentor);
/* Task 2 */
// const obj = {
//     name: 'Hrihorii',
//     surname: 'Permiakov',
//     age: 29,
//     yearBirth: 1992,
//     gender: 'Male'
// }
// function showProps(obj){
//     console.log( Object.keys(obj));
//     console.log(Object.values(obj));  
// }
// showProps(obj);
/* Task 3 */
// class Person {
//     constructor(name, surname){
//        this.name = name;
//        this.surname = surname; 
//     }
//     showFullName() {
//         this.name + ' ' + this.surname; 
//     }
// }
// class Student extends Person {
//     constructor(name, surname, years){
//         super(name, surname);
//         this.years = years;
//     }
//     showFullName(midleName) {
//       return this.name + ' ' + this.surname + ' ' + midleName;
//     }
//     showCourse(flowYear) {
//         return flowYear - this.years;
//     }  
//     }
//     let stud1 = new Student ('Hrihorii', 'Permiakov', 2009);
//     console.log(stud1.showFullName('Leonidivch'));
//     console.log('Current course:' + stud1.showCourse(2013));  
/* Task 4 */
// class Worker {
//     #experience = 1.2;

//     /**
//      * @param {number} value
//      */
//     set setExp(value) {
//         this.#experience = value;
//     }
//     get showExp() {
//         return this.#experience;
//     }



//     constructor(fullName, dayRate, workingDays) {
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//     }

//     showSalary() {
//         console.log(this.fullName + ' ' + this.dayRate * this.workingDays);
//     }
//     showSalaryWithExperience() {
//         console.log(this.dayRate * this.workingDays * this.showExp);
//     }
// }

// function worker (fullName, dayRate, workingDays){
//  for (let i = 0; i < )
// let work = new Worker(fullName, dayRate, workingDays);
// console.log(work1.fullName);
// work1.showSalary();
// console.log("New experience: " + work1.showExp);
// work1.showSalaryWithExperience();
// work1.setExp = 1.5;
// console.log("New experience: " + work1.showExp);
// work1.showSalaryWithExperience();
// }

// worker (("John Johnson", 20, 23);