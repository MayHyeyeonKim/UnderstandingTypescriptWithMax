// 126. Introducing Mapped Types

// type Operations = {
//   add: (a: number, b: number) => number;
//   subtract: (a: number, b: number) => number;
// };

// type results<T> = {
//   [Key in keyof T]: number;
// };

// let mathOperations: Operations = {
//   add(a: number, b: number) {
//     return a + b;
//   },
//   subtract(a: number, b: number) {
//     return a - b;
//   },
// };

// let mathResults: results<Operations> = {
//   add: mathOperations.add(10, 5),
//   subtract: mathOperations.subtract(10, 5),
// };
