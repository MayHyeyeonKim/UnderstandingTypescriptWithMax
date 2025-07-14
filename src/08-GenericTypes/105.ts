// 105. Working with Multiple Generic Parameters

function merge105<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

const mergedResult105 = merge105("Max", 30);
