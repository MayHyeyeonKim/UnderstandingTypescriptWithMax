// 83. Using Interfaces To Define Function Types

type SumFnT = (a: number, b: number) => number; // function type
let sum006: SumFnT; // making sure sum can only store values of that function type
sum006 = (a, b) => a + b; // assigning a value that adheres to that function type

interface SumFnI {
  (a: number, b: number): number;
}

// Typically, you'll encounter the first version (type SumFnT) more often but it's worth knowing about the alternative, too.
