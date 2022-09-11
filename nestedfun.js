// nested function

function calcAverage(x,y,z){

    var message = "the sum is : ";
    //inner function 
    function sum(){
        // inner function can access the outer function variables
        console.log(message);
        return x+y+z;
    }

    console.log(sum()/3);
}

calcAverage(25,66,55);


function greeter(){
    console.log('Have a great day');
}
greeter();

// immediate invoke function expression
(function greeter(){
    console.log('Have a great day');
})();





function calcAverage(x,y,z){

    var message = "the sum is : ";
    //inner function 
    var total = (function(){
        // inner function can access the outer function variables
        console.log(message);
        return x+y+z;
    })()/3;

    console.log(total);
}

calcAverage(25,66,55);




/**
 * function returning another function
 */
var average1  = function(m1,m2,m3){
    return function(){
        return m1+m2+m3;
    };

}

var avg = average1(90,90,90);
var result = avg()/3;
console.log(result);



var avg = average1(90,90,90)();
console.log(avg/3);






/**
 * Q.
 * create a function showDetails(fname and lname)
 * print a messsgae 'have a great day'
 * then return an inner function
 * the inner function prints the message and prints the frist name concat last name in 
 * capital letters
 * 
 * the excpected o/p
 * have a good day
 * AKASH K 
 */

var showDetails = function(fname,lname){
    var message = "Have a Great Day"
    return function(){
        var name = fname+" "+lname;
        console.log(message+"\n"+name.toUpperCase());
    };
}
var details = showDetails('Akash','K');
details();


/**
 * Q.
 * create function empDetails(fname, city, salary)
 * add a variable as messgae 'Employee Details'
 * return a inner function that takes a parameter amount function(amount)
 * in the inner function
 * print the message. then the empname
 * then calculate the bonus of the employee by adding amount and salary(or your logic)
 * print the bonus also
 * 
 * The expected output is 
 * Employee Details
 * name : ****
 * city : *****
 * Salary : ****
 * bonus : ****
 */

var empDetails = function(name, city,salary){
    var message = "Employee Details";
    return function(amount){
        console.log(`${message}`);
        console.log(`name : ${name} `);
        console.log(`city : ${city} `);
        console.log(`salary : ${salary} `);
        console.log(`bonus : ${salary+amount} `);
    };
}

empDetails("Akash",'Hyderabad','30000')(5000);


