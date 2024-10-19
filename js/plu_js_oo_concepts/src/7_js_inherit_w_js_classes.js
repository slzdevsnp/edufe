printSectionTitle('Inheritance with JavaScript Classes');


class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
    ß
    isAdult() {
      return this.age >= 18;
    }
  }
  
  class Student extends Person {  //extends
    courses = [];
    constructor(firstNmae, lastName, age, courses){
        super(firstNmae, lastName, age) // calling super
        this.courses = courses;
    }
    
    enroll(course) {
      this.courses.push(course);
    }
    isAdult() {  //overrode method in child class
        return this.age >= 21;
      }
  }
  
let jim = new Student('Jim', 'Cooper', 18, [{courseId: 'CS101'}, {courseId: 'Math101'}]);
let jimPerson = new Person('Jim', 'Cooper', 18);

display(jim.courses[0]);
display(jim.firstName);

display(jim instanceof Student)
display(jim instanceof Person)


display(jim.isAdult());
display(jimPerson.isAdult());


