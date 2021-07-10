// 3. Задача на Map, Set, WeakMap, WeakSet. Есть массив объектов. У каждого объекта есть id 
const arr = [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 1 }]
// В массиве могут быть дубликаты. Написать функцию, которая будет удалять дубликаты из массива . Использовать вышеперечисленные инструменты для решения задачи. В дополнение к этому - разрешается использовать любые средства ES6.

let filteringSet = new Set();

for (let i = 0, counter = 0; i < arr.length; i++) {
    counter = filteringSet.size;
    filteringSet.add(arr[i].id);
    if (filteringSet.size == counter) {
        delete arr[i];
    }
}
