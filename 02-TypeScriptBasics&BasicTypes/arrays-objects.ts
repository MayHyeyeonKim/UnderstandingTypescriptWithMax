let hobbies = ["Sports", "Cooking"]; // string[]
let hobbies2: string[] = ["Sports", "Cooking"];
let hobbies3: Array<string> = ["Sports", "Cooking"]; // Array<string> generic type
let hobbies4: (string | number)[] = ["Sports", "Cooking", 1]; // string | number[]
let hobbies5: Array<string | number> = ["Sports", "Cooking", 1]; // Array<string | number>

let users: string[] = ["Max", "Anna", "Chris"];
let users2: Array<string> = ["Max", "Anna", "Chris"]; // Array<string>
let users3: (string | number)[] = ["Max", "Anna", 1]; // string | number[]

let possibleResults: number[];
possibleResults = [1, -2];

// Array
let arr: stirng[] = ["apple", "bannana", "cherry"];

//tuple
let tuple: [string, number, boolean] = ["Max", 38, true]; // tuple with fixed types and order

//object
let user: {
  name: string;
  age: number | string;
  hobbies: string[];
  address: {
    street: string;
    city: string;
  };
} = {
  name: "Max",
  age: 35,
  hobbies: ["Sports", "Cooking"],
  address: {
    street: "Main St",
    city: "New York",
  },
};

// {} is a type that represents any non-nullish value, but it does not allow primitive types like string or number in strict mode.
let val: {} = "some text"; // ⚠️ Error in strict mode: Type 'string' is not assignable to type '{}'. {} is a type that represents any non-nullish value, but it does not allow primitive types like string or number in strict mode.
const someObj = {};
someObj = null; // ⚠️ Error in strict mode: Type 'null' is not assignable to type '{}'. {} does not allow null or undefined values in strict mode.
someObj = 42; // ⚠️ Error in strict mode: Type 'number'
someObj = "Hello"; // ⚠️ Error in strict mode: Type 'string'

// Record Type
let data: Record<string, string | number>;

data = {
  entry1: 1,
  entry2: "Hi",
};
