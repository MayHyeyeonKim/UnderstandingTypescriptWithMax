// 120. "typeof" & A More Useful Example

const settings = {
    minLevel: 1,
    maxLevel: 100,
    defaultLevel: 50,
    isEnabled: true,
}

type settings120 = typeof settings;

/**
 * type
 exists only in compile time, not in runtime
 type settings120 = typeof settings;  // ← type definition
 console.log(settings120)             // ← trying to use it as a value ❌

 */

// console.log(settings120) // This will not work because `settings120` is a type, not a value

const settingOutput120: settings120 = {
    minLevel: 1,
    maxLevel: 100,
    defaultLevel: 50,
    isEnabled: true,
};

console.log(settingOutput120); // This will work because `settingOutput120` is a value of type `settings120`

function getSettings120(s: typeof settings): settings120 {
    return {
        minLevel: 1,
        maxLevel: 100,
        defaultLevel: 50,
        isEnabled: true,
    };
}

function getSettings120_1(): settings120 {
    return {
        minLevel: 1,
        maxLevel: 100,
        defaultLevel: 50,
        isEnabled: true,
    };
}

function getSettings120_2(s: typeof settings): settings120 {
    return {
        ...s,
        defaultLevel: s.defaultLevel ?? 50,
    };
}