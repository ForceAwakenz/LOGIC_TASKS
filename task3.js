// 3. Написать функцию, которая принимает массив числовых значений и проверяет является ли массив отсортирован (возвращает true/false)
'use strict'

function ifArraySorted(inputArray) {
    
    if (!Array.isArray(inputArray)) { return "Invalid data, insert array" };
    let ifSorted;
    if (isNaN(inputArray[0])) return "Error, array must contain only numbers";

    for (let i = 1; i < inputArray.length; i++) {
        if (isNaN(inputArray[i])) return "Error, array must contain only numbers";
        if (inputArray[i - 1] <= inputArray[i]) {
            ifSorted = "An array is sorted";
        } else { return "An array is not sorted"; }
    }
    
    return "An array is sorted";

}
