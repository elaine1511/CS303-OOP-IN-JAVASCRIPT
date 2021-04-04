// Question 1: Sum all numbers till the given one
"use strict";

function sumNum(num) {
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        return num + sumNum(num - 1);
    }
}
// console.log(sumNum(9));

/*
Question 2: - use recursion to implement print() method
Use Object literal to create an object named linkedlist which has the following methods:
let linkedlist = {}; // you need to implement code between the two braces, and make sure you can call methods as below
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //in the console, you should see: LinkedList{1, 2,3}
linkedlist.remove(2);
linkedlist.print() //in the console, you should see: LinkedList{1,3}
*/
let linkedlist = {
    head: null,
    node: function (item) {
        return {
            value: item,
            next: null
        };
    },

    add: function (item) {
        let current,
            newNode = this.node(item);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    },

    remove: function (list) {

    },

    print: function () {

    }
};

linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
console.log(linkedlist.print());

