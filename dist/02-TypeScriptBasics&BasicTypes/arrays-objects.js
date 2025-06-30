"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.possibleResults = void 0;
let hobbies = ["Sports", "Cooking"]; // string[]
let hobbies2 = ["Sports", "Cooking"];
let hobbies3 = ["Sports", "Cooking"]; // Array<string> generic type
let hobbies4 = ["Sports", "Cooking", 1]; // string | number[]
let hobbies5 = ["Sports", "Cooking", 1]; // Array<string | number>
let users = ["Max", "Anna", "Chris"];
let users2 = ["Max", "Anna", "Chris"]; // Array<string>
let users3 = ["Max", "Anna", 1]; // string | number[]
exports.possibleResults = [1, -2];
// Array
let arr = ["apple", "bannana", "cherry"];
//tuple
let tuple = ["Max", 38, true]; // tuple with fixed types and order
//object
let user = {
    name: "Max",
    age: 35,
    hobbies: ["Sports", "Cooking"],
    address: {
        street: "Main St",
        city: "New York",
    },
};
// {} is a type that represents any non-nullish value, but it does not allow primitive types like string or number in strict mode.
let val = "some text"; // ⚠️ Error in strict mode: Type 'string' is not assignable to type '{}'. {} is a type that represents any non-nullish value, but it does not allow primitive types like string or number in strict mode.
let someObj = {};
// someObj = null; // ⚠️ Error in strict mode: Type 'null' is not assignable to type '{}'. {} does not allow null or undefined values in strict mode.
someObj = 42; // ⚠️ Error in strict mode: Type 'number'
someObj = "Hello"; // ⚠️ Error in strict mode: Type 'string'
// Record Type
let data;
data = {
    entry1: 1,
    entry2: "Hi",
};
