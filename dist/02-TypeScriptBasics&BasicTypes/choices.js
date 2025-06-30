"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrays_objects_1 = require("./arrays-objects");
var Role2;
(function (Role2) {
    Role2[Role2["Admin"] = 0] = "Admin";
    Role2[Role2["Editor"] = 1] = "Editor";
    Role2[Role2["Viewer"] = 2] = "Viewer";
    Role2[Role2["Guest"] = 3] = "Guest";
})(Role2 || (Role2 = {}));
let userRole = 'admin';
let userRole2 = Role2.Admin; // valid if using enum
userRole = 'editor'; // valid
// possibleResults는 arrays-objects.ts에서 import됨
console.log(arrays_objects_1.possibleResults); // [1, -2]
let gameResults; // tuple type with two possible values
let result = [1, -1]; // valid tuple assignment
function access(role) {
    // Function to access based on user role
}
