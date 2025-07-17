// 122. Extracting Keys with "keyof"
// 123. "keyof" & A More Useful Example

type User122 = { name: string; age: number };
type UserKeys = keyof User122;

let validKey: UserKeys;

validKey = 'name';
validKey = 'age';

function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
    const val = obj[key];

    if (val === undefined || val === null) {
        throw new Error('Accessing undefined or null value.');
    }

    return val;
}

const data = { id: 1, isStored: false, values: [1, -5, 10] };
const isStored = getProp(data, 'isStored');

const use122 = { name: 'Max', age: 35 };

const val = getProp(user, 'age');



// example of using "keyof" 
type Person = {
    name: string;
    age: number;
    isStudent: boolean;
};

type PersonKeys = keyof Person; // "name" | "age" | "isStudent"