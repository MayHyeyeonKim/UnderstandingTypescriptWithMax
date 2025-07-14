// 104. Generic Functions & Inference

function merge<T>(a: T, b: any): [T, number] {
  return [a, b];
}

const ids104 = merge(1, 2);

const ids104_1 = merge<number>(2, 3);

console.log(ids104_1);
