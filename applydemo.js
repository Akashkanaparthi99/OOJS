/**
 * create a User constructor - name , department
 * create a employee name
 */

var User = function(name,department){
    this.name = name;
    this.department = department;
}

var  Employee = function(name){
    this.name = name;
}

var greet = function(message){
    console.log(`${message} ${this.name}`);
}

var user = new User('Jack','Pune');
var employee = new Employee('Helen');

// using call
// function.call(for which object, the argument needed by greet function)
greet.apply(user,['Hello']);
greet.apply(employee,['Have a great day']);

var checkName = function(){
    var uname = this.name;
    if(this.name.startsWith('S')){
        console.log('Hello ',uname);
    }
    else
    console.log('your name is invalid',uname);
}

checkName.call(user);
checkName.call(employee);



var show = function(amount, bonus, message){
    console.log(`${message} ${this.name}`);
    console.log(`Your Final amount is, ${amount+bonus}`);
}

show.apply(user,[9000,2000,'Great Day']);
show.apply(employee,[90000,20000,'Your Increment Details']);



