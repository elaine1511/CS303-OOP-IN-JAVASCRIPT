// •Use array methods: filter, map, reduce, etc to implement below:
"use strict";
/*
•Question 1: For a given array, sum all the elements which are greater than 20.
•[1, 50, 40, 3, 10] => Print result: 90
*/
let arr = [1, 50, 40, 3, 10];
let result = arr.filter(item => item > 20).reduce((sum, item) => sum + item);

console.log(result);

// •Question 2: For a given String array, return a new array which contains all string, 
// length is greater than and equals to 5, and contains letter ‘a’.

let strArr = ['Every', 'day', 'is', 'a', 'great', 'day', 'for', 'learning', 'to', 'code'];
let arr = strArr.filter(item => {
    return item.length >= 5 && item.includes('a');
});
console.log(arr);

/*
•Question 3:
•Create a constructor function Employee with properties: firstName, lastName, birthdate: Date type, methods: getFullName(), getAge()
•Create an array with a few Employee objects with different firstName, lastName, birthdate.
•Find if there is any employee which age is greater than 20
•Return a String array which contains the full name of employee and born after 2000
*/
function Employee(firstName, lastName, birthdate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthdate = birthdate;
    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    }
    this.getAge = function () {
        // let currentYear = new Date().getFullYear();
        // let birthYear = new Date(this.birthdate).getFullYear();
        // return currentYear - birthYear;
        return new Date().getFullYear() - this.birthdate.getFullYear();
    }
}

let employees = [];
let e1 = new Employee("John", "Smith", "1988-10-10");
let e2 = new Employee("Elaine", "Le", "1984-12-08");
let e3 = new Employee("Anna", "Jones", "2004-02-03");
employees.push(e1, e2, e3);

let findAge = employees.find(item => item.getAge() > 20);
console.log(findAge.firstName);

let result = employees.filter(item => item.birthdate.getFullName() > 2000)
    .map(item => item.getFullName());

console.log(result);
