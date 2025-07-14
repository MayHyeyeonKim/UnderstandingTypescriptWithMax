// 103. Creating & Using a Generic Type

let names103: Array<string> = ["Max", "May"];

type DataStore<T> = {
  [Key: string]: T;
};

let store103: DataStore<string | boolean> = {};

store103.name = "Max";
store103.isInstructor = true;

let nameStore: DataStore<string> = {};
