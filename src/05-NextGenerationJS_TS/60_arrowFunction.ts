/**
JavaScript Function Declarations vs Expressions

1) Functrion Declarations:
- Hoisted: Can be called before declaration.

function add(a, b) {
  return a + b;
}

2) Function Expressions:
- Not hoisted: Cannot be called before declaration.
const add = function(a, b) {
  return a + b;
};

3) Arrow Functions
- Shorter syntax for function expressions.
const add = (a, b) => a + b;
- Cannot be used as constructors (no 'new').
const add = (a, b) => {
  return a + b;
};
- Lexical 'this': 'this' refers to the surrounding context, not the function itself
 */
