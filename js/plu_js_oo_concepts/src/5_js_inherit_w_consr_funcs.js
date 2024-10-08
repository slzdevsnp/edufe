///
printSectionTitle('Inheritance with Constructor Functions');

function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.isAdult = function(){
    return this.age >= 18;
}

// now create a Student object which inherits from Person object
function Student(firstName, lastName, age) {
    Person.call(this, firstName, lastName, age);  //!
    this.courses = [];
}

Student.prototype = Object.create(Person.prototype); //!
Student.prototype.constructor = Student ;  // !

Student.prototype.enroll = function(course){
    this.courses.push(course);
}


Student.prototype.isAdult = function(){
    return this.age >= 21;
}

let jim = new Student('Jim', 'Cooper', 29);
jim.enroll({courseId: 'CS101'});

display(jim.__proto__);
display(jim.constructor.toString());
display(jim.firstName);
display(jim.isAdult());
display(jim.age);
//dipslay(jim.courses);
display(jim);
display(jim instanceof Student); //true
display(jim instanceof Person); //true

let jimPerson = new Person('Jim', 'Cooper', 18);
let jimStudent = new Student('Jim', 'Cooper', 18);
display(jimPerson.isAdult()); //true
display(jimStudent.isAdult()); //false  overriding method in child object vs  parent object



