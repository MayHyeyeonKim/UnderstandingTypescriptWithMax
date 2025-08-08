import * as _ from "lodash";

const nums = [1, 2, 3, 4, 5];
_.chunk(nums, 2).forEach((chunk) => {
  console.log(chunk);
});

/**
Type declaration file (.d.ts) notes
 * - Provides type support for JS libraries in TypeScript
 * - Common distribution options:
 *   1) Ship JS code + .d.ts together (most common)
 *   2) Use TypeScript and enable "declaration: true" to auto-generate .d.ts
 * - Declare "types" field in package.json to point to the .d.ts file

Declare
* - Use `declare` to tell TypeScript about existing global variables or structures.
* - It provides type info without defining actual code.
* - Helpful when using external scripts or HTML-defined globals.
 */
