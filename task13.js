// 3. Используя код из задачи №2 дописать класс, который наследует User и при этом расширяет его. Название класса Admin, и новое строковое свойство role, которое будет в нем. Написать создание экземпляра Admin.

class User {
    
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }

    print() {
      console.log(`Name: ${this.firstName}; Last Name: ${this.lastName}; age: ${this.age}`);
    }

}






