

function calculateTax(income: number, taxYear: number): number{
    //let x;

    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;  //tsconfig noImplicitReturns
}

function calculateTaxOptinalParam(income: number, taxYear: number = 20222): number{
    //let x;

    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;  //tsconfig noImplicitReturns
}

let age : number = 20;

if (age < 50)
    age += 10;




let r1 =  calculateTax(10_000, 2022);

let r2 =  calculateTaxOptinalParam(10_000);

console.log(r1);
console.log(r2);



//object  type aliasing like struct
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void 
}


let employee: Employee =  {

    id: 1,
    name: 'Mosh',
    retire: (date: Date)=> {
         console.log(date);
    }
 }

 console.log(employee);
 

// type union
function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10kg');

console.log(kgToLbs(10));
console.log(kgToLbs('10kg'));


// type intersection
type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox : UIWidget = {
    drag:  () => {},
    resize: () => {}
}

// type literal
type Quantity = 50 | 100; // can take only these values
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';



// null values
function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');  // if name is falsy (null, undefind or empty string)
}

greet(undefined);

//optional chaining
type Customer = {
    birthday : Date
};

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : {birthday: new Date()};
}

let customer1 = getCustomer(0);
let customer2 = getCustomer(1);

console.log("cust1 " + customer1?.birthday);

console.log("cust2 "+  customer2?.birthday);
console.log("cust2 yr "+  customer2?.birthday?.getFullYear());
