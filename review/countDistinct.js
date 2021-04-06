let pet = ["dog", "chicken", "dog", "rabbit", "chicken"];

function aggregate(arr) {
    return arr.reduce(function (obj, pet) {
        if (!obj[pet]) {
            obj[pet] = 1;
        } else {
            obj[pet]++;
        }
        return obj;
    }, {});
}

function distint(arr) {
    let result = {};
    for (let item of arr) {
        if (result[item]) {
            result[item] += 1;
        } else {
            result[item] = 1;
        }
    }
    return result;
}

console.log(distint(pet));
console.log(aggregate(pet));

