---
title: '10 days of JS'
tags: ["javascript"]
published: true
date: '2019-07-16'
---
<br />

Ten days of JS is a collection of 10 problems that can be done in any order. Problems range from easy to medium. You can find all the solutions by clicking on Repl.it - I added comments directly in the solution when I thought it was necessary.

# 😃 Day 1 - Be happy

## Prompt

Write a function to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

```
Input: 19
Output: true
```

Explanation: 
```
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
```

## Solution
[Repl.it](https://repl.it/@CelineChole1/day1-happyNumber)

# 0️⃣1️⃣ Day 2 - Let's count in bits

#### Resources: 
- :link: [Bits, Bytes, Building With Binary](https://medium.com/basecs/bits-bytes-building-with-binary-13cb4289aafa)
- :link: [Hexes and Other Magical Numbers](https://medium.com/basecs/hexs-and-other-magical-numbers-9785bc26b7ee)

## Prompt

Write a function that takes a decimal number and convert it to a binary number.

```
Input: 4
Ouptut: 100
```
 
## Solution
[Repl.it](https://repl.it/@CelineChole1/day2-decimalToBinary)
 
# ➡️ Day 3 - Move zero at then end

## Prompt

Write a function that moves all zero from an array to the end of the array. Return the array.

```
Input: [2, 3, 0, 4, 3, 0, 6, 7]
Output: [2, 3, 4, 3, 6, 7, 0, 0]
```

## Solution
[Repl.it](https://repl.it/@CelineChole1/day3-moveZeroAtTheEnd)

# ⏰ Day 4 - Around the clock

## Prompt

Given a time in string format and a number of minutes return the time given those minutes added to the base time.

You're working with a standard 12-hour clock.
Output needs to match input format HH:MM.

```
Input: ('1:30', 30)
Output: '2:00'
```

## Solution
[Repl.it](https://repl.it/@CelineChole1/day4-clockMinuteAdder)

# ㊙️ Day 5 - Pig Latin

## Prompt

Translate the provided string to Pig Latin by following the rules below:
- For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g "pig" = "igpay"

- For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g "glove" = "oveglay"

- For words that begin with vowel sounds, simply add "way" to the end of the word. E.g "explain" = "explainway”

```
Input: 'pig'
Output: 'igpay'
```

## Solution
[Repl.it](https://repl.it/@CelineChole1/day5-pigLatin)

# ❗️ Day 6 - Factorial in 3 ways

## Prompt

Write 3 different functions to calculate the factorial of a number.

```
Input: 4
Output: 24
```

<details>
<summary>Hint :eyes:</summary>
You could use the iterative approach, the recursive approach and memoization.
</details>

## Solution
[Repl.it](https://repl.it/@CelineChole1/day6-factorial)

# ❌ Day 7 - Intersection

## Prompt

Given two sorted arrays of numbers, return an array containing all values that appear in both arrays. The numbers in the resulting array may be returned in any order.

You can assume that each array has only unique values (no duplicates within the array).

```
Input: [1,4,9,10,11] [2,3,4,5,8,10]
Output: [4, 10]
```

## Solution
[Repl.it](https://repl.it/@CelineChole1/day7-intersection)

# 🤘 Day 8 - String Permutation

## Resources
- [Factorial and counting seat arrangements](https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:prob-comb/x9e81a4f98389efdf:combinatorics-precalc/v/factorial-and-counting-seat-arrangements)
- [Generate all strings permutation](https://www.algodaily.com/challenges/generate-all-string-permutations)

## Prompt

Given a string write a function to display all the possible permutations.

```
input: 'abc'
output: 'abc', 'acb', 'cab', 'cba', 'bac', 'bca'
```

## Solution
[Repl.it](https://repl.it/@CelineChole1/day8-stringPermutation)

# ➕ Day 9 - Range Sum

## Prompt

Given an array of 2 numbers return the cumulative sum of the two numbers and all the numbers in between. Try to find 3 different solutions.

<details>
<summary>Hint :eyes:</summary>
You could use for loops, recursion and reduce.
</details>

```
input: [1, 9]
output: 45 (1+ 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9)
```

## Solution
[Repl.it](https://repl.it/@CelineChole1/day9-RangeSum)

# 💥 Day 10 - Let's Play

## Prompt

We have a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if our robot ends up at (0, 0) after it completes its moves.

The move sequence is represented by a string, and the character moves represents its moves. Valid moves are R (right), L (left), U (up), and D (down). If the robot returns to the origin after it finishes all of its moves, return true. Otherwise, return false.

```
Input: ‘DU’
Output: true
```

## Solution
[Repl.it](https://repl.it/@CelineChole1/day10-robotReturnToOrigin)