// 99. The "satisfies" Keyword

const dataEntriesLoose: Record<string, number> = {
    entry1: 1,
    entry2: 2,
};

console.log(dataEntriesLoose.entry3); // ❌ No error (but entry3 doesn’t exist!)

const dataEntriesStrict = {
    entry1: 1,
    entry2: 2,
} satisfies Record<string, number>;

// OK
console.log(dataEntriesStrict.entry1);

// ❌ Error: Property 'entry3' does not exist
console.log(dataEntriesStrict.entry3);

//when using satisfies, TypeScript checks that the object matches the type but does not change the type of the object itself.