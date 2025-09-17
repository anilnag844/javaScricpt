// ==================== Object Basics ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Objects store key-value pairs: keys are strings (or Symbols), values can be any type
// - Objects are reference types: copying a variable copies the reference, not the object
// - Modify properties directly: obj.key = value or obj['key'] = value
// - Add new properties dynamically
// - Shallow copy: Object.assign({}, obj) or spread {...obj} to avoid shared references
// - Nested objects: modifying nested properties affects original object
// - Arrays of objects: store multiple objects; changes affect original references
// - Const objects: properties are mutable, but variable cannot be reassigned
// - Access properties: dot notation, bracket notation, dynamic keys
// - Iterate: for...in loop over keys
// - Utility methods: Object.keys(obj), Object.values(obj), Object.entries(obj)

// -------------------- Creating and Modifying an Object --------------------
let person = { name: 'Anil', age: 30 };
console.log('Initial person:', person);

// Modify existing properties
person.name = 'Kumar';
person.age = 31;

// Add a new property
person.address = 'Bangalore';
console.log('Modified person:', person);

// -------------------- Reference Copying --------------------
let anotherPerson = person; // Copies the reference
anotherPerson.name = 'Anil Kumar';
console.log('anotherPerson after change:', anotherPerson);
console.log('person after change (same object):', person); // Both updated

// -------------------- Creating a True Copy --------------------
// Shallow copy using Object.assign
let newPerson = Object.assign({}, person);
newPerson.name = 'John';
console.log('newPerson after change:', newPerson);
console.log('person unchanged:', person);

// Shallow copy using spread syntax
let copiedPerson = { ...person };
copiedPerson.age = 40;
console.log('copiedPerson:', copiedPerson);
console.log('person unchanged:', person);

// -------------------- Nested Objects --------------------
let employee = {
  name: 'Anil',
  address: { city: 'Bangalore', state: 'Karnataka' }
};
console.log('Employee:', employee);
employee.address.city = 'Mumbai';
console.log('Employee after nested change:', employee);

// -------------------- Array of Objects --------------------
let employees = [
  { name: 'Anil', age: 30 },
  { name: 'Kumar', age: 31 },
  { name: 'John', age: 32 }
];
console.log('Employees:', employees);
employees[0].name = 'Anil Kumar';
console.log('Employees after change:', employees);

// -------------------- Const Objects --------------------
const person1 = { name: 'Anil', age: 30 };
console.log('Const person1:', person1);
person1.name = 'Kumar'; // Allowed
console.log('Const person1 after change:', person1);
// person1 = {}; // ❌ Error

// -------------------- Accessing Properties --------------------
console.log('Dot notation:', person.name);
console.log('Bracket notation:', person['age']);
let key = 'name';
console.log('Bracket with variable:', person[key]);

// -------------------- Iterating Over Properties --------------------
console.log('For...in loop:');
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// -------------------- Utility Methods --------------------
console.log('Object.keys:', Object.keys(person));
console.log('Object.values:', Object.values(person));
console.log('Object.entries:', Object.entries(person));

// ==================== End of Object Basics ====================