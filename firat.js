console.log('welcome to js');
/**
 * using backtick
 */
console.log(`ajlgkaldkfnga
    ngalgkanlgkang
    dgknlgkandlgknag`);
var username = "priya";
console.log('Welcome'+username);
console.log(`welcome ${username}`);
var x = 10, y=20;
console.log('Sum' +x+y);  // concat with a string gives sum1020
console.log(`Sum: ${x}+${y}`); // o/p  - Sum: 10+20
console.log(`Sum: ${x+y}`); // o/p - Sum: 30

var employee = {firstName:"akash", department: "Dev",
    hobbies:['music','dance'],
    address:{
        city:'banglore',
        state:'KAR'
    },
    mobile:1236547890
};

// var employe = "akash";

console.log('************************************');
for (const key in employee){
    let value = employee[key];
    if(Array.isArray(value)){
        for(const index in value)
        console.log(key,value[index]);
    }
    if(typeof(value)=='object'){
            for(const prop in value)
                console.log(key,value[prop]);
        
    }
    else{
        console.log(key,value);
    }

}