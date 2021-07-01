// Check input data for validity
// Написать функцию, которая принимает массив числовых значений, и возвращает минимальное и максимальное значение массива
'use strict'

function minAndMax(inputArray) {
    if (!Array.isArray(inputArray)) { return "Invalid data, insert array" };
    //Check of input
    if (isNaN(inputArray[0])) return "Error, array must contain only numbers";
    let min = inputArray[0];
    let max = inputArray[0];
    for (let i = 1; i < inputArray.length; i++) {
        if (isNaN(inputArray[i])) return "Error, array must contain only numbers";
        min = (min < inputArray[i]) ? min : inputArray[i];
        max = (max > inputArray[i]) ? max : inputArray[i];
        console.log(`min ${min}, max ${max}, array[i] ${inputArray[i]}`)
    }
    return [min, max];
}


let inputArray1 = [23, 12, 55, 0, -1, 5];


console.log(minAndMax(inputArray1));
console.log(minAndMax(5));


