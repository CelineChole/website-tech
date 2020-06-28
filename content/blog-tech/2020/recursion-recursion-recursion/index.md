---
title: "Recursion Recursion Recursion"
tags: ["javascript"]
published: true
date: "2020-01-10"
---

## A bit of etymology

Recursion is the act of recurring.

It comes from the latin word recursiō which is the act of running back or again. This is from recurrō, return, run back:

- re: back, again
- currō: run

[Google definition](https://www.google.com/search?q=recursion&oq=recursion&aqs=chrome..69i57j69i59l2j69i60l3.3779j1j4&sourceid=chrome&ie=UTF-8)

## What is recursion?

Recursion is when a function calls itself.

Let's try:

```js
function hello() {
  console.log("hi")
  return hello()
}
```

```js
function factorial(x) {
  if (x < 0) return
  if (x === 0) return 1
  return x * factorial(x - 1)
}

factorial(3)
// 6
```

The important part is happening on line 4: `return x * factorial(x — 1);`.

The function is actually calling itself again `( factorial(x-1) )`, but with a parameter that is one less than when it was called the first time. This makes it a recursive function.

```js
factorial(3) // returns 3 * factorial(2)
factorial(2) // returns 2 * factorial(1)
factorial(1) // returns 1 * factorial(0)
factorial(0) // returns 1

// Now that we've hit our base case,
// our function will return in order from inner to outer:

factorial(0) // returns 1                 => 1
factorial(1) // returns 1 * factorial(0)  => 1 * 1
factorial(2) // returns 2 * factorial(1)  => 2 * 1 * 1
factorial(3) // returns 3 * factorial(2)  => 3 * 2 * 1 * 1
// 3 * 2 * 1 * 1 = 6
```

## The base case

`if (this happens) => { we're done!! }`

The base case stops our recursion end returns the result.

## The recursive case

A recursive case, in which the function must call itself to break the current problem down to a simpler level.

## Let's practice :metal:

### Question 1: Print all

Write a function printAll to go through an array and print out all of the elements.

```js
Input: [a, b, c, d, e]
Output: a, b, c, d, e
```

```js
function printAll(arr) {
  if (arr.length === 0) return
  console.log(arr[0])
  arr.shift()
  return printAll(arr)
}
```

### Question 2: Sum all numbers

Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

```js
Input: 3
Output: 6 // (1+2+3)
```

```js
function sumRange(num) {
  if (num === 1) return 1

  return num + sumRange(num - 1)
}
```

### Question 3: Power function

Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

```js
Input: 2, 2
Output: 4

Input: 2, 1
Output: 2

Input: 2, 0
Output: 1
```

```js
2 ^ 4 = (2 * 2) ^ 3
2 ^ 3 = (2 * 2) ^ 2
2 ^ 2 = (2 * 2) ^ 1
2 ^ 1 = (2 * 2) ^ 0
// once our exponent is 0 we know that the value is always 1!
```

```js
function power(base, exponent) {
  if (exponent === 0) return 1

  return base * power(base, exponent - 1)
}
```

### Question 4: Product of an array

Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

```js
Input: [1, 2, 3]
Output: 6
```

```js
function productOfArray(array) {
  if (array.length === 0) return 1

  return array.shift() * productOfArray(array)
}
```

### Question 5: Greatest Common Divisor

Write a function called greatestComDivisor to find the greatest common divisor of two positive numbers.

```js
input: 123, 235
output:
```

```js
function greatestComDivisor(a, b) {
  if (!b) {
    return a
  }
  return greatestComDivisor(b, a % b)
}
```

### Question 6: Reverse String

Write a function called reverse that takes a string and reverse it.

```js
Input: "hello"
Output: "olleh"
```

```js
function reverse(string) {
  // Base case
  if (string.length < 2) return string
  // Recursive case
  return reverse(string.slice(1, string.length)) + string[0]
}
```

## Recursive data structures

A recursive data structure is a data structure that contains smaller versions of the same structure inside of itself. In Javascript, a basic example of a recursive data structure could be an object that contains other objects:

```js
const danielKing = {
  name: {
    firstName: "Daniel",
    lastName: "King",
  },
  favorites: {
    foods: ["pizza", "curry"],
  },
}
```

The most common recursive data structures are linked list and trees.

## Binary Search tree

### Question 7: Sum a BST

Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.

```js
Input: (root = [10, 5, 15, 3, 7, null, 18]), (L = 7), (R = 15)
Output: 32
```

```js
Input: (root = [10, 5, 15, 3, 7, 13, 18, 1, null, 6]), (L = 6), (R = 10)
Output: 23
```

```js
class Node {
  constructor(value, left = undefined, right = undefined) {
    this.value = value
    this.left = left
    this.right = right
  }
}

const rangeSumBST = function (root, L, R) {
  let sum = 0
  if (!root) {
    return sum
  }
  if (root.val >= L && root.val <= R) {
    sum += root.val
  }
  return sum + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R)
}
```

In general, you should only use recursion if it would be significantly simpler than the iterative solution. A good rule of thumb is to use recursion when it helps makes your code more readable. In most cases iterative solutions are preferable over recursive solutions because recursion has some added performance costs, like extra function calls.

## Resources

📺 [YouTube: Recursion - Part 7 of Functional Programming in JavaScript](https://www.youtube.com/watch?v=k7-N8R0-KY4)

📺 [The Coding Train, Coding Challenge - Recursion](https://www.youtube.com/watch?v=jPsZwrV9ld0)

[Learning to think with recursion, part 1](https://medium.com/@daniel.oliver.king/getting-started-with-recursion-f89f57c5b60e)

[Learning to think with recursion, part 2](https://medium.com/@daniel.oliver.king/learning-to-think-with-recursion-part-2-887bd4c41274)

[Learn and understand recursion in JavaScript](https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea)
[Recursion and stack](https://javascript.info/recursion)
