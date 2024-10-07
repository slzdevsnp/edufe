
///
printSectionTitle('Using JavaScript Constructor Functions');

//classes are syntactic sugar over constructor functions

function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

 
let jim = new Person('Jim', 'Cooper', 29);  //new keyword
display(Object.getPrototypeOf(jim));
display(jim);
display(jim.fullName());
display(jim.hasOwnProperty('firstName'));

//
printSectionTitle('Understanding the new Keyword');
//let jim = new Person('Jim', 'Cooper', 29);  //new keyword creates 'this' object and binds to it the Person function
                                             // Person func implicitely returns this objects 

//
printSectionTitle("Adding Methods to a Constructor function's prototype");

//An Object's Prototype is the object instance from which the object was inherited.
//A Function's Prototype is the object instance that will become the prototype for all
//  objects created using this function as a constructor.

Person.prototype.isAgeFitForStudent = function(){
    if (this.age > 18 && this.age < 35) {
      return true;
    } else {
      return false;
    }
}; 
comment('define an attribute outside constructor function')
display(jim.isAgeFitForStudent()); //true
display(jim.hasOwnProperty('isAgeFitForStudent')); //false
display(jim.__proto__.hasOwnProperty('isAgeFitForStudent')); //true

let john = new Person('John', 'Knox', 40); 
display(john);
display(john.isAgeFitForStudent()); //  available for Perons's instance  false


//
printSectionTitle("Creating getter and setter properties");

comment('ulgy way to define a getter')

function Person1(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    Object.defineProperty(this, 'fullName', {
           get: function() {
             return `${this.firstName} ${this.lastName}`;
           },
           set: function(fullName)  {
             let nameParts = fullName.split(' ');
             this.firstName = nameParts[0];
             this.lastName = nameParts[1];
           }
         });
}
let jim1 = new Person1('Jim', 'Cooper', 30);
display(jim1.fullName);
comment('after reassignment')
jim1.fullName = 'Jim Connors';
display(jim1.fullName);

comment('proper ways for getters and setters')

function Person2(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
//do it right after protooype function
Person2.prototype = {
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(fullName){
        let nameParts = fullName.split(' ');
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
    }
};

let jim2 = new Person2('Jim', 'Cooper', 30);

jim2.fullName = 'Jim Merck';
display(jim2.fullName);

//
printSectionTitle('creating static properties')

display(Math.PI);

function Person3(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
};
Person3.adultAge = 18;
Person3.prototype.isAdult = function() {
    return this.age >= Person3.adultAge;  //calls static property 
};

let jim3 = new Person3('Jim', 'Cooper', 18); //true
display(jim3.isAdult());

//
printSectionTitle('creating static methods')

Person3.isAdult = function(age){
    return age >= Person3.adultAge;
}
//redefine
Person3.prototype.isAdult = function(){
    return Person3.isAdult(this.age);
}
let jim3_1 = new Person3('Jim', 'Cooper', 18);
display(Person3.isAdult(18)); //true
display(jim3_1.isAdult()); //true

//
printSectionTitle('creating private properties with closures')

function Person4(firstName, lastName, age) {
    let adultAge = 18;  //this can be used inside methods  in this constructor function
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isAdult = function() {
      return this.age  >= adultAge;
    };
    this.getYearsTillAdult = function() {
      if (this.age < adultAge){ //using adultAge from function
        return adultAge - this.age;
      }else {
        return 0;
      }
    };
  }
  
  
jim = new Person4('Jim', 'Cooper', 15);
display(jim.isAdult());
display(jim.getYearsTillAdult());
display(jim.adultAge); //undefined as it is private


//
printSectionTitle('creating private methods with closures')

function Person5(firstName, lastName, age) {
    let adultAge = 18;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    let isAdult = () => {
        return this.age >= adultAge;
    }
    this.isQualified = function () {
        return isAdult();
    };
}
jim = new Person5('Jim', 'Cooper', 15);
//display(jim.isAdult()); //undefined
display(jim.isQualified());


