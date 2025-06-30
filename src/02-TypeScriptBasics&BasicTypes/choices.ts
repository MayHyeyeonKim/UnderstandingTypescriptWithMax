import { possibleResults } from './arrays-objects';

enum Role2 {
    Admin,
    Editor,
    Viewer,
    Guest
}

type Role = 'admin' | 'editor' | 'viewer' | 'guest';

type User = {
    name: string;
    age: number;
    role: Role;
}

let userRole: Role = 'admin';
let userRole2: Role2 = Role2.Admin; // valid if using enum

userRole = 'editor'; // valid

// possibleResults는 arrays-objects.ts에서 import됨
console.log(possibleResults); // [1, -2]

let gameResults: [1 | -1, 1 | -1]; // tuple type with two possible values
let result: [1 | -1, 1 | -1] = [1, -1]; // valid tuple assignment

function access(role: Role) {
    // Function to access based on user role
}