// const: Block-scoped, cannot be reassigned or redeclared
// let: Block-scoped, can be reassigned but not redeclared
// var: Function-scoped, can be reassigned and redeclared
const userName = "May";
//userName= "Mayy";

let age = 3;
age = 4;

var result;

function add(a: number, b: number) {
  result = a + b;
  return a + b;
}

console.log(add(2, 3));
console.log(result);

function test() {
  if (true) {
    var x = 10;
    let y = 20;
  }
  console.log(x); // ✅ 10 (var is function scoped)
  console.log(y); // ❌ err! (let is block scoped)
}

export {};
