# Array
## Theory
In JavaScript, arrays aren't primitives but are instead `Array` object with following core characteristics:
- They are resizable and can contain a mix of different data type (Yep, this is not the array you know)
- They are not associative arrays, array elements can access using nonnegative integers 
- They are zero-indexed
- array-copy operations create shallow copies

## Shallow copy vs Deep copy
### Shallow copy
A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too and so, you may end up unintentionally causing changes to the source or copy that you don't expect.
### Deep copy
A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too; that is, you won't unintentionally be causing changes to the source or copy that you don't expect.

So let's have a look at an example of this at file `copy.js`

```javascript
const fruits = ['strawberry', 'mango', 'apple', 'grapes']

const fruitsCopy = [...fruits]

fruitsCopy.push("pear")
fruitsCopy.push("oranges")

console.log(fruits)
console.log(fruitsCopy)
```

I have extract the code from the file to explain why the modification of copy array doesn't affect the original one!
The answer is using spread operator, you create a new array with the same values as the original array, but stored in a different location in memory (Shallow copy).

In other words, spead operator will make deep copies the data if it is not nested. For nested data, it deeply copies the topmost data and shallow copies of the nested data.


