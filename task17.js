'use strict';
// 4. Написать функцию-обертку, замеряющую и выводящую в консоль время выполнения асинхронной функции, переданной в функцию-обертку в качестве коллбека. Для замера можно использовать performance.now(); .

function callback() {
    fetch(`https://restcountries.eu/rest/v2/name/ukraine`);
    return performance.now();
}

async function wrapper(callback) {

    const a = performance.now();
    console.log(a);
    const b = await callback();
    console.log(b);
    return (b - a).toFixed(3);

}

wrapper(callback).then(console.log);
