"use strict";
function addInFunction(a, b) {
    return a + b;
}
function logResult(message) {
    console.log(message);
}
// let logAndThrow = (errMessage: string): never => {
//     console.error(errMessage);
//     throw new Error(errMessage);
// }
// const logged = logAndThrow("Hi there!"); // This will log the error message and throw an error
function performJob(cb) {
    cb("JobDone!");
}
performJob(logResult);
let user = {
    name: "May",
    age: 3,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old!`);
        return this.name;
    }
};
user.greet();
