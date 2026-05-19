// ==================== Const Variables ====================

// -------------------- Quick Summary (For Revision) --------------------
// - const: declares a variable whose reference cannot be reassigned
//     - Must be initialized at declaration
//     - Block-scoped
//     - Cannot reassign the variable itself
//     - Objects/arrays declared with const can have their properties/elements modified
// - let: block-scoped, can be reassigned
// - var: function-scoped, hoisted (avoid in modern JS)
// - Use const by default; use let only if reassignment is needed

// -------------------- Example: Primitive with const --------------------
const interestRate = 1;
console.log('interestRate1:', interestRate);
// ❌ Reassigning primitive const is not allowed
// interestRate = 3;

// -------------------- Example: Const with Objects --------------------
const personConst = { name: 'Anil', age: 30 };
console.log('Const object (initial):', personConst);

// ✅ Allowed: Modifying object properties
personConst.age = 31;
console.log('Const object (after property change):', personConst);

// ❌ Not allowed: Reassigning the object entirely
// personConst = { name: 'Kumar', age: 25 };

// -------------------- Example: Const with Arrays --------------------
const numbers = [1, 2, 3];
console.log('Const array (initial):', numbers);

// ✅ Allowed: Modifying elements
numbers.push(4);
console.log('Const array (after push):', numbers);

// ❌ Not allowed: Reassigning the array entirely
// numbers = [5, 6, 7];

// -------------------- End of Const Variables --------------------