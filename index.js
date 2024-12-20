const lodash = require("lodash");

// **Variables and Data Types in JavaScript**

// Variables are named memory locations used to store data.

// **Types of Variable Declarations:**
// 1. `var`:
//    - Older way of declaring variables (not recommended anymore).
//    - Scope: Function-scoped and global-scoped, but not block-scoped.
//    - Can be reassigned but avoid redeclaring within the same scope.
//    - Example:
//      ```javascript
//      var name = "John";
//      name = "Doe"; // Reassigning is allowed
//      ```
//
// 2. `let`:
//    - Modern way of declaring variables (preferred).
//    - Scope: Block-scoped (limited to the block in which it's defined).
//    - Allows reassignment but not redeclaration in the same scope.
//    - Example:
//      ```javascript
//      let age = 35;
//      age = 36; // Reassigning is allowed
//      ```
//
// 3. `const`:
//    - Used to declare constants (immutable variables).
//    - Scope: Block-scoped.
//    - Reassignment is not allowed after the initial assignment.
//    - Example:
//      ```javascript
//      const PI = 3.14;
//      // PI = 3.15; // Error: Assignment to constant variable
//      ```

// **Dynamic Typing in JavaScript:**
// - JavaScript is a dynamically typed language.
// - This means a variable can hold different types of data at different times.
// - Example:
//   ```javascript
//   let value = 42;      // value is a number
//   value = "hello";     // value is now a string
//   ```

// **Variable Naming Conventions:**
// - Use camelCase (e.g., `userName`, `totalAmount`).
// - Variables can start with letters, `_` (underscore), or `$` (dollar sign).
// - Cannot start with numbers or contain spaces.
// - Avoid using reserved keywords (e.g., `let`, `const`, `var`, etc.).
// - Use meaningful names to enhance code readability (e.g., `age` instead of `a`).

// **Understanding Operators and Their Types in JavaScript**

const a = 30;

// **Function Example:**
// Checks if `a` is less than 30 and returns a boolean.
function checkLessThan30() {
  return a < 30 ? true : false; // Ternary operator for conditional check
}
console.log(checkLessThan30()); // Output: false
console.log(typeof checkLessThan30()); // Output: boolean

// **Operators Overview:**
// Operators in JavaScript carry special meanings and are used to perform operations.

// **Arithmetic Operators:**
// 1. Unary: Operators that work with a single operand.
//    Example: `+`, `-`, `++`, `--`
// 2. Binary: Operators that work with two operands.
//    Example: `+`, `-`, `*`, `/`, `%`
//
// **Increment and Decrement:**
// - Pre-Increment (`++x`): Increments the value first, then uses it in the operation.
// - Post-Increment (`x++`): Uses the value in the operation first, then increments it.
// - The same logic applies to decrement operators (`--`).

// **Assignment Operator:**
// - Used to assign a value to a variable.
//   Example: `x = 5;`

// **Comparison Operators:**
// - `>`: Greater than
// - `<`: Less than
// - `>=`: Greater than or equal to
// - `<=`: Less than or equal to
// - `==`: Loose equality (compares value only)
// - `!=`: Loose inequality
// - `===`: Strict equality (compares value and type)
// - `!==`: Strict inequality

const x = 10;
console.log(a > 10 ? "true" : "false"); // Ternary operator: Output "true" if `a > 10`, otherwise "false"

// **Strict Equality vs Loose Equality:**
// - Strict Equality (`===`): Checks if both type and value are the same.
// - Loose Equality (`==`): Converts the types (type coercion) and then checks the value.
console.log("is 5 and string 5 equal?");
console.log("5" == 5); // Output: true (loose equality, type coercion happens)
console.log("5" === 5); // Output: false (strict equality, no type coercion)

// **Ternary Operator:**
// - Syntax: `condition ? "value if true" : "value if false"`
//   Example:
//   ```javascript
//   const result = x > 5 ? "Greater" : "Smaller";
//   ```

