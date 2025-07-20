// 136. Building a First Decorator

function logger136(target: any, ctx: ClassDecoratorContext) {
  console.log("Logger called");
  console.log("Target:", target);
  console.log("Context:", ctx);
}

@logger136
class Person136 {
  name = "May";

  greet() {
    console.log();
  }
}
