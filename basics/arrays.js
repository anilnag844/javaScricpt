// ==================== Array Basics ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Arrays store multiple values in a single variable
// - Zero-indexed: first element is at index 0
// - Can contain any type: string, number, boolean, object, array, etc.
// - Common methods:
//     - Add: push(), unshift(), array[index] = value
//     - Remove: pop(), shift(), splice()
//     - Copy: [...array] (shallow copy)
// - Iteration: for, for...of, forEach
// - Arrays are objects: typeof → "object", check with Array.isArray()
// - Use const if array reference won’t change (elements can still be modified)
// - Nested arrays are possible: access via matrix[row][col]

// -------------------- Declaring an Array --------------------
let selectedColors = ['red', 'blue'];
console.log('Selected Colors (initial):', selectedColors);

// -------------------- Modifying Elements --------------------
// Add element at a specific index
selectedColors[2] = 'green';
console.log('After adding green at index 2:', selectedColors);

// Add element at the end
selectedColors.push('yellow');
console.log('After push yellow:', selectedColors);

// Remove element at a specific index (splice: startIndex, deleteCount)
selectedColors.splice(1, 1); // removes 'blue' at index 1
console.log('After removing index 1:', selectedColors);

// Remove the last element (pop)
const removedColor = selectedColors.pop();
console.log('After pop (removed):', removedColor);
console.log('Array now:', selectedColors);

// -------------------- Array Properties --------------------
console.log('Length of Selected Colors:', selectedColors.length);

// -------------------- Iterating Over an Array --------------------
// Using a for loop
console.log('Iterating with for loop:');
for (let i = 0; i < selectedColors.length; i++) {
  console.log(selectedColors[i]);
}

// Using for...of loop
console.log('Iterating with for...of loop:');
for (let color of selectedColors) {
  console.log(color);
}

// Using forEach method
console.log('Iterating with forEach:');
selectedColors.forEach((color, index) => {
  console.log(`${index}: ${color}`);
});

// -------------------- Mixed Types in Arrays --------------------
let mixedArray = [1, 'two', true, { name: 'Anil' }, [5, 6]];
console.log('Mixed Array:', mixedArray);
console.log('First element:', mixedArray[0]);
console.log('Object in array:', mixedArray[3]);
console.log('Array in array:', mixedArray[4]);

// -------------------- Arrays are Objects --------------------
console.log('Type of selectedColors:', typeof selectedColors); // "object"
console.log('Is selectedColors an array?', Array.isArray(selectedColors)); // true

// -------------------- Copying Arrays --------------------
// Shallow copy using spread operator
let copiedColors = [...selectedColors];
copiedColors.push('purple');
console.log('Copied Colors after push:', copiedColors);
console.log('Original Selected Colors remains unchanged:', selectedColors);

// -------------------- Nested Arrays --------------------
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log('Matrix:', matrix);
console.log('Element at row 1, col 2:', matrix[1][2]); // 6

// ==================== End of Array Basics ====================