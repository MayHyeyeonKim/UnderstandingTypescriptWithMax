let age: any = 35;
// age = "37"; // ⚠️ Error in strict mode: Type 'string' is not assignable to type 'number'.
age = 36;
console.log(age); // 36

age = "37"; // ⚠️ Error in strict mode: Type 'string' is not assignable to type 'number'.
age = {};
age = []; // ⚠️ Error in strict mode: Type 'any[]' is not assignable to type 'number'.
// age = undefined; // ⚠️ Error in strict mode: Type 'undefined' is
// age = true; // ⚠️ Error in strict mode: Type 'boolean' is not assignable to type 'number'.
// age = null; // ⚠️ Error in strict mode: Type 'null' is
// not assignable to type 'number'.

/** Union Type */

let age2: string | number = 35;
age2 = "37"; // Now this is allowed
// age2 = 36; // Still allowed
console.log("\n");
console.log("type:", typeof age2, "\nage2: ", age2); // string, 37
