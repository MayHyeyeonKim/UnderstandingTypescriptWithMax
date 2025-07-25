// 136. Building a First Decorator

function logger136(target: any) {
  console.log("Logger called");
  console.log("Target:", target);
}

@logger136
class Person136 {
  name = "May";

  greet() {
    console.log();
  }
}
