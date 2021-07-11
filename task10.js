// 1. Написать функцию-консторуктор, которая в качестве параметров принимает 3 значения - имя, фамилия и возраст. Функция-консторуктор также будет иметь метод print, которая будет выводить форматированный вывод в консоль имени, фамилии и возраста. Пример:

const user = new User('John', 'Smith', 30);

function User(firstName, lastName, age) {
    
    this.firstName = firstName ?? '(First name was not assigned)';
    this.lastName = lastName ?? '(Last name was not assigned)';
    this.age = age ?? '(Age was not assigned)';
    // Aren't this checks too redundant? ^

    this.print = () => {
        console.log(
            `Name: ${this.firstName}, last name: ${this.lastName}, age: ${this.age}`
        );
    }

}

user.print();
//» Name: John, last name: Smith, age: 30.
