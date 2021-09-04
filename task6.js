// 3.  Написать функцию, которая принимает строку, а на выходе возвращает ее зеркальное отображение. Не использовать встроенные методы в JS, разрешается только языковые конструкции (for, while и т.д.).
'use strict'

function revertString(inputString) {

    inputString = String(inputString);

    let outputString = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
        outputString += inputString[i];
    }

    return outputString;

}
