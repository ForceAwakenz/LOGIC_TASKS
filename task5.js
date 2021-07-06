// 2. Написать функцию, которая принимает числовое значение, и выводит результат сложения всех вхождений в последовательности. Использовать рекурсию. Например передаем 2, функция возвращает 1+2. Передаем 4, функция возвращает 1+2+3+4 ит.д.
'use strict'

function allSequenceTotal(lastInSequence) {

    if (isNaN(lastInSequence)) {
        return 'Invalid input, please choose a number.'
    }

    lastInSequence = +lastInSequence;

    if (lastInSequence > 1) {
        return lastInSequence + allSequenceTotal(lastInSequence - 1);
    } else if (lastInSequence < -1) {
        return lastInSequence + allSequenceTotal(lastInSequence + 1);
    } if (lastInSequence == 1) {
        return 1;
    } else if (lastInSequence == -1) {
        return -1;
    } else { return 0;}

}
