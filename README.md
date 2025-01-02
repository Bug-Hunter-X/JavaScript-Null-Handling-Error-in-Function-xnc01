# JavaScript Null Handling Bug

This repository demonstrates a common bug in JavaScript: improper handling of `null` values. The `foo` function attempts to add two numbers but doesn't check if the input values are `null`. This can lead to unexpected results or runtime errors.

## Bug Description

The `foo` function is supposed to add two numbers. However, if either input is `null`, the function should ideally return `null` to indicate an invalid input.  The original code doesn't explicitly handle this case, leading to potential issues.

## Solution

The solution adds explicit null checks within the function.  If either `a` or `b` is `null`, the function immediately returns `null`. This ensures that the addition operation is only performed if both inputs are valid numbers.

## How to reproduce

1. Clone this repository.
2. Open `bug.js` in your code editor.
3. Run the script to observe the unexpected output when `null` is passed as an argument.
4. Then, run `bugSolution.js` to see the corrected version in action.