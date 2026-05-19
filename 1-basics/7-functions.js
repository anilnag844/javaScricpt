// ==================== Functions Basics ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Functions are reusable blocks of code that perform tasks
// - Declared using `function` keyword or as arrow functions
// - Can accept parameters (placeholders) and return values
// - Use `return` to send a value back from a function
// - `typeof` a function returns "function"
// - Functions help reduce code duplication and improve readability
// - Can be called multiple times with different arguments
// - Can perform a task (side-effect) or return a value

// -------------------- Example: Performing a Task --------------------
function greet(firstName, lastName) {
    console.log('Hello ' + firstName + ' ' + lastName);
}
greet('Anil', 'Kumar'); // Output: Hello Anil Kumar

console.log(typeof greet); // "function"

// -------------------- Example: Returning a Value --------------------
function square(number) {
    return number * number;
}   
console.log(square(5)); // Output: 25

// -------------------- Notes --------------------
// - Parameters: firstName, lastName
// - Arguments: 'Anil', 'Kumar'
// - Can use template literals for cleaner syntax:
//   console.log(`Hello ${firstName} ${lastName}`)
// - Functions can be stored in variables, passed as arguments, or returned from other functions

// ==================== End of Functions Basics ====================
