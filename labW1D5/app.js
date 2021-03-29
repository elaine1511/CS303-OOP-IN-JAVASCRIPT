/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

//count the num of times target appears in s
//countSubstring("5abdxyxabdabd", "abd") //3
//one way to do is use the indexOf method of string or Javascript regular expressions
function countSubstring(s, target) {
    let count = 0;
    let position = s.indexOf(target);
    while (position > -1) {
        count++;
        position = s.indexOf(target, position + 1);
    }
    return count;
}

// Save obj in localStorage -use: loccalStorage.setItem 
// go to Application tab in the debugger, click on URL under local Storage to see key/value

function saveInLocalStorage(name, obj) {
    return localStorage.setItem(name, JSON.stringify(obj));
}

// Return value of name in localStorage
function getFromLocalStorage(name) {
    let retriveveName = localStorage.getItem(name);
    return JSON.parse(retriveveName);
}

// This function has an unbounded this. When it is called, the this will be bound to some object
// The argument "obj" is a single key/value pair, e.g. {location:"Fairfield"}
// It can be any key/value pair
// addMissProperty tests the object bound to its "this" for the key of "obj" (e.g., location)
// If the bound object doesn't have that key then the key and its value is added to the bound object.
function addMissingProperty(obj) {
    Object.keys(obj).forEach(key => {
        if (!this.hasOwnProperty(key)) {
            this[key] = obj[key];
        }
    })
}


// Constructor function which creates object {name:name, country:country, creationDate:...}
// Where creationDate is the time that the object is created.
function Person(name, country) {
    this.name = name;
    this.country = country;
    this.creationDate = new Date();
}


// The parameter "students" is an array of student objects. Each student object has form
// {name:some name, country: some country}
// This function creates a Map using the "students" parameter and sets the value of each student
// in it to zero. This will be the number of classes that the student has missed.
// The function incrementAbscences (see next) can be called to increment the number of absences.
function register(students) {
    let registerMap = new Map();
    for (let i = 0; i < students.length; i++) {
        registerMap.set(students[i], 0);
    }
    return registerMap;
}

// Parameters:
// course is a Map mapping student objects to an integer which is the number of days missed
// student is an object that can be used as a key to course.
// This function increments the number of days missed for the student.
function incrementAbsences(course, student) {
    return course.set(student, course.get(student) + 1);
}


