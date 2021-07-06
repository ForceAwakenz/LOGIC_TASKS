// 1. Написать функцию вычисления факториала. Передаваемый параметр в функцию - число, факториал которого нужно посчитать. Возвращаемое значение - результат. Выполнить используя рекурсию.
'use strict'

function factorial(inputNumber) {
    
    if (isNaN(inputNumber)) {
        return 'Invalid input, please choose a number.'
    }

    if (inputNumber != 1) {
        return inputNumber * factorial(inputNumber - 1);
    } else { return 1; }
}
