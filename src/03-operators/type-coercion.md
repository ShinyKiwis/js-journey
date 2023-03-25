# Type coercion
Before talking about type coercion in JavaScript, let's talk about it first.
JavaScript is a dynamic language with dynamic types and also a weakly typed language. Hold on mate, you just talk about 2 terminology at same time! (Forget the part JavaScript is a dynamic langauge, that is not what we are worrying about).
Alright, let's break it down:
### Dynamic types
Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
```javascript
let foo = 42; // foo is now a number
foo = "bar"; // foo is now a string
foo = true; // foo is now a boolean
```
### Weakly typed
JavaScript is also a weakly typed language, which means it allows implicit type conversion when an operation involves mismatched types, instead of throwing type errors.
```javascript
const foo = 42; // foo is a number
const result = foo + "1"; 
// JavaScript coerces foo to a string, 
// so it can be concatenated with the other operand
console.log(result); // 421
```
Sometimes, this is very convenient, but it can be potential footgun if developers didn't intend to do the conversion, or intent to convert in other direction.

>  For symbols and BigInts, JavaScript has intentionally disallowed certain implicit type conversions.


To sum up, type coercion is a process of automatic or implicit conversion of values from one data type to another.

Before having a look at different type of coercion, what is the key difference between type coercion and type conversion ?

>  type coercion is implicit whereas type conversion can be either implicit or explicit.

So as mention above, JavaScript is a weakly typed language. This means that you can often use a value of one type where another type is expected, and the language will convert it to the right type for you. To do so, JavaScript defines a handful of coercion rules.

### Numeric coercion
#### Explicitly conversion
Just apply `Number()` function.
```javascript
Number("12") // 12
```
#### Implicitly conversion
Here is a list of case that trigger implicit conversion:
- comparision operators (>,<,<=,>=)
- bitwise operators(|, &, ^, ~)
- Arithmetic operators (+,-,*,/). Note that + won't trigger if any operands is a string.
- unary + operator
- loose equality operator (==, !=). Again, this won't trigger if both operands is a string

Let's have a look at some example 
```javascript
+'123'          // implicit
123 != '456'    // implicit
4 > '5'         // implicit
5/null          // implicit
true | 0        // implicit
```
Here is how some primitive values are converted to numbers:

```javascript
Number(null)                   // 0
Number(undefined)              // NaN
Number(true)                   // 1
Number(false)                  // 0
Number(" 12 ")                 // 12
Number("-12.34")               // -12.34
Number("\n")                   // 0
Number(" 12s ")                // NaN
Number(123)                    // 123
```
When converting a string to number, the engine first trims the leading and trailing whitespace,\n, \t characters:
- return `NaN` not a valid number
- return 0 if string is empty

Fun fact: `Symbol` can't be converted to number under any circumstances

There are 2 special rules to remember:
1. When applying == to null or undefined, numeric conversion does not happen. null equals only to null or undefined, and does not equal to anything else.
2. NaN does not equal to anything even itself, to check if something is NaN use `Number.isNaN()` function

### String coercion
#### Explicitly conversion 
Just apply `String()` function.
#### Implicitly conversion 
Trigger by the binary `+` operator when any operand is string.

There is not so much to say about this, but one thing worth noticing is `Symbol` can be convert explicitly not implicitly

### Boolean coercion

#### Explicitly conversion
Just apply `Number()` function.
#### Implicitly conversion
Implicit conversion happens in logical context, or is triggered by logical operators ( `||`, `&&`, `!`) .

For examples
```javascript
Boolean(2)          // explicit
if (2) { ... }      // implicit due to logical context
!!2                 // implicit due to logical operator
2 || 'hello'        // implicit due to logical operator
```

As soon as there are only 2 possible results of boolean conversion: true or false, it’s just easier to remember the list of falsy values.

```javascript
Boolean('')           // false
Boolean(0)            // false     
Boolean(-0)           // false
Boolean(NaN)          // false
Boolean(null)         // false
Boolean(undefined)    // false
Boolean(false)        // false
```

All of the others is truthy values.

### Object coercion
