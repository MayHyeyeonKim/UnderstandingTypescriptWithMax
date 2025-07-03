//function vs arrow function
function add(a: number, b: number): number {
  return a + b;
}

const addArrow = (a: number, b: number): number => a + b;

console.log(add(2, 3)); // 5
console.log(addArrow(2, 3)); // 5

// Arrow functions do not have their own 'this' context
const obj = {
  value: 42,
  getValue: function () {
    return this.value;
  },
  getValueArrow: () => {
    return this.value; // 'this' refers to the global object, not 'obj'
  },
};
console.log(obj.getValue()); // 42
console.log(obj.getValueArrow()); // undefined (or global value if defined)