// **Logical Operators:**
// - Used for logical operations like AND, OR, NOT.
//   - AND: `&&` - Returns true if both operands are true.
//   - OR: `||` - Returns true if at least one operand is true.
//   - NOT: `!` - Inverts the truthiness of a value.
//
// **Working with Non-Boolean Values:**
// - Falsy values: `null`, `undefined`, `false`, `0`, `NaN`.
// - Truthy values: Any value that is not falsy.

// **Understanding Logical Operators, Bitwise Operators, and Conditionals in JavaScript**

/* **Short-Circuiting:**
   - Logical operators can stop evaluating further conditions if the result is already determined.
   - For OR (`||`): If it encounters a `true`, it stops checking further.
   - For AND (`&&`): If it encounters a `false`, it stops checking further.
*/

// **Bitwise Operators:**
// Perform operations at the binary (bit) level.

// 1. `AND (&)`: Performs a bitwise AND between two numbers.
//    Example: `2 & 5` (Binary: `10 & 101` => `000` => `0`)

// 2. `OR (|)`: Performs a bitwise OR between two numbers.
//    Example: `2 | 5` (Binary: `10 | 101` => `111` => `7`)

// 3. `NOT (~)`: Inverts each bit and applies two's complement.
//    Example: `~1` (Binary: `0001` => `1110` => `-2`)

// 4. `Right Shift (>>)`:
//    - Shifts the binary representation to the right by the specified number of bits.
//    - Effectively divides the number by `2^a`.
//    Example: `10 >> 2` (Binary: `1010` => `0010` => `2`)

// 5. `Left Shift (<<)`:
//    - Shifts the binary representation to the left by the specified number of bits.
//    - Effectively multiplies the number by `2^a`.
//    Example: `10 << 4` (Binary: `1010` => `10100000` => `160`)

// 6. `XOR (^)`: Performs a bitwise XOR between two numbers.
//    Example: `2 ^ 5` (Binary: `10 ^ 101` => `111` => `7`)

// **Examples of Bitwise Operators:**
console.log(2 & 5); // Output: 0 (Bitwise AND)
console.log(2 | 5); // Output: 7 (Bitwise OR)
console.log(~1); // Output: -2 (Bitwise NOT)
console.log(10 >> 2); // Output: 2 (Right shift)
console.log(10 << 4); // Output: 160 (Left shift)

// **Conditionals in JavaScript:**
// Used for decision-making based on conditions.

// 1. **if-else Statement:**
const age = 20;
console.log(age + " is the age");
if (age >= 18) {
  console.log("Can vote");
} else {
  console.log("Cannot vote");
}

// 2. **Switch Statement:**
// Useful for multi-way branching based on a specific value.
let num = 1;

switch (num) {
  case 1:
    console.log("Can vote");
    break; // Stops further execution in the switch block
  default:
    console.log("Age is not valid");
    break;
}

/* **Key Notes:**
   - Use `if-else` for range-based or complex conditions.
   - Use `switch` for fixed, discrete values.
*/

// **Understanding Loops and Strings in JavaScript**

/* **Loops Overview:**
   - Use `let` in loop initialization for block scope.
   - `break`: Exits the loop entirely.
   - `continue`: Skips the current iteration and proceeds with the next one.
*/

// **Strings in JavaScript:**
// - A sequence of characters.
// - Strings can be initialized using:
//   - Double quotes (`""`) or single quotes (`''`) - both are valid.
//   - Template literals (`` `...` ``) - allows embedded expressions.

// **Examples of String Initialization:**
let firstname = new String("Utkarsh "); // String object
console.log(firstname); // Output: Utkarsh

let secondname = "Pandey"; // String literal
console.log(secondname); // Output: Pandey

// **Operations on Strings:**
// 1. **Concatenation:**
// - Combine multiple strings using `+` or template literals.
let fullname = firstname + secondname; // Using `+`
let name = `${firstname} ${secondname}`; // Using template literals
console.log(fullname + " " + name); // Output: Utkarsh Pandey Utkarsh  Pandey

