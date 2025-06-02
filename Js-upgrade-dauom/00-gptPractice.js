const users = [
	{ name: 'Alice', age: 22 },
	{ name: 'Bob', age: 17 },
	{ name: 'Charlie', age: 30 },
	{ name: 'Diana', age: 16 },
	{ name: 'Eve', age: 25 },
]

const groupUsersByAge = users => {
	return users.reduce(
		(acc, cur) => {
			if (cur.age >= 18) {
				acc.adults.push(cur)
			} else {
				acc.children.push(cur)
			}
			return acc
		},
		{ adults: [], children: [] }
	)
}

console.log(groupUsersByAge(users))
