// 97. Constant Types with "as const"

store.id = 5;
store.isOpen = false;
// store.name = 'Max';

let roles = ['admin', 'guest', 'editor'] as const;
// roles.push('max');
const firstRole = roles[0];

enum Role {
    ADMIN = 'admin',
    GUEST = 'guest',
    EDITOR = 'editor',
}
const firstRoleEnum = Role.ADMIN;
// console.log(firstRole === firstRoleEnum); // true


/* 
[as const] vs [enum]

- Type Inference:
  • 'as const': typeof roles[number] → union type of string literals
  • enum: creates a named type (RoleEnum)

- Runtime Behavior:
  • 'as const': plain read-only array
  • enum: object with key-value pairs

- Value Comparison:
  • Both are string values → can be compared directly with ===

- Extras:
  • 'as const': lightweight, fully tree-shakable
  • enum: more structured, useful when keys are important
*/