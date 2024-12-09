const names = ['Илья', 'Катя', 'Адрей', 'Настя', 'Вика', 'Маша']

//names.push('Kana')добавляет в конец списка
//names.unshift('Kana') PLus beginning

// const firstName = names.shift() - удаляет(вырезает и сохраняет Первый элемент в массиве)
// const lastName = names.pop() удаляет(вырезает и сохраняет Последний элемент в массиве)

// const reversed = names.toReversed()

// const letter = ['b', 'c', 'e', 'k', 'a', 'l']
// console.log(letter.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0)))
// console.log(letter.toSorted())

// console.log(names.toSpliced(2, 5))
// console.log(names)

// const greatWoman = 'Катя'
// const index = names.indexOf(greatWoman)

// console.log(index)
// const newNames = names.with(index, 'Екатерина')

// names[index] = 'Екатерина'
// console.log(names[index])
// console.log(newNames)
// console.log(names)

//*<------------------------Map------------------------------>*//
// const capitalNames = names.map((name, index) => {
// 	if (index === 1) {
// 		return 'Ekaterina'
// 	}
// 	return name
// })
// console.log(capitalNames)
// console.log(names.indexOf('Катя') !== -1)

const people = [
	{
		name: 'Ilya',
		price: 5500,
	},
	{
		name: 'Katya',
		price: 22000,
	},
	{
		name: 'Masha',
		price: 12500,
	},
	{
		name: 'Igor',
		price: 2500,
	},
]

// const findPerson = people.find(person => person.price > 7000)
// console.log(findPerson)

// const finded = people.findIndex(person => person.price === 22000)
// // console.log(people.with(finded, 42))
// let sumPrice = 0

// const filtered = people.filter(pricePerson => pricePerson.price > 7000)
// filtered.forEach(priceBudget => {
// 	sumPrice += priceBudget.price
// })

const byPrice = pricePerson => pricePerson.price > 7000
const pickPrice = pricePerson => pricePerson.price

const sumPrice = people
	.filter(byPrice)
	.map(pickPrice)
	.reduce((acc, pricePerson) => acc + pricePerson, 0)
console.log(sumPrice)
