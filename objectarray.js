const employees=[
    {
      name:"Ash",
      department:{
        deptname:"DEV",
        depthead:"Dig"
      },
      skills:["java","spring"],
      city:"Hyderabad"  
    },
    {
        name:"Jake",
        department:{
          deptname:"QA",
          depthead:"Nigesh"
        },
        skills:["manual testing","selenium","automation"],
        city:"Pondicherry"  
    },
    {
        name:"Dwen",
        department:{
          deptname:"SALES",
          depthead:"Ben"
        },
        skills:["marketing","influencing"],
        city:"Banglore"  
    }
];

employees.forEach(employee => {
    for(let val in employee){
        let obj =  employee[val];
        if(Array.isArray(obj)){
            for(let b in obj)
                console.log(val,b);
        }
        if(typeof(obj)=='object'){
            for(let a in obj){
                console.log(val,a);
            }
        }
        else{
            console.log(val,obj)
        }
    }
});