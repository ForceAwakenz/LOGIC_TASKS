'use strict'
// 3. Написать функцию-обертку, замеряющую и выводящую в консоль время выполнения синхронной функции, переданной в функцию-обертку в качестве коллбека. Для замера можно использовать performance.now(); .

function multiplyByThousand(number) {
    return number * 1000;
};


function wrapper(callback) {
    const start = performance.now();
    
    callback();
    
    const finish = performance.now();

    return ((finish - start)).toFixed(2);

};

console.log(wrapper(() => multiplyByThousand(565805840)));
