var names = ["Akash","Sandeep","Madhu","Baba","Shravani"];
/**
 * using normal for loop
 */
for (let index = 0; index < names.length; index++) {
    let element = names[index];

    console.log(element);
}
/**
 * using for in
 */
for (const index in names) {
    console.log(names[index]);
}
/**
 * using for of
 */
for (const value of names) {
    console.log(value);    
}
/**
 * using for each
 */
names.forEach(function(value,index,arrName){
    console.log(value+"\t"+index+"\t"+arrName[index]);
})

/**
 * using lambda expression
 */
names.forEach((value)=>{
    console.log(value);
})