# JavaScript Basics - Learning Curriculum

A comprehensive JavaScript learning resource covering fundamental programming concepts from basics to advanced functions. This repository is organized into 6 numbered modules, each building upon the previous one.

---

## 📚 Repository Structure

```
js-basics/
├── 1-basics/              # Core JavaScript fundamentals
├── 2-operators/           # Operator types and operations
├── 3-control-flow/        # Conditionals and loops
├── 4-objects/             # Object-oriented programming
├── 5-arrays/              # Array manipulation and methods
├── 6-functions/           # Function concepts and patterns
├── index.html             # Sample HTML file
├── index.js               # Sample JavaScript file
└── README.md              # This file
```

---

## 📖 Module Breakdown

### 1️⃣ **1-basics/** - Foundation Concepts

Learn the building blocks of JavaScript programming.

| File | Topic | Description |
|------|-------|-------------|
| `1-variable.js` | Variables | Declaring variables with `let`, `const`, and `var`; naming conventions; best practices |
| `2-constants.js` | Constants | Understanding `const` declarations; mutability of objects/arrays with `const` |
| `3-primitiveTypes.js` | Primitive Types | String, Number, Boolean, Undefined, Null, Symbol, BigInt; `typeof` operator |
| `4-dynamicTyping.js` | Dynamic vs Static Typing | JavaScript's dynamic nature vs statically typed languages; type coercion |
| `5-objects.js` | Objects | Key-value pairs; creating, modifying, and copying objects; reference types |
| `6-arrays.js` | Arrays | Array declaration; indexing; methods (push, pop, shift, unshift, splice) |
| `7-functions.js` | Functions | Function declaration and invocation; parameters vs arguments; return values |

**Key Concepts:**
- Variable naming rules and best practices
- Understanding `const` vs `let`
- Primitive types and type checking
- Objects and arrays as reference types
- Basic function structure and parameters

---

### 2️⃣ **2-operators/** - Operator Fundamentals

Master different types of operators and their usage.

| File | Topic | Description |
|------|-------|-------------|
| `javaScricptOperators.js` | All Operators | Arithmetic, Assignment, Comparison, Logical, Ternary, Bitwise, typeof, Increment/Decrement |

**Key Concepts:**
- Arithmetic operations: `+`, `-`, `*`, `/`, `%`, `**`
- Assignment operators: `=`, `+=`, `-=`, `*=`, `/=`, `%=`
- Comparison operators: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- Logical operators: `&&` (AND), `||` (OR), `!` (NOT)
- Ternary operator for inline conditionals
- Operator precedence and parentheses

---

### 3️⃣ **3-control-flow/** - Decision Making & Loops

Learn how to control program flow with conditionals and loops.

| File | Topic | Description |
|------|-------|-------------|
| `1-max.js` | Conditional Logic | Find maximum of two numbers using ternary operator |
| `2-landscape.js` | if/else Statements | Determine if image is landscape or portrait orientation |
| `3-fizzBuzz.js` | Nested Conditionals | Classic FizzBuzz problem combining multiple conditions |
| `5-evenOrOdd.js` | Number Classification | Check if a number is even or odd using modulus |
| `6-countTruthy.js` | Truthy/Falsy Values | Count truthy values in an array using logical operations |
| `7-stringProperties.js` | String Methods | String manipulation and property access |
| `8-multiples.js` | Loop Patterns | Count multiples using loops and conditionals |
| `9-grade.js` | Grade Calculation | Convert numeric score to letter grade |
| `10-stars.js` | Pattern Generation | Generate star patterns using nested loops |
| `11-primeNumber.js` | Prime Number Check | Algorithm to identify prime numbers |
| `controlFlowSummery.js` | Quick Reference | Complete revision guide with key concepts |

**Key Concepts:**
- `if`, `else if`, `else` statements
- Ternary operator for concise conditionals
- Truthy and falsy values in JavaScript
- `for` loops and loop control
- `while` loops
- Loop optimization and break/continue

---

### 4️⃣ **4-objects/** - Object-Oriented Programming

Practice working with objects and solving problems using object patterns.

