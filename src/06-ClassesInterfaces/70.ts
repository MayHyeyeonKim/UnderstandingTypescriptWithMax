// 70. A Useful TypeScript Shortcut & Compiling to JavaScript

class User70 {
    constructor(public name: string = "", public age?: number) {

    }

    greet() {
        if (this.age === undefined) {
            // console.log(`Hello, my name is ${this.name}`)
            return `Hello, my name is ${this.name}`;
        } else {
            // console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
            return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
        }
    }
}

new User70(); // This is a valid instantiation of the class
console.log(new User70("MaybeMay", 3)); // Output: User70 { name: 'MaybeMay', age: 3 }
console.log(new User70("MaybeMayyy", 4).greet()); // Output: Hello, my name is MaybeMayyy and I am
console.log(new User70("MaybeMayyyy").greet()); // Output: Hello, my name is MaybeMayyyy and I am undefined years old.

/**
class User70 {
  public name: string;
  public age: number;

  constructor(name: string = "", age: number = 0) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${ this.name } and I am ${ this.age } years old.`);
  }
}
 */

/**
Parameter Properties
This is a TypeScript feature that allows you to declare and initialize class properties directly in the constructor parameters. 
It reduces boilerplate code by automatically creating class properties based on the constructor parameters.

Access Modifiers
Access modifiers in TypeScript (public, private, protected) control the visibility of class members.
- public: Members are accessible from anywhere.
- private: Members are accessible only within the class.
- protected: Members are accessible within the class and its subclasses.
This feature is useful for encapsulating class data and controlling access to it.
 */