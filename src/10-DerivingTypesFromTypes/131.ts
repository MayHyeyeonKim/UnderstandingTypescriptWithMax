// 131. Making Sense of the "infer" Keyword

function addd3(a: number, b: number) {
  return a + b;
}

type AddFn = typeof addd3;
type ReturnValueType<T> = T extends (...args: any[]) => infer RV ? RV : never;

type AddFnReturnValueType = ReturnValueType<AddFn>;
