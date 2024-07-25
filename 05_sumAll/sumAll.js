const sumAll = (num1, num2) => {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR';
    if (num1 < 0 || num2 < 0) return 'ERROR';

    const filledArray = [];
    const [smaller, bigger] = [num1, num2].sort();
    let total = 0;
    let incremented = smaller;
    while (incremented <= bigger) {
        filledArray.push(incremented);
        incremented = incremented + 1;
    }
    for (let element of filledArray) {
        total = total + element;
    }
    return total;
};
// Do not edit below this line
module.exports = sumAll;
