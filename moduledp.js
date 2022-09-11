// function returning an object
var greet = function(){
    return {
        name: 'Raju',
        city: 'Ban',
        details:()=>{console.log('Great day')}
    };
}

var obj = greet();
console.log(obj);
console.log(obj.name);

var intrestCalc = function(){
    let _msg = 'Interest Calculation';   // we can declare private members using underscore
    let _year = 5;
    let _rate = 2;
    let _principal = 9000;
    return{
        message: _msg,
        setInterest:()=>{
            intrest = (_year*_rate*_principal)/100;
        },
        getIntrest: ()=>{
            return intrest;
        }
    }
};

var insObj = intrestCalc();
console.log(insObj.message);
insObj.setInterest();
console.log(insObj.getIntrest());



var intrestModule = (function(){
    let _msg = 'Interest Calculation';   // we can declare private members using underscore
    let _year = 10;
    let _rate = 2;
    let _principal = 9000;
    return{
        message: _msg,
        setInterest:()=>{
            intrest = (_year*_rate*_principal)/100;
        },
        getIntrest: ()=>{
            return intrest;
        }
    }
})(); // the function is called already 

console.log(intrestModule.message);
intrestModule.setInterest();
console.log(intrestModule.getIntrest());

// revealing module design pattern
var insModule = (function(){
    let _msg = 'Interest Calculation';   // we can declare private members using underscore
    let _year = 10;
    let _rate = 2;
    let _principal = 9000;
    let intrest = 0;
    let _calcInterest = ()=>{
        intrest = (_year*_rate*_principal)/100;
    }
    let _getIntrest = ()=>{
        _calcInterest();
        return intrest;
    }
    let _check = ()=>{
        return "checking";
    }
    return{
        message: _msg,
        int:_getIntrest(),
        newCheck: _check
    }
})();

console.log(insModule.message);
console.log(insModule.int);
console.log(insModule.newCheck);



