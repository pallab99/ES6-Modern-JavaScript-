const arr=[1,2,4,56,7,6,78,8,8];

console.log(Math.max(...arr));

let person={name:"Pallab",Age:23}

let p1={...person,city:"Jashore"};
p1.name="pallab";

console.log(person);
console.log(p1);