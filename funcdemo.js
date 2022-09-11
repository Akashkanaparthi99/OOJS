function sum( a, b){
    console.log(a+b);
}

// let a=10;
// let b = 10;
sum(10,50);

// anonymous function - function expression
var total = function(x,y){
    console.log(x+y);
}

// var greet = function



// create function sayHello that takes func as prameter as uname
// and it prints hello uname
var sayHello = function (name){
    console.log(`hello ${name}`);
}

// create another function printmessage that takes func as prameter
var printMessage = function(x,uname){
    x(uname); // here x is a function
}
printMessage(sayHello,"Ash");

var calculate = function(x,y,z){
    return x+y+z;
}
var  printAverage = function(calculate,x,y,z){
    let avg = calculate(x,y,z);
    console.log(avg/3);
}
printAverage(calculate,10,20,30);


// lambda expressions
var see =()=>{
    console.log("great Day");
}

var show =(uname)=>{
    console.log(`great Day ${uname}`);
}
show("Ash");
see();










