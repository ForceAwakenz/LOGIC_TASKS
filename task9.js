// 3. Задача на Map, Set, WeakMap, WeakSet. Есть массив объектов. У каждого объекта есть id 
const arr = [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 1 }]
// В массиве могут быть дубликаты. Написать функцию, которая будет удалять дубликаты из массива . Использовать вышеперечисленные инструменты для решения задачи. В дополнение к этому - разрешается использовать любые средства ES6.

function filterArray(inputArray) {

    let filteringSet = new Set();
    
    for (let i = 0, counter = 0; i < inputArray.length; i++) {
        counter = filteringSet.size;
        filteringSet.add(inputArray[i].id);
        if (filteringSet.size == counter) {
            inputArray.splice(i, 1);
            i--;
        }
    }
    
    return inputArray;
    
}

console.log(filterArray(arr));