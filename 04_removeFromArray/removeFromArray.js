const removeFromArray = function(someArray, ...theArgs) {
    const clonedArray = [...someArray];
    const resultingArray = [];
    const args = [...theArgs];
    for (let element of clonedArray) {
        resultingArray.push(element);
        for (let arg of args) {
            if (arg === element) {
                resultingArray.pop(element);
            }
        }
    }
    return resultingArray;
};

// Do not edit below this line
module.exports = removeFromArray;
