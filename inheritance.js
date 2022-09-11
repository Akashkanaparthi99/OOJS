/**
 * create a function constructor for employee with name and city
create two employee objects and print it
create a function constructor for manager with name,city, slary
create a manager object and print it

 */

function Employee(name , city){
    this.name= name;
    this.city=city;
    this.getDetails=()=>{
        console.log(`Name : ${name}`);
        console.log(`City : ${city}`);
    }
}

// var employee1 = new Employee("Ash","Karimnagar");
// var employee2 = new Employee("Smith","Hyderabad");
// employee1.getDetails();
// employee2.getDetails();

Employee.prototype.greet = ()=>console.log(`great day`);

function Manager(name , city , salary){
    // this.name= name;
    // this.city=city;
    Employee.apply(this,[name,city])
    this.salary=salary;
    this.calcBonus= (amount)=>{
       
        console.log(`Bonus - ${this.salary+amount}`);
    }
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.show = ()=>console.log(`Manager method`);
var manager1 = new Manager("Baba","Elluru",50000);
// console.log(`Name - ${manager1.name}`);
// console.log(`City - ${manager1.city}`);
// console.log(`Salary - ${manager1.salary}`);
manager1.getDetails();
manager1.calcBonus(5000);

var employee1 = new Employee("Ash","Karimnagar");
employee1.getDetails();
employee1.greet();



