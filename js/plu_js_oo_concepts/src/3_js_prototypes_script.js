///
printSectionTitle('How Javascript Prototypes Work');

let Person = {
    firstName: '',
    lastName: '',
    age: 18,
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  
  let jim = { firstName: 'Jim', lastName: 'Cooper' };
  //associate a type for jim obect
  Object.setPrototypeOf(jim, Person);
  
  //object attribute
  display(jim.firstName);
  
  comment('getting object attribute')
  //inherited parent method
  display(jim.fullName());

  comment('check the prototype');
  display(Object.getPrototypeOf(jim));
  //deprecated way of checking the prototype
  comment('deprecated')
  display(jim.__proto__)

//  
printSectionTitle('Instance vs Protoype properties');
 
display(jim.hasOwnProperty('age'));  //false  as jim was defined as let jim = { firstName: 'Jim', lastName: 'Cooper' };
display(jim.age); //18  as this property comes from the prototype

let jim1 = { firstName: 'Jim', lastName: 'Cooper', age: 29 };
 
display(jim1.hasOwnProperty('age'));  //true
display(jim1.age); //29 

//  
printSectionTitle('Creating Prototype Chains');


let Student = {
    enrolledCourses: [],
    entroll(course){
        this.enrolledCourses.push(course);
    }
};

Object.setPrototypeOf(Student,Person); // Sudent is a child of a Person

let jim2 = { firstName: 'Jim', lastName: 'Cooper', age: 29 };
Object.setPrototypeOf(jim2, Student); //jim will inherit all properties of Student and Person

jim2.entroll({courseId: 'CS101'});
display(jim2.enrolledCourses);
display(jim2.fullName());  //keep complexity of multi level inheritance not too complex

