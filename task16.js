'use strict'
// 3. Написать функцию-обертку, замеряющую и выводящую в консоль время выполнения синхронной функции, переданной в функцию-обертку в качестве коллбека. Для замера можно использовать performance.now(); .

function someComplexStuff(number) {
    return String(number)
        .split('')
        .filter(num => +num % 2 === 0 && +num !== 0)
        .reduce((total, current) => total + current, '')
        .split('')
        .map(num => num ** 10)
        .reduce((total, current) => total + +current, 0)
};


function wrapper(callback) {
    const start = performance.now();
    
    callback();
    
    const finish = performance.now();

    return finish - start;

};

console.log(wrapper(() => someComplexStuff(56582004395265356582004395n)));
