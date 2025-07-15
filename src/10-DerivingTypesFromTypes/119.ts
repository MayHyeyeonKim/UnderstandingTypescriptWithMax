// 119. Using "typeof"

// typeof is a TypeScript operator that allows you to create a type based on the type of a variable or property. It is particularly useful for creating types that are derived from existing values, ensuring type safety and consistency across your codebase.

const userName119 = "Max";
const userAge119 = 30;

console.log(typeof userName119); // Output: string
console.log(typeof userAge119); // Output: number

type UserName119 = string;
type UserAge119 = number;

type User119 = typeof userName119 | typeof userAge119;

console.log(`UserName119: ${userName119}, UserAge119: ${userAge119}`);
