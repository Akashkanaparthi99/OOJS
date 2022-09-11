// function calculate(arr){
//     var val = 0;
//     arr.forEach(element => {
//         val+=element;
//     });
//     console.log(val);
// }

// function calculate(){
//     console.log('length',arguments.length);
//     var val = 0;
//     for (let index = 0; index < arguments.length; index++) {
//        val+=arguments[index];
//     }
//     console.log(val);
// }

// calculate(25,58,5845,8,4);
// calculate(5845,8,4);
// calculate(25,58,5845,4);
// calculate(25,58,4);
// calculate(25,4);

// function calculate(...nums){
  
//     var val = 0;
//    nums.forEach(value=>console.log(value))
//     console.log(val);
// }

// calculate(25,58,5845,8,4);
// calculate(5845,8,4);
// calculate(25,58,5845,4);
// calculate(25,58,4);
// calculate(25,4);

/**
 * create a function checkname() that takes rest parameter
 * call the function to check if the name starts with p
 */

function checkName(...names){
    names.forEach(element => {
        if(element.startsWith('p')){
            console.log(element);
        }
    });
}


checkName("priya","paul","Raju","sri")


