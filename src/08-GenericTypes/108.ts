// 108. Working with Generic Classes & Interfaces

interface Role108<T> {}

class User108<T> {
  constructor(public id: T) {}
}

const user108 = new User108<string>("May1");
console.log(user108.id); // Output: "May1"
