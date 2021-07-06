// 4. Задача на замыкания. Реализовать функцию, которая будет при каждом вызове и передаче строкового значения конкатенировать строку используя скоуп замыкания, а после вызова ее без параметров выдать результат.
'use strict'

function concatString(inputString) {

    let mainString =
        !(typeof (inputString) == 'undefined') ? String(inputString) : '';
 
    return function (stringToAdd) {

        if (stringToAdd === undefined) return mainString;
        
        mainString += stringToAdd;
        
        return mainString;
    }

}
