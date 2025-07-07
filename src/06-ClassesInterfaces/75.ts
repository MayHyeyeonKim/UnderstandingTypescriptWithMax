// 75. Exploring Static Properties & Methods

class User75 {
    constructor(public name: string, public age: number) { }

    static eid = "User75"
    static greet() {
        return `Hello from ${this.eid}`;
    }
}

console.log(User75.eid); // Output: User75
console.log(User75.greet()); // Output: Hello from User75
// Static properties are accessed directly on the class, not on instances