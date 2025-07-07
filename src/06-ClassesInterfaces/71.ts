// 71. Making Sense of "public" and "private"
// Parameter Property
// Parameter property uses an access modifier to automatically create and initialize a class property from the constructor parameter.

// This is a TypeScript feature that allows you to declare and initialize class properties directly in the constructor parameters.
// It reduces boilerplate code by automatically creating class properties based on the constructor parameters.
// Access modifiers in TypeScript (public, private, protected) control the visibility of class members.
// - public: Members are accessible from anywhere.
// - private: Members are accessible only within the class.
// - protected: Members are accessible within the class and its subclasses.
// This feature is useful for encapsulating class data and controlling access to it.
class User71 {
    public hobbies: string[] = [];
    constructor(public name: string = "", public age?: number) { }
}

// const May = new User71("MaybeMay", 3);
// console.log(May); // Output: User71 { name: 'MaybeMay', age: 3, hobbies: [] }
// console.log(May.name); // Output: MaybeMay
// console.log(May.age); // Output: 3
// console.log(May.hobbies); // Output: []

// Parameter Property with private access modifier
// This is a TypeScript feature that allows you to declare and initialize class properties directly in the constructor parameters.
// It reduces boilerplate code by automatically creating class properties based on the constructor parameters.
class User71_1 {
    public hobbies: string[] = [];
    constructor(public name: string = "", private age?: number) { }

    sayHello() {
        return `Hello, my name is ${this.name} and I am ${this.age ?? "not specified"} years old.`;
    }

}

// const MaybeMay1 = new User71_1("MaybeMay", 3);
// console.log(MaybeMay1); // Output: User71_1 { name: 'MaybeMay', age: 3, hobbies: [] }
// console.log(MaybeMay1.name); // Output: MaybeMay
// // console.log(MaybeMay1.age); // Error: Property 'age
// console.log(MaybeMay1.sayHello()); // Output: Hello, my name is MaybeMay and I am 3 years old.

// no parameter property
// This is a more traditional way of defining a class with properties and methods without using parameter properties
class User71_2 {
    public name: string;
    private age?: number;
    public hobbies: string[] = [];

    constructor(name: string = "", age?: number) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return `Hello, my name is ${this.name} and I am ${this.age ?? "not specified"} years old.`;
    }
}

class User71_3 {
    public name: string;
    protected age?: number;
    public hobbies: string[] = [];

    constructor(name: string = "", age?: number) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return `Hello, my name is ${this.name} and I am ${this.age ?? "not specified"} years old.`;
    }
}


export { User71, User71_1, User71_2, User71_3 };