// 2. **Substring:**
// - Extract a part of the string using `substring(start, end)`.
//   - `start`: The starting index (inclusive).
//   - `end`: The ending index (exclusive, optional).
console.log(firstname.substring(0, 4)); // Output: Utka

// 3. **Split:**
// - Splits a string into an array of substrings based on a delimiter.
let words = fullname.split(" "); // Splits `fullname` by spaces
for (let i = 0; i < words.length; i++) {
  console.log(words[i] + i); // Prints each word with its index
}

// 4. **String Length:**
// - Use `.length` property to get the number of characters in a string.
console.log(fullname.length); // Output: Length of `fullname`

// 5. **Change Case:**
// - `toUpperCase()`: Converts the string to uppercase.
// - `toLowerCase()`: Converts the string to lowercase.
console.log(fullname.toUpperCase()); // Output: UTTKARSH PANDEY
console.log(fullname.toLowerCase()); // Output: utkarsh pandey

// 6. **Character Access:**
// - `charAt(index)`: Gets the character at a specific index.
// - `indexOf(char)`: Finds the first occurrence of a character.
console.log(fullname.charAt(3)); // Example: Character at index 3
console.log(fullname.indexOf("P")); // Example: Index of character "P"

/* **Key Notes:**
   - Strings are immutable; any operation creates a new string.
   - Template literals (`` `...` ``) are preferred for better readability and embedded expressions.
*/

// **Understanding Functions, Objects, and Arrays in JavaScript**

/* **Functions:**
   - Blocks of reusable code that can be invoked to perform a task.
   - Can have parameters and may return a value.
*/

// **Example of a Function:**
function printing(i) {
  console.log("Hello world " + i);
}
for (let i = 0; i < 3; i++) {
  printing(i); // Calls the function with the current value of `i`
}

// **Returning Functions:**
function average(a, b) {
  return (a + b) / 2; // Returns the average of two numbers
}
console.log(average(1, 4)); // Output: 2.5

// **Variable Function Declaration:**
let multiplyFunc = function (a, b) {
  return a * b;
};
console.log(multiplyFunc(5, 7)); // Output: 35

// **Arrow Functions:**
let hello = (title) => {
  return title + " " + title;
};
console.log(hello("myname")); // Output: myname myname

/* **Reference Datatypes in JavaScript:**
   - Stored in heap memory, while their references are stored in stack memory.
   - Examples: Objects, Arrays, and Functions.
   - These datatypes do not have a fixed size.
*/

// **Objects:**
// - Objects consist of key-value pairs.
let obj = {
  naam: "Utkarsh",
  age: "25",
  nationality: "India",
  greet: (title, x = 1) => {
    for (let i = 0; i < x; i++) {
      console.log(title); // Prints the greeting message `x` times
    }
  },
};
console.log(obj); // Logs the entire object
obj.greet("Namaste Sir", 3); // Calls the `greet` method

/* **Creating Copies of Objects:**
   - Shallow Copy: Points to the same memory location as the original object.
   - Deep Copy: Creates a new, independent object in memory.
*/

// **Shallow Copy Example:**
let obj1 = obj; // `obj1` is a reference to `obj`
obj1.naam = "Modified Name"; // Changing `obj1` also affects `obj`

// **Deep Copy Methods:**
// - **Method 1: Using `lodash`:**
const deepCopy = lodash.cloneDeep(obj); // Creates an independent deep copy
console.log(deepCopy);

// - **Method 2: Using Destructuring:**
let { greet, ...deepCopy1 } = obj; // Excludes `greet` while copying
console.log("Deepcopy 1: ", deepCopy1);

// **Arrays:**
// - Arrays are collections of items.
// - Can be declared using literal notation `[]` or the `Array` constructor.
let arr1 = [1, 2, 3];
console.log("Normal array literal: " + arr1);

