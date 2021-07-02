// 2. Написать функцию, которая принимает массив числовых значений и возвращает среднее значение
'use strict'

function averageValue(inputArray) {
    
    if (!(inputArray instanceof Array)) { return "Invalid data, insert array" };

    let sumArray = 0;
    for (let i = 0; i < inputArray.length; i++) {
        if (isNaN(inputArray[i])) return "Error, an array must contain only numbers";
        sumArray += inputArray[i];
    }

    return sumArray / inputArray.length;

}

let testArray2 = [4, 20, -1, 33];

console.log(averageValue(testArray2));