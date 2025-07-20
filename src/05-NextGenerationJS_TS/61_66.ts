const hobbies = ['Reading', 'Gaming', 'Hiking', 'dancing'];
const activeHobbies = [];

for (const hobby of hobbies) {
    if (hobby !== 'Hiking') {
        activeHobbies.push(hobby);
    } else {
        activeHobbies.push(...['Camping', 'Fishing']);
    }
}

const [hobby1, hobby2, ...restHobbies] = activeHobbies;

console.log(activeHobbies); // Output: ['Reading', 'Gaming', 'Camping', 'Fishing', 'dancing']

console.log(hobby1); // Output: 'Reading'
console.log(hobby2); // Output: 'Gaming'
console.log(restHobbies); // Output: ['Camping', 'Fishing', 'dancing']

//object spread operator
const user61 = { name: 'May', age: 3, hobbies: ['Reading', 'Gaming'] };
const userWithAddress = { ...user61, address: '123 Main St' };
console.log(userWithAddress); // Output: { name: 'May', age: 3, hobbies: ['Reading', 'Gaming'], address: '123 Main St' }

const { name: user61Name, age: user61Age, ...anythingElse } = user61;
const updatedUser61 = { ...user61, name: "Maychu" }
console.log(updatedUser61); // Output: { name: 'Maychu', age: 3, hobbies: ['Reading', 'Gaming'] }
console.log(user61Name); // Output: 'May'   
console.log(user61Age); // Output: 3
console.log(anythingElse); // Output: { hobbies: ['Reading', 'Gaming'] }