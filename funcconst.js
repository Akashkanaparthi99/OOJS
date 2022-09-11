// create a class in js
function Student(name , city){
    this.name=name;
    this.city=city;
    this.greet = function(){
        console.log(`welcome ${this.name} from ${this.city}`)
    }
}

var student = new Student('Ash','Hyderabad');
student.greet();
console.log(student.name);
console.log(student.city);

Student.prototype.mobile = 9089089000;
Student.prototype.check = function(message){
    console.log(message,`${this.name}`);
}

var student1 = new Student('Smash','Manali');
student1.greet();
console.log(student1.name);
console.log(student1.city);
console.log(student1.mobile);
student1.check("Have a great day :");