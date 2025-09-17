// ==================== Variable Basics ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Variables store data values and are declared using let, const, or var
// - Naming rules:
//     1. Cannot use reserved keywords (e.g., let, var, if, return)
//     2. Should be meaningful and descriptive
//     3. Cannot start with a number
//     4. Cannot contain spaces or hyphens; use camelCase
//     5. Are case-sensitive
//     6. Cannot be redeclared in the same scope with let/const
//     7. Avoid shadowing existing functions/variables
// - Best practices:
//     - Use camelCase for variable names
//     - Use descriptive names over single letters
//     - Use const by default, let only if reassignment is needed
// - var is function-scoped; avoid in modern JS

// -------------------- Example --------------------
let name;
name = 'Anil';
console.log(name); // Output: Anil

// ✅ Valid names
let firstName = 'Anil';
let age = 30;
let isMarried = false;
let totalAmount = 5000;

// ❌ Invalid names
// let let = 'keyword';        // Reserved keyword
// let 1stName = 'Anil';       // Starts with a number
// let first-name = 'Anil';    // Hyphen not allowed
// let full name = 'Anil';     // Space not allowed
// let Name = 'Anil';          // Case-sensitive confusion

// -------------------- Best Practice --------------------
// - Use camelCase (firstName, totalAmount)
// - Prefer descriptive names
// - Use const when value won't change

// ==================== End of Variable Basics ====================
