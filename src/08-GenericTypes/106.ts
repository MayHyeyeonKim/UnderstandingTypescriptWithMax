// 106. Generics & Constraints

function merge106<T, U>(a: T, b: U) {
  return [a, b];
}

const ids = merge106(1, "Max");

function mergeObj(a: any, b: any): object {
  return { ...a, ...b };
}

const result106 = mergeObj({ name: "May" }, { age: 500 }); //result106 is { name: "May", age: 500 }
const result106_1 = mergeObj({ name: "May" }, { name: "Nay" }); // result106_1 is { name: "Nay" }

// if the key is same, the last one will overwrite the previous one, if the key is different, it will add the new key-value pair
// spread operator is used to copy or merge objects in JavaScript

function mergeObj106_1<T extends number | string, U extends object>(
  a: T,
  b: U
): [T, U] {
  return [a, b];
}
