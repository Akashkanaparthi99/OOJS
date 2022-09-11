

var gnames= ['priya','paul']
var bnames=['baba','sandeep','akash']


var names = [...gnames,...bnames];
// names.forEach(value=> console.log(value));

function findVowels(...letters){
    var vowel = ['a','e','i','o','u'];
    a=[]
    letters.forEach(letter=>{
        
        if(vowel.includes(letter)){
            a.push(letter)
        }
    })
    // console.log(a);
    // console.log(a.length);
}


findVowels('j','a','v','a','s','c','r','i','p','t');


/**
 * create 2 objects
 * employee - name, salary
 * address - city state
 * using spread --> create a new object
 * emp details -> that has all the four
 */

var employee = {
    name:"Akash",
    salary:"125457"
}
var address ={
    city:"Hyderabad",
    state:"Telangana"
}

const employeeDeatils = {...employee,...address};
console.log(employeeDeatils);
