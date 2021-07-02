// 1. Написать функцию, которая принимает массив числовых значений, и возвращает минимальное и максимальное значение массива
'use strict'

function minAndMax(inputArray) {

    if (!(inputArray instanceof Array)) return "Invalid data, please insert an array!";
    if (isNaN(inputArray[0])) return "Error, an array must contain only numbers";

    let min = inputArray[0];
    let max = inputArray[0];

    for (let i = 1; i < inputArray.length; i++) {
        if (isNaN(inputArray[i])) return "Error, an array must contain only numbers";
        min = (min < inputArray[i]) ? min : inputArray[i];
        max = (max > inputArray[i]) ? max : inputArray[i];
    }

    return [min, max];
}


let testArray = ['4, 20, -1, 33'];

console.log(minAndMax(testArray));