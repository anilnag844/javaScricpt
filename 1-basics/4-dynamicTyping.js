// ==================== Static vs Dynamic Typing ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Static typing: type is associated with the variable
//     - Examples: C, C++, Java, C#
//     - Variable can only hold values of its declared type
//     - Errors caught at compile-time
// - Dynamic typing: type is associated with the value
//     - Examples: JavaScript, Python, Ruby
//     - Variable can hold values of different types at different times
//     - Errors may occur at runtime
// - JavaScript is dynamically typed
// - TypeScript adds optional static typing to JavaScript
//     - Provides type checking, classes, interfaces
//     - Requires transpilation to JavaScript
// - Use static typing for large codebases to catch errors early
// - Use dynamic typing for flexibility and rapid development

// -------------------- Static (Statically Typed Languages) --------------------
// Examples: C, C++, Java, C#

let message; // In static languages, you would declare: string message;
message = 'Hello World';
console.log(message);

// ❌ Errors if you try to assign a different type (in static languages)
// message = 1234;       // Error
// message = true;       // Error
// message = null;       // Error
// message = undefined;  // Error

// -------------------- Dynamic (Dynamically Typed Languages) --------------------
// Examples: Python, Ruby, JavaScript

let msg;
msg = 'Hello World'; 
console.log(msg);

msg = 1234; 
console.log(msg);

msg = true; 
console.log(msg);

msg = null; 
console.log(msg);

msg = undefined; 
console.log(msg);

// ==================== End of Typing Example ====================
