///
printSectionTitle('Using JavaScript Classes');

class Person {
    static isHumanoid = true;  //static property
    firstName;
    lastName;
    age;
    #adultAge = 18; // private property

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
    this.age = age;
    }

    // Getters and setters for fullName
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
  
    set fullName(fullName) {
        let nameParts = fullName.split(' ');
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];    
    }

    #isAdult(){  // private method
        return this.age >= this.#adultAge;
    }

    isQualified() {
        return this.#isAdult();
    }
}

let jim = new Person('Jim', 'Cooper', 18);

display(jim);
display(Person.isHumanoid);
display(jim.fullName);
display(jim.isQualified());
