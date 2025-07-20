// 134. What Are Decorators? And ECMAScript Decorators vs Experimental Decorators

// What is a decorator?
// - A decorator is a meta-programming feature that modifies the behavior of classes, methods, or properties.
// - Used not only in TypeScript, but also in other languages (e.g., Python).

// How do decorators work?
// - Attach decorators to "things" (like class properties) using `@` symbol.
// - Example: @Length(min, max) adds validation logic to a class property.

// What decorators can do:
// - Modify how classes, methods, or properties behave
// - Add validation, logging, reactivity, etc.
// - Used by frameworks like Angular to define reusable components

// Two types of decorators in TypeScript:
// 1. ECMAScript decorators (official, future JavaScript standard)
// 2. Experimental / legacy decorators (older TS-only version)

// Differences between them:
// - ECMAScript decorators follow the current TC39 proposal (Stage 3)
// - Experimental decorators use older syntax and require `"experimentalDecorators": true` in tsconfig
// - TypeScript supports both, but uses different syntax

// Summary:
// - Decorators are optional but powerful
// - They let you write code that changes how other code behaves
// - This section covers ECMAScript-style decorators; legacy decorators are discussed separately
