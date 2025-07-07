// 73. Understanding Getters

class User73 {
    constructor(private firstName: string, private lastName: string) { }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}

const May73 = new User73("MaybeMay", "Kim");
console.log(May73); // Output: User73 { firstName: 'MaybeMay', lastName: 'Kim' }
console.log(May73.fullName); // Output: MaybeMay Kim