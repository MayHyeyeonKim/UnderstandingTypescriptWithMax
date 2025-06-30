function addInFunction(a: number, b: number): number {
    return a + b
}

function logResult(message: string) {
    console.log(message);
}

// let logAndThrow = (errMessage: string): never => {
//     console.error(errMessage);
//     throw new Error(errMessage);
// }

// const logged = logAndThrow("Hi there!"); // This will log the error message and throw an error

function performJob(cb: (result: string) => void) {
    cb("JobDone!");
}

performJob(logResult)

type User = {
    name: string;
    age: number;
    greet: () => string;
}

let user: User = {
    name: "May",
    age: 3,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old!`)
        return this.name;
    }
}

user.greet();