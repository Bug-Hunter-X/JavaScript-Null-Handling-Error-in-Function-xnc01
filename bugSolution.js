function foo(a, b) {
  if (a === null || b === null) {
    return null; // Explicitly handle null inputs
  }
  return a + b;
}

console.log(foo(1, null)); // Output: null
console.log(foo(null, 2)); // Output: null
console.log(foo(1, 2));    // Output: 3