| File | Topic | Description |
|------|-------|-------------|
| `1-maxOfTwo.js` | Function with Return Value | Compare two numbers and return maximum |
| `2-landscape.js` | Object as Parameter | Check landscape orientation; objects reduce parameter count |
| `3-fizzBuzz.js` | Refactoring with Objects | Use objects to simplify and organize code |
| `4-checkSpeed.js` | Speed Limit Checker | Validate speed and return appropriate status |
| `5-showNumbers.js` | Array Processing | Display numbers with conditions (display if positive, exit if negative) |
| `6-countTruthy.js` | Count Truthy Values | Count truthy elements in an object |
| `7-showProperties.js` | Object Iteration | Loop through object properties using `for...in` |
| `8-sum.js` | Calculate Object Sum | Sum all numeric values in an object |
| `9-grade.js` | Grade Assignment | Convert scores to grades using objects |
| `9-showStars.js` | Pattern Generation | Generate star patterns with object configuration |
| `10-showPrimes.js` | Prime Number Display | Find and display all prime numbers up to limit |
| `objectSummery.js` | Complete Reference | Comprehensive revision guide for objects |

**Key Concepts:**
- Object creation and manipulation
- Factory functions vs Constructor functions
- `this` keyword behavior
- Prototype-based inheritance
- Arrow functions and lexical `this`
- Static methods and getters/setters
- Shallow vs deep cloning
- Value vs Reference types

---

### 5️⃣ **5-arrays/** - Array Methods & Manipulation

Master advanced array operations and functional programming patterns.

| File | Topic | Description |
|------|-------|-------------|
| `1-arrayFromRange.js` | Create Array from Range | Generate arrays with sequential values |
| `2-includes.js` | Check Array Membership | Determine if array contains specific element |
| `3-except.js` | Filter Elements | Remove specified elements from array |
| `4-move.js` | Move Element Position | Rearrange elements within array |
| `5-countOccurrences.js` | Count Element Frequency | Tally occurrences of elements |
| `6-max.js` | Find Maximum Value | Identify largest element in array |
| `arraysSummery.js` | Complete Reference | Comprehensive revision guide for arrays |

**Key Concepts:**
- `push`, `pop`, `shift`, `unshift` for adding/removing elements
- `splice` for middle insertions and deletions
- `find` vs `filter` - first match vs all matches
- `map` for transformation vs `reduce` for aggregation
- `some` and `every` for boolean checks
- Spread operator (`...`) for copying and merging
- Array destructuring
- Pure functions and immutability
- `slice().sort()` to avoid mutation

---

### 6️⃣ **6-functions/** - Advanced Function Concepts

Explore function declarations, expressions, and advanced patterns.

| File | Topic | Description |
|------|-------|-------------|
| `1-sumOfArgs.js` | Variable Arguments | Handle unknown number of parameters using `arguments` or rest operator |
| `2-areaOfCircle.js` | Default Parameters | Provide fallback values for function parameters |
| `3-errorHandling.js` | Try/Catch/Finally | Handle runtime errors with error handling blocks |
| `functionsSummery.js` | Complete Reference | Comprehensive revision guide for functions |

**Key Concepts:**
- Function declaration vs expression
- Hoisting rules for functions and variables
- Arrow function syntax and behavior
- Lexical `this` in arrow functions
- `arguments` object vs rest parameters
- Default parameters
- Try/catch/finally for error handling
- Scope and closures
- `let` vs `var` differences
- Getter and setter methods

---

## 🎯 Learning Path

### Recommended Study Order:

1. **Start here:** `1-basics/` - Understand variables, types, and basic structures
2. **Then:** `2-operators/` - Learn how to operate on values
3. **Next:** `3-control-flow/` - Control your program flow with logic
4. **Then:** `1-basics/7-functions.js` - Understand basic functions
5. **Continue:** `4-objects/` - Structure code with objects
6. **Then:** `5-arrays/` - Work with collections efficiently
7. **Finally:** `6-functions/` - Master advanced function concepts

### Practice Tips:

✅ Read each file's comments for explanations  
✅ Run the code to see outputs  
✅ Modify examples to experiment  
✅ Refer to the `*Summery.js` files for quick revision  
✅ Practice the problems multiple times  
✅ Try to solve them without looking at solutions first

---

## 📝 Quick Reference

### Variable Declaration
```javascript
let x = 10;        // Block-scoped, can be reassigned
const y = 20;      // Block-scoped, cannot be reassigned
var z = 30;        // Function-scoped (avoid in modern JS)
```

