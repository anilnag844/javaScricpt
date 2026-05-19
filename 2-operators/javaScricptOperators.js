// ==================== JavaScript Operators ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Operators are special symbols used to perform operations on values/variables
// - Categories:
//   1. Arithmetic       +, -, *, /, %, ** (basic math)
//   2. Assignment       =, +=, -=, *=, /=, %= (update values)
//   3. Comparison       ==, ===, !=, !==, >, <, >=, <= (compare values)
//   4. Logical          &&, ||, ! (boolean logic; also works with non-boolean values for short-circuiting)
//   5. Ternary          condition ? valueIfTrue : valueIfFalse (inline if)
//   6. typeof           returns type of a value
//   7. Increment/Decrement  ++, -- (pre/post)
//   8. Bitwise          &, |, ^, ~, <<, >>, >>> (operate on binary representation)
// - Operator precedence determines the order of evaluation
// - Parentheses () can override precedence
// - Logical operators with non-boolean values return the last evaluated value

// -------------------- Arithmetic Operators --------------------
let a = 10, b = 5;
console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("a / b =", a / b); // Division
console.log("a % b =", a % b); // Modulus
console.log("a ** b =", a ** b); // Exponentiation

// -------------------- Assignment Operators --------------------
let c = 20;
c += 5; console.log("c after += 5:", c);
c -= 3; console.log("c after -= 3:", c);
c *= 2; console.log("c after *= 2:", c);
c /= 4; console.log("c after /= 4:", c);
c %= 3; console.log("c after %= 3:", c);

// -------------------- Comparison Operators --------------------
let x = 10, y = '10';
console.log("x == y:", x == y);   // loose equality
console.log("x === y:", x === y); // strict equality
console.log("x != y:", x != y);   // loose inequality
console.log("x !== y:", x !== y); // strict inequality
console.log("x > b:", x > b);
console.log("x < b:", x < b);
console.log("x >= b:", x >= b);
console.log("x <= b:", x <= b);

// -------------------- Logical Operators --------------------
// Boolean values
let isAdult = true, hasID = false;
console.log("isAdult && hasID:", isAdult && hasID); // AND
console.log("isAdult || hasID:", isAdult || hasID); // OR
console.log("!isAdult:", !isAdult); // NOT

// Non-boolean values (short-circuit evaluation)
console.log("null || 'default':", null || 'default'); // 'default'
console.log("'' && 'Hello':", '' && 'Hello'); // ''
console.log("0 || 42:", 0 || 42); // 42
console.log("'Hi' && 0:", 'Hi' && 0); // 0

// -------------------- Ternary Operator --------------------
let ageForVote = 18;
let canVote = (a >= ageForVote) ? 'Yes, can vote' : 'No, cannot vote';
console.log("Can vote:", canVote);

// -------------------- typeof Operator --------------------
console.log("Type of a:", typeof a);
console.log("Type of b:", typeof b);
console.log("Type of y:", typeof y);
console.log("Type of isAdult:", typeof isAdult);

// -------------------- Operator Precedence --------------------
let result = a + b * 2;        // * has higher precedence
console.log("Result of a + b * 2:", result);
result = (a + b) * 2;          // parentheses override precedence
console.log("Result of (a + b) * 2:", result);

// -------------------- Increment / Decrement Operators --------------------
let count = 0;
console.log("Post-increment:", count++); console.log("After post-increment:", count);
console.log("Pre-increment:", ++count);
console.log("Post-decrement:", count--);
console.log("Pre-decrement:", --count);

// -------------------- Bitwise Operators --------------------
let p = 5, q = 3;
console.log("p & q:", p & q);   // AND
console.log("p | q:", p | q);   // OR
console.log("p ^ q:", p ^ q);   // XOR
console.log("~p:", ~p);         // NOT
console.log("p << 1:", p << 1); // left shift
console.log("p >> 1:", p >> 1); // right shift
console.log("p >>> 1:", p >>> 1); // unsigned right shift

// -------------------- End of JavaScript Operators --------------------