// 127. Readonly Types & Optional Mapping

type Operations = {
  add?: (a: number, b: number) => number;
  subtract?: (a: number, b: number) => number;
};

type Results<Operations> = {
  [Key in keyof Operations]-?: number;
}; // -? is used to remove optionality from the keys

type ResultsExample = {
  add?: number;
  subtract?: number;
};

/**
 ?: This type will ensure that all keys in Results are required, even if they were optional in Operations.
-?: This type will ensure that all keys in Results are required, even if they were optional in Operations.
+?: This type will ensure that all keys in Results are optional, even if they were required in Operations.

readonly?: This type will ensure that all keys in Results are readonly, meaning they cannot be reassigned.
-readonly?: This type will ensure that all keys in Results are readonly, meaning they cannot be reassigned.
+readonly?: This type will ensure that all keys in Results are optional, meaning they can be omitted.
*/
