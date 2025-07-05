// const users = [
// 	{ name: 'Alice', age: 22 },
// 	{ name: 'Bob', age: 17 },
// 	{ name: 'Charlie', age: 30 },
// 	{ name: 'Diana', age: 16 },
// 	{ name: 'Eve', age: 25 },
// ]

// const groupUsersByAge = users => {
// 	return users.reduce(
// 		(acc, cur) => {
// 			if (cur.age >= 18) {
// 				acc.adults.push(cur)
// 			} else {
// 				acc.children.push(cur)
// 			}
// 			return acc
// 		},
// 		{ adults: [], children: [] }
// 	)
// }

// console.log(groupUsersByAge(users))

//<----------------------practice 1 MAP----------->
// const users1 = [
// 	{ name: 'alice', age: 22 },
// 	{ name: 'bob', age: 25 },
// 	{ name: 'charlie', age: 30 },
// ]

// const capitalizeUsersNames = users => {
// 	const capitalizedUsers = users.map(item => {
// 		return {
// 			...item,
// 			name: item.name[0].toUpperCase() + item.name.slice(1),
// 		}
// 	})

// 	return capitalizedUsers
// }
// console.log(capitalizeUsersNames(users1))

// const products = [
//   { name: "apple", price: 100 },
//   { name: "banana", price: 80 },
//   { name: "cherry", price: 120 }
// ];

// const productsWithDiscount = products.map(product => {
// 	return {
// 		...product,
// 		discountedPrice: Math.round(product.price * 0.9)
// 	}
// })

// console.log(productsWithDiscount)

//#1 MAP
const arrayLength = [1, 2, 3, 4, 5]
const doubleArray = arrayLength.map(item => {
	return item * 2
})
console.log(doubleArray)

//ARRAY+FILTER

const stringWords = ['hi', 'hello', 'yo', 'good']
const filterWords = stringWords.filter(item => item.length > 3)
console.log(filterWords)

//slice
const sliceNum = [10, 20, 30, 40, 50]
console.log(sliceNum.slice(3))

//obj + map
const fullLine = [
	{ name: 'Alice', age: 20 },
	{ name: 'Bob', age: 25 },
]

const newLine = fullLine.map(item => {
	return `${item.name} is ${item.age}`
})

console.log(newLine)

const arrayNum = [1, 2, 3, 4, 5, 6]

let countNum = 0

const evenNum = item => {
	for (let i = 0; i < arrayNum.length; i++) {
		if (arrayNum[i] % 2 === 0) {
			countNum++
		}
	}
	return countNum
}

console.log(evenNum())


const sumAllNumber = [1, 2, 3, 4]
const sum = sumAllNumber.reduce((acc, cur) => acc + cur, 0)

console.log(sum)