let arr2 = new Array("love", 1, true);
console.log("Array constructor: " + arr2);

/* **Array Methods:**
   - `push`: Adds an element to the end of the array.
   - `pop`: Removes the last element of the array.
   - `shift`: Removes the first element of the array.
   - `unshift`: Adds an element to the start of the array.
*/

// **Push Example:**
arr1.push("Pushed");
console.log("After Pushing: " + arr1); // Output: [1, 2, 3, "Pushed"]

// **Pop Example:**
arr1.pop();
console.log("After Popping: " + arr1); // Output: [1, 2, 3]

// **Shift Example:**
arr2.shift();
console.log("After Shifting: " + arr2); // Output: [1, true]

// **Unshift Example:**
arr2.unshift("Love");
console.log("After Unshifting: " + arr2); // Output: ["Love", 1, true]

/* **slice =>** Slices the array and creates a shallow copy of it */
arr3 = arr1.slice(1, 3);
console.log(arr3);

/* **splice =>** Changes the array content (insert, remove, replace) */
// First num - the start element index to be dealt with
// Second num - count of the number of next elements to be deleted or replaced
// Third val - if the value is present, it replaces the value, or this value is inserted; if not present, only the selected values are deleted
arr1.splice(0, 1, "Replaced Content");
console.log(arr1);

/* **map =>** Runs a function over a given array and stores the result in a new or same array */
let answerArray = arr1.map((el) => el * el);
console.log(answerArray); // [NaN, 4, 9]

/* **filter =>** Uses a function to filter out values from an array */
let arr4 = [21, 34, 3, 532, 566778, 24545, 222, 333, 777];
let oddArray = arr4.filter((el) => el % 2 !== 0);
console.log(oddArray); // Filters out odd values from arr4

/* **reduce =>** Computes a single value from the whole array */
let sumOfArr4 = arr4.reduce((acc, curr) => acc + curr, 0);
console.log(sumOfArr4); // Output: Sum of arr4 elements

/* **sort =>**
   - For a string array, sort can easily arrange elements in lexicographical order.
   - For a number array, sort converts elements to strings before sorting.
   - To sort numbers accurately, use a compare function. */
let stringArray = [
  "love",
  "you",
  "all",
  "from",
  "the",
  "depth",
  "of",
  "my",
  "heart",
];
stringArray.sort();
console.log(stringArray);

let compareAscending = (x, y) => x - y;
let compareDescending = (x, y) => y - x;

arr4.sort(compareAscending);
console.log(arr4); // Sorted in ascending order
arr4.sort(compareDescending);
console.log(arr4); // Sorted in descending order

/* **indexOf =>** Finds the index of an element in an array */
let indexOfArr = stringArray.indexOf("Love");
console.log(indexOfArr); // Returns -1 if not found

/* **forEach =>** Performs operations on all elements in an array */
arr4.forEach((el, index) => {
  console.log("Number: " + el + " Index: " + index);
});

// **for...in:**
// - Used to iterate over the *keys* (properties) of an object or array.
let obj4 = { name: "Utkarsh", age: 25, country: "India" };
console.log("Using for...in with an object:");
for (let key in obj4) {
  console.log(`Key: ${key}, Value: ${obj4[key]}`);
}

let array = ["a", "b", "c"];
console.log("Using for...in with an array:");
for (let index in array) {
  console.log(`Index: ${index}, Value: ${array[index]}`);
}

// **for...of:**
// - Used to iterate over *values* of an iterable (like an array, string, or map).
console.log("Using for...of with an array:");
for (let value of array) {
  console.log(`Value: ${value}`);
}

let string = "Hello";
console.log("Using for...of with a string:");
for (let char of string) {
  console.log(`Character: ${char}`);
}

/* **Key Notes:**
   - Functions can be declared in multiple ways: regular, variable, or arrow functions.
   - Objects allow flexible representation of data as key-value pairs.
   - Arrays are versatile collections with many built-in methods for manipulation.
*/
