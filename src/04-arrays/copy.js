const fruits = ['strawberry', 'mango', 'apple', 'grapes']

const fruitsCopy = [...fruits]

fruitsCopy.push("pear")
fruitsCopy.push("oranges")

console.log(fruits)
console.log(fruitsCopy)

// Why shallow copies in this situation doesn't affect the original array ?
