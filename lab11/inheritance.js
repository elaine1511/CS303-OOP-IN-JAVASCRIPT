/*
Question 1:
➢Create an object student using object literal which has
➢Properties: firstName:String, lastName:String, grades: Array
➢Methods:
➢inputNewGrade(newGrade): push newGrade to grades
➢computeAverageGrade(): return average of grades
➢Create an Array with multiple students which are created using Object.create();
➢Then compute the average grade for all students in the array
*/

let student = {
    firstName: "",
    lastName: "",
    grades: [],
    inputNewGrade(grade) {
        this.grades.push(grade);
    },
    computeAverageGrade() {
        return this.grades.reduce((sum, item, index, arr) => sum + item / arr.length, 0);
    }
};

let students = [];

let std1 = Object.create(student);
std1.firstName = "William";
std1.lasttName = "Smith";
std1.grades = [78, 88, 90];

let std2 = Object.create(student);
std2.firstName = "Anna";
std2.lasttName = "Jolie";
std2.grades = [83, 88, 97];

let std3 = Object.create(student);
std3.firstName = "David";
std3.lasttName = "Hong";
std3.grades = [75, 82, 100];

students.push(std1, std2, std3);

let averGrade = students.map(item => item.computeAverageGrade())
    .reduce((sum, item, idex, arr) => sum + item / arr.length, 0);
console.log(averGrade);

// ➢Question 2: Redo the Question 1 using Constructor Function

function Student(firstName, lastName, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
}

let std1 = new Student("William", "Smith", [78, 88, 90]);
let std2 = new Student("Anna", "Jolie", [83, 88, 97]);
let std3 = new Student("David", "Hong", [75, 82, 100]);

Student.prototype.inputNewGrade = function (grade) {
    this.grades.push(grade);
};

Student.prototype.computeAverageGrade = function () {
    return this.grades.reduce((sum, item, index, arr) => sum + item / arr.length, 0);
};

let students = [];
students.push(std1, std2, std3);

let averGrade = students.map(item => item.computeAverageGrade())
    .reduce((sum, item, idex, arr) => sum + item / arr.length, 0);
console.log(averGrade);

/*
Question 3:
➢Add a new method named sort() without parameters in built-in constructor function Array.
It’ll sort all elements in the array in ascending order
*/

Array.prototype.sort = function () {
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
            if (this[j] > this[j + 1]) {
                let temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            };
        };
    };
    console.log(this);
};
[11, 4, 6, 3, 10].sort();

