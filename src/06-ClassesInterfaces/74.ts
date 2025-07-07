// 74. Setting Values with Setters

//getter is a method that retrieves a value, while setter is a method that sets a value.

class User74 {
    constructor(private firstName: string, private lastName: string) { }

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    set fullName(name: string) {
        const parts = name.split(" ");
        this.firstName = parts[0] || "";
        this.lastName = parts[1] || "";
    }
}

const user74 = new User74("MaybeMay", "Kim");
console.log(user74.fullName); // Output: MaybeMay Kim
user74.fullName = "May Chuchu"
console.log(user74.fullName); // Output: May Chuchu

// why we need getter and setter separately?
// Getters and setters allow you to control how properties are accessed and modified, providing encapsulation
// and validation. They can also be used to compute values dynamically or to trigger side effects when
// properties are accessed or modified. This is particularly useful in scenarios where you want to enforce
// certain rules or perform additional logic when interacting with class properties.