"use strict"

class Person {
    a = 0;
    b = 1;
    constructor(hobby, age) {
        this.firstName = "Rhea",
        this.lastName = "Sharma",
        this.hobby = hobby,
        this.age = age
    }

    printDetails() {
        let a = 23;
        console.log(`My name is ${this.firstName} ${this.lastName}`);
        console.log(`My hobby is ${this.hobby}`);
    }

}

const person1 = new Person("cooking", 12);
console.log(person1.a);
const person2 = new Person("swimming");
person1.printDetails();
person2.printDetails();

class Professor extends Person {
    constructor() {
        super();
    }

    printProfessorDetails(subject) {
        console.log(`I teach ${subject}`);
    }

}

const professor1 = new Professor();
professor1.printDetails();
professor1.printProfessorDetails("Economics");