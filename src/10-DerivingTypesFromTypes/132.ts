// 132. TypeScript's Got You Covered: Built-in Utility Types

// https://www.typescriptlang.org/docs/handbook/utility-types.html

// ✅ Partial<T> — Makes all properties in T optional
type User = {
  name: string;
  age: number;
};

type PartialUser = Partial<User>;
// => { name?: string; age?: number }

// ✅ Required<T> — Makes all properties in T required
type OptionalUser = {
  name?: string;
  age?: number;
};

type CompleteUser = Required<OptionalUser>;
// => { name: string; age: number }

// ✅ Readonly<T> — Makes all properties in T read-only
type ReadonlyUser = Readonly<User>;
// => { readonly name: string; readonly age: number }

// ✅ Pick<T, K> — Picks a subset K of properties from T
type PickedUser = Pick<User, "name">;
// => { name: string }

// ✅ Omit<T, K> — Omits properties K from T
type OmittedUser = Omit<User, "age">;
// => { name: string }

// ✅ Record<K, T> — Creates an object type with keys K and values of type T
type Role = "admin" | "user";
type RolePermissions = Record<Role, boolean>;
// => { admin: boolean; user: boolean }

// ✅ ReturnType<T> — Extracts the return type of a function
function greet(): string {
  return "Hello";
}
type GreetReturn = ReturnType<typeof greet>;
// => string

// ✅ Parameters<T> — Extracts the parameter types of a function as a tuple
function sum(a: number, b: number): number {
  return a + b;
}
type SumParams = Parameters<typeof sum>;
// => [number, number]

// ✅ InstanceType<T> — Extracts the instance type of a class constructor
class Person {
  constructor(public name: string) {}
}
type PersonInstance = InstanceType<typeof Person>;
// => Person
