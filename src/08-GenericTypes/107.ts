// 107. Constraints & Multiple Generic Types

function mergeObj107<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}

const result107 = mergeObj107({ name: "May" }, { age: 500 }); // result107 is { name: "May", age: 500 }
const result107_1 = mergeObj107({ name: "May" }, { name: "Nay" }); // result107_1 is { name: "Nay" }
