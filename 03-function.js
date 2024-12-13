/*<------------------- Function Declaration   --------------------->*/

/* Эту функцию можно вызвать в любом месте до обьявления переменной*/
// function greet(name) {
// 	return console.log(`Hello - ${name}`)
// }

// /*<------------------- Function Expression   --------------------->*/

// const greet2 = function(name) => {
// 	return `Hello - ${name}`
// }

// greet('Ilya')
// console.log(greet2('katya'))

/*<------------------- setTimeout(вызывается с задержкой в 1.5 сек)   ---------------------> */
// setTimeout(() => {
// 	greet('Elena')
// }, 1500)

/*<------------------- setInterval(делает функцию каждые 2 секунды)   ---------------------> */

// setInterval(() => {
// 	greet('Elena')
// }, 2000)

// let counter = 0
// const interval = setInterval(() => {
// 	if (counter == 5) {
// 		clearInterval(interval)
// 	} else {
// 		console.log(++counter)
// 	}
// }, 1000)

//Arrow Function
/*
function greet(name) {
	return console.log(`Hello - ${name}`)
}

const arrow = name => console.log(`Hello - ${name}`)

arrow('katysha')

const sum = (num, exp) => Math.pow(num, exp)

console.log(sum(2, 3))
*/

// ======= Default parameters =======
// const sum = (a = 32, b = a * 2) => a + b
// console.log(sum(19, 1))
// console.log(sum())

// const sumAll = (...numbers) => {
// 	// let res = 0
// 	// for (let num of numbers) {
// 	// 	res += num
// 	// }
// 	// return res

// 	return numbers.reduce((acc, cur) => acc + cur, 0)
// }

// console.log(sumAll(1, 2, 3, 4, 5))

// const createPerson = name => lastName => `${name} + ${lastName}`

// console.log(createPerson('Ilya')('Ivanov'))

// function createNames(name) {
// 	return function (lastName) {
// 		return `${name} ${lastName}`
// 	}
// }

// const addLastName = createNames('Ilya')
// console.log(addLastName('Ivanov'))
// console.log(addLastName('Petrov'))
// console.log(addLastName('Huyov'))
