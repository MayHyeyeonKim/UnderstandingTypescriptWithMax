// 129. Introducing Conditional Types

type StringArray = string[];
type ElemnetType<T extends any[]> = T[number];

// In classes/interfaces: "extends" means inheritance
// In conditional types: "extends" checks type compatibility

let text = 1;

type GetElementType<T> = T extends any[] ? T[number] : never;
type Ex1 = GetElementType<StringArray>; // string
type Ex2 = GetElementType<typeof text>; // never
