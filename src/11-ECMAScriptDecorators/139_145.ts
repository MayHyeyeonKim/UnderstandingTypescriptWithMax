// 139. Creating a Method Decorator
// 140. Using Decorators To Solve A Common Problem
// 141. Implementing A Decorator-based Solution: autobind
// 142. Replacing Methods with Decorators
// 143. Introducing the Field Decorator
// 144. Building Configurable Decorators with Factories
// 145. Onwards to Experimental Decorators

function logger139<T extends new (...args: any[]) => any>(
  target: T,
  ctx: ClassDecoratorContext
) {
  console.log("logger decorator");
  console.log(target);
  console.log(ctx);

  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      console.log("class constructor");
      console.log(this);
    }
  };
}

// custom method decorator
function autobind(
  target: (...args: any[]) => any,
  ctx: ClassMethodDecoratorContext
) {
  ctx.addInitializer(function (this: any) {
    this[ctx.name] = this[ctx.name].bind(this);
  });

  return function (this: any) {
    console.log("Executing original function");
    target.apply(this);
  };
}

// custom field decorator factory
function replacer<T>(initValue: T) {
  return function replacerDecorator(
    target: undefined,
    ctx: ClassFieldDecoratorContext
  ) {
    console.log(target);
    console.log(ctx);

    return (initialValue: any) => {
      console.log(initialValue);
      return initValue;
    };
  };
}

@logger139
class Person139 {
  @replacer("")
  name = "May";

  @autobind
  greet() {
    console.log("Hi, I am " + this.name);
  }
}

const may = new Person139();
const greet139 = may.greet;
greet139();
