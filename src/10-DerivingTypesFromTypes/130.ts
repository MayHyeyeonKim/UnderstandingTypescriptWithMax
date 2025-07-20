// 130. Conditional Types - Another Example

type FullnamePerson = { firstName: string; lastName: string };
type FullnameOrNothing<T> = T extends FullnamePerson ? string : never;

function getFullname<T extends object>(person: T): FullnameOrNothing<T> {
  if (
    "firstName" in person &&
    "lastName" in person &&
    person.firstName &&
    person.lastName
  ) {
    return `${person.firstName} ${person.lastName}` as FullnameOrNothing<T>;
  }

  throw new Error("No first name and / or last name found.");
}

// const name1 = getFullname({});
const name2 = getFullname({ firstName: "May", lastName: "12312" });
console.log(name2); // May 12312
