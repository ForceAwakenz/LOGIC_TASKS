// 2. Написать функцию, которая принимает массив числовых значений и возвращает среднее значение
'use strict'

function averageValue(inputArray) {
    
    if (!Array.isArray(inputArray)) { return "Invalid data, insert array" };

    let sumArray = 0;
    for (let i = 0; i < inputArray.length; i++) {
        if (isNaN(inputArray[i])) return "Error, array must contain only numbers";
        sumArray += inputArray[i];
    }

    return sumArray / inputArray.length;

}

let testArray = [10, 'b', 20, 30];

console.log(averageValue(testArray));