### Common Operators
```javascript
// Arithmetic: +, -, *, /, %, **
// Comparison: ===, !==, >, <, >=, <=
// Logical: &&, ||, !
// Ternary: condition ? valueIfTrue : valueIfFalse
```

### Array Operations
```javascript
arr.push(value);           // Add to end
arr.pop();                 // Remove from end
arr.filter(condition);     // Get matching elements
arr.map(transformation);   // Transform elements
arr.reduce(combiner);      // Combine to one value
```

### Object Operations
```javascript
obj.property;              // Dot notation
obj['property'];           // Bracket notation
Object.keys(obj);          // Get all keys
Object.values(obj);        // Get all values
{ ...obj };                // Shallow copy
```

### Control Flow
```javascript
if (condition) { }
else if (condition) { }
else { }

for (let i = 0; i < 10; i++) { }
while (condition) { }
do { } while (condition);
```

### Functions
```javascript
function name(param1, param2) { return value; }
const arrow = (param) => param * 2;
const named = function(param) { return param; };
```

---

## 🔗 Key Concepts Summary

| Concept | Location | Importance |
|---------|----------|------------|
| Variables & Constants | `1-basics/1-2` | 🌟🌟🌟 Fundamental |
| Primitive Types | `1-basics/3` | 🌟🌟🌟 Essential |
| Dynamic Typing | `1-basics/4` | 🌟🌟 Important |
| Objects & References | `1-basics/5, 4-objects/` | 🌟🌟🌟 Critical |
| Arrays | `1-basics/6, 5-arrays/` | 🌟🌟🌟 Critical |
| Operators | `2-operators/` | 🌟🌟🌟 Essential |
| Control Flow | `3-control-flow/` | 🌟🌟🌟 Essential |
| Functions | `1-basics/7, 6-functions/` | 🌟🌟🌟 Critical |

---

## 💡 Best Practices

### Code Style
- Use `const` by default, `let` only when reassignment is needed
- Use camelCase for variable and function names
- Use descriptive names over single letters
- Write comments explaining the "why", not the "what"

### Performance
- Use `push`/`pop` instead of `unshift`/`shift` for efficiency
- Prefer `find()` when you need first match
- Use `filter()` when you need all matches
- Avoid unnecessary loops and nested loops

### Safety
- Use strict equality (`===`) instead of loose (`==`)
- Always handle errors with try/catch
- Use `const` for objects/arrays to prevent reassignment
- Use shallow copy (`{...obj}`) for simple objects
- Use `structuredClone()` for deep copying

---

## 🧪 Running the Code

### In Browser
1. Open `index.html` in a browser
2. Open Developer Console (F12)
3. The `index.js` file is automatically loaded

### In Node.js
```bash
node 1-basics/1-variable.js
node 3-control-flow/1-max.js
node 5-arrays/1-arrayFromRange.js
```

### In VS Code Terminal
```bash
# Run a specific file
node path/to/file.js

# Run all files in a directory
for file in 1-basics/*.js; do node "$file"; done
```

---

## 📚 Resources for Further Learning

- **MDN Web Docs**: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **JavaScript.info**: https://javascript.info
- **You Don't Know JS (Book Series)**
- **JavaScript Algorithms & Data Structures** on FreeCodeCamp

---

## 🏆 Success Checklist

After completing this curriculum, you should be able to:

- [ ] Understand variables, constants, and primitive types
- [ ] Use operators correctly with proper precedence
- [ ] Write conditionals and loops effectively
- [ ] Create and manipulate objects
- [ ] Work with arrays and their methods
- [ ] Write functions with proper scope and closures
- [ ] Handle errors gracefully
- [ ] Write clean, readable, and efficient code
- [ ] Understand the difference between reference and value types
- [ ] Apply best practices in JavaScript programming

---

## 📅 Last Updated

January 2025 - Complete revision with modern JavaScript practices

---

## 📧 Notes

This is a self-paced learning curriculum. Each file contains:
- Quick summary for revision
- Detailed examples with explanations
- Common pitfalls and best practices
- Interview-important concepts

**Tip:** Review the `*Summery.js` files regularly for quick reference before interviews or coding challenges.

---

Happy Learning! 🚀
