// 137. Building a Class Decorators That Edits a Class
// 138. Understanding Decorator Code Execution Order

function logger137<T extends new (...args: any[]) => any>(
  target: T,
  ctx: ClassDecoratorContext
) {
  console.log("Logger called!!!!!!!!!!!!!!!!!!!!!!");
  console.log("Target????:", target);
  console.log("Context?????", ctx);

  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      console.log("class constructor called with args::::: ", args);
      console.log("this????????????", this);
    }
  };
}

@logger137
class Person137 {
  name = "John";

  greet() {
    console.log(`Hello, my name is............ ${this.name}`);
  }

  // In a class, properties are stored on the instance because each object needs its own copy, while methods are stored on the prototype so all instances can share them.
}

const person137 = new Person137();
console.log("person137 ---------> ", person137);

/**
 1. Execute @logger137 decorator when the class is defined
 2. The decorator receives the class constructor
 3. The decorator returns a new class that extends the original class
 4.  The new class constructor calls the original constructor using super(...)
 5. Extra logic (like logging) can be added in the new constructor
 */
