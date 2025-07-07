// 69. Creating a First Class
class User69 {
    name: string;
    age: number;
    constructor(name: string = "", age: number = 0) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

new User69(); // This is a valid instantiation of the class
console.log(new User69("MaybeMay", 3)); // Output: User69 { name: 'MaybeMay', age: 3 }
console.log(new User69("MaybeMayyy", 4).greet()); // Output: Hello, my name is MaybeMayyy and I am 4 years old. and returns undefined