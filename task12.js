// 2. Есть класс пользователя с его данными и методом форматированного вывода. Задача - переписать функционал на ES5 с использованием функции-конструктора. Следует обратить внимание на метод print, который отсутствует в каждом объекте, но при этом доступен в прототипе, что легко проверить проконсолив экземпляр (метод 1 для всех экземпляров, а не дублирован для каждого по отдельности).

// class User {

//     constructor(firstName, lastName, age) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.age = age;
//     }

//     print() {
//       console.log(`Name: ${this.firstName}; Last Name: ${this.lastName}; age: ${this.age}`);
//     }

// }

function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.print = function () {
        console.log(`Name: ${this.firstName}; Last Name: ${this.lastName}; age: ${this.age}`);
    }

}
  

const user = new User('John', 'Connor', '32');
user.print();



