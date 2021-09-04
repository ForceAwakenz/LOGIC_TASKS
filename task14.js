'use strict'
// 1. Преобразовать наследование в функциональном стиле на классы ES6

// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.printName = function() {
//       console.log(this.name);
//     }
//    }
//    function Admin(name, age, role) {
//     User.call(this, name, age);
//     this.role = role;
//     this.printRole = function() {
//       console.log(this.role);
//     }
// }

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printName() {
        console.log(this.name);
    }

}

class Admin extends User {
    constructor(name, age, role) {
        super(name, age);
        this.role = role;
    }
    printRole() {
        console.log(this.role);
    }
}

const polikarp = new Admin('Polikarp', 44, 'Admin');

polikarp.printName();
polikarp.printRole();