import React from "react";

function Welcome({name}){
  const employee=[{fname:"john",lname:"stantham",id:1},
  {fname:"rock",lname:"dwanye john",id:2},
  {fname:"santosh",lname:"srinivasa",id:3}
  ];

  const numbers = [10,20,30];
  
  const  numbers1 = numbers.map( num => num *2 );
  console.log(numbers);
  console.log(numbers1);

   const orgarray =[ [1,2,3], [4,5,6], [7,8,9] ];

  const double = orgarray.map( num => num.map( num => num*2));
  console.log(orgarray);
  console.log(double);

  const fname = employee.map( emp => <li key={emp.id}>{emp.fname}</li>)
  const lname = employee.map( (emp,index) => <li key={index}>{emp.lname}</li>)
  return (<div>
    <p>map iterations first name {fname}</p>
    <p>map iterations last name {lname}</p>
  </div>
  )
}

export default Welcome;