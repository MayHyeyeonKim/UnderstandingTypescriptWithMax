// 72. Marking Fields as "readonly"

class User72 {
    readonly hobbies: string[] = [];
    constructor(public name: string = "", public readonly age?: number,) { }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age ?? "not specified"} years old.`);
    }
}

const MaybeMay = new User72("MaybeMay", 8);
console.log(MaybeMay); // Output: User72 { name: 'MaybeMay', age: 8, hobbies: [] }
console.log(MaybeMay.name); // Output: MaybeMay
console.log(MaybeMay.age); // Output: 8
// MaybeMay.age = 10; // Error: Cannot assign to 'age' because it is a read-only property.
console.log(MaybeMay.hobbies); // Output: []