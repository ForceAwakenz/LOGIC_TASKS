// 3. Написать функцию, которая принимает массив числовых значений и проверяет является ли массив отсортирован (возвращает true/false)
'use strict'

function ifArraySorted(inputArray) {
    
    if (!(inputArray instanceof Array)) { return "Invalid data, insert array" };
    if (isNaN(inputArray[0])) return "Error, an array must contain only numbers";

    for (let i = 1; i < inputArray.length; i++) {
        if (isNaN(inputArray[i])) return "Error, an array must contain only numbers";
        if (inputArray[i - 1] <= inputArray[i]) {
            continue;
        } else { return false; }
    }
    
    return true;

}
