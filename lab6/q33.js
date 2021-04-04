/*
write a function that take a string and return an array where the nth indexed element gives 
a count of the number of words of length n.
["Every day is a great day for golf"] => output: [0,1,1,2,1,2]
Input: string
Output: array
Process: 
- split string into an array of each word
- find the length of the result array by getting the longest word in the array of string
- remove the duplicate word in the array of string
- assign 0 indexed element to 0
- loop through array of string inside the loop of the result array
*/


function indexedCountWords(string) {
    let result = [];
    result[0] = 0;
    let arrLen = longestLength(string) + 1;
    let arr = string.split(" ");
    let arrFilter = removeDuplicates(arr);

    for (let j = 1; j < arrLen; j++) {
        let count = 0;
        for (let i = 0; i < arrFilter.length; i++) {
            if (arrFilter[i].length === j) {
                count++;
            }
        }
        result.push(count);
    }
    return result;
}


function removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b)
};
//can use Set to remove duplicate


function longestLength(str) {
    let arr = str.split(" ");
    let longest = arr[0].length;
    for (let words of arr) {
        if (words.length > longest) {
            longest = words.length;
        }
    }
    return longest;
}

console.log(indexedCountWords("Every day is a great day for golf"));
