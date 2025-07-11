function merge<T>(a: T, b: any): [T, number] {
  return [a, b];
}

const ids = merge(1, 2);

const ids104 = merge<number>(2, 3);

console.log(ids);
