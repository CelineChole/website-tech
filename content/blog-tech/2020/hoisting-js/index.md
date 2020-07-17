---
title: "Overview of hoisting in JavaScript"
tags: ["javascript"]
published: true
date: "2020-07-15"
---

When doing mock technical interviews I often ask this question: _'Can you explain what hoisting is and how it works in Javascript?'_

For beginners it isn't always easy to articulate an answer. I thought I would try to write some points that might be expected when you get this question.

This is not meant to be an exhaustive blog post - I am not talking about classes for example. I am adding some great resources at the bottom if you want to dive deeper into hoisting.

## Definition

Hoisting is a JavaScript mechanism where variables and function declarations are 'moved to the top' of their scope before code execution. They are not physically moved, indeed, the variable and function declarations are put into memory during the compile phase, but stay exactly where you typed them in your code.

This means that no matter where functions and variables are declared, they are 'moved to the top' of their scope regardless of whether their scope is global or local.

The hoisting mechanism only 'moves' or more accurately puts into memory during the compile phase the declaration, the assignments aren't - this is explained in more details below.

## Hoisting variables

All variables defined with the `var` keyword have an initial value of `undefined`.

```js
console.log(beHappy)
// output: undefined

var beHappy = "If you're happy and you know it, clap your hands"
```

In JavaScript, an undeclared variable is assigned the value `undefined` at execution and is also of type `undefined`.

JavaScript allows us to both declare and initialise our variables simultaneously, this is the most used pattern: `var a = 100;` but in the background JavaScript is declaring then initializing variables in several steps:

- Declaration: `var a`
- Initialisation/assignment: `a = 100`
- usage: `var a = 100`

All variables are hoisted, variable declarations are processed before any code is executed. However, undeclared variables do not exist until code assigning them is executed. Assigning a value to an undeclared variable implicitly creates it as a global variable when the assignment is executed: all undeclared variables are global variables.

```js
function beHappy() {
  a = "smile"
  var b = "everyday"
}

happy()

console.log(a)
// a is accessible as a global variable outside the scope of beHappy()
// output: smile

console.log(b)
// b isn't accessible outside the scope of beHappy() because it was declared
// output: ReferenceError: b is not defined
```

With ES6, JavaScript introduced `let` and `const`. The difference in this case is how it initialises them. Variables declared with `let` and `const` remain uninitialized.

Accessing a variable defined with `let` or `const` before its declared will yield a `ReferenceError` instead of `undefined` with `var`.

```js
console.log(beHappy)
// output: ReferenceError: happy is not defined

let beHappy = "If you're happy and you know it, clap your hands"
```

However the following code will result in an output of `undefined` instead of `ReferenceError`:

```js
let beHappy

console.log(happy)
// output: undefined

beHappy = "If you're happy and you know it, clap your hands"'
```

## Hoisting functions

There are two types of functions in JavaScript: function declarations and function expressions.

Function declarations are hoisted:

```js
hoisted() // Output: "This function has been hoisted."

function hoisted() {
  console.log("This function has been hoisted.")
}
```

Functions expressions are not hoisted:

```js
expression() //Output: "TypeError: expression is not a function

var expression = function () {
  console.log("Will this work?")
}
```

## Resources

[MDN Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

[JavaScript Variables Hoisting in Details](https://dmitripavlutin.com/javascript-hoisting-in-details/)

[JavaScript Hoisting](https://www.javascripttutorial.net/javascript-hoisting/)
