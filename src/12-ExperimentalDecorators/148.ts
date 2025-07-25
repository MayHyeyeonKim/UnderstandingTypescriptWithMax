function Logger148(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger148("Person class created!!!!")
class Person148 {
  name = "May";

  constructor() {
    console.log("Person constructor called");
  }
}

const pers148 = new Person148();
console.log(pers148);
