function replicate(times, num) {
    if (times < 1) {
        return [];
    };
    return [num].concat(replicate(times - 1), num);
}

function replicate1(times, num) {
    let result = [];
    if (times <= 0) {
        return result;
    } else {
        for (let i = 0; i < times; i++) {
            result.push(num);
        };
        return result;
    };
}

console.log(replicate1(3, 5));
