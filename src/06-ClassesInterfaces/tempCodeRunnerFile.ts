// 76. Understanding Inheritance

import { User71_3 } from "./71";
// When a module is imported, its code is executed immediately.
// (But only once — the first time it is imported.)

class Employee extends User71_3 {
    constructor(public jobTitle?: string) {
        super("MaybeMay", 1);
    }

    doWork() {
        this.name = "MaybeMay";
        return `I am working as a ${this.jobTitle}.`;
    }
}

console.log(new Employee("developer").doWork()); // Output: I am working as a developer.
console.log(new Employee("").sayHello()); // Output: Hello, my name is MaybeMay and I am 1 years old.