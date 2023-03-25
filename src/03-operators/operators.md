# Theory 
Before we start, this document won't display every operator, just some special one with special cases.
## Addition (+)
This opertor produce two things:
- Sum of numeric operands
- String concatenation

For example:
```javascript
console.log(2 + 2);
// Expected output: 4

console.log(2 + true);
// Expected output: 3

console.log('hello ' + 'everyone');
// Expected output: "hello everyone"

console.log(2001 + ': A Space Odyssey');
// Expected output: "2001: A Space Odyssey"

```

The addition operator (+) is overloaded for two distinct operations: numeric addition and string concatenation. When evaluating, it first coerces both operands to primitives. Then, the two operands' types are tested:

- If one side is a string, the other operand is also converted to a string and they are concatenated
- If they are both BigInts, BigInt addition is performed. If one side is a BigInt but the other is not, a TypeError is thrown
- Otherwise, both sides are converted to numbers, and numeric addition is performe

