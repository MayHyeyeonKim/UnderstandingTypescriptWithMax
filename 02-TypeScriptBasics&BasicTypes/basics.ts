let userName: string; //a type annotation or a type assignment
let firstName: string = "May"; //typescript infers the type from the value, but we can also explicitly assign it.
let userAge = 38;

// console.log(userName); // ⚠️ Error in strict mode: Variable 'userName' is used before being assigned.
console.log(firstName); // May

// function add(a: number, b = 5) {
//     return a + b;
// }

function add(a: number, b: number = 5) {
  //function parameter
  return a + b;
}

let result1 = add(10);
let result2 = add(10, 20); // 30

console.log(result1); // 15
console.log(result2); // 30
