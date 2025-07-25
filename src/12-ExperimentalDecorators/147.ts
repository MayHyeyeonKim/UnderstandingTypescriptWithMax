function Logger147(constructor: Function) {
  console.log("Logger decorator called");
}

@Logger147
class Person147 {
  name = "May";

  constructor() {
    console.log("Person constructor called");
  }
}

const pers = new Person147();
console.log(pers);
