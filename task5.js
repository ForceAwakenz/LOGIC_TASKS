// 2. Написать функцию, которая принимает числовое значение, и выводит результат сложения всех вхождений в последовательности. Использовать рекурсию. Например передаем 2, функция возвращает 1+2. Передаем 4, функция возвращает 1+2+3+4 ит.д.

function addAllSequence(lastNumber) {

    if (isNaN(lastNumber)) {
        return 'Invalid input, please choose a number.'
    }

    if (lastNumber > 1) {
        return lastNumber + addAllSequence(lastNumber - 1);
    } else if (lastNumber < -1) {
        return lastNumber + addAllSequence(lastNumber + 1);
    } if (lastNumber == 1) {
        return 1;
    } else if (lastNumber == -1) {
        return -1;
    } else { return 0;}

}
