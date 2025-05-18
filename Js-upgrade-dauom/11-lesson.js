//Functions

const Name = 'Ilyha'

function sayHello(name) {
	console.log(`Hello my name is ${Name}, your name is ${name}, its allright?`)
}

// sayHello('Katya')
// sayHello('')

// -------------
function divide(sum1, sum2) {
	console.log(sum1 - sum2)
}

// divide(32, 24)

// ------------
const firstNumber = 23
const secondNumber = 12

function sum(third, fourth) {
	if (third < fourth) {
		const five = 5
		console.log(firstNumber + five + secondNumber - (third + fourth))
	} else {
		const sex = 5
		console.log(firstNumber - sex + secondNumber - (third + fourth))
	}
}

// sum(2, 10)

//---------

function add(num1, num2) {
	return num1 + num2
}

// console.log(add(40, 20))

const result = add(50, 19)
// console.log(`Результат: ${result}`)

//3:19:00

//// <--------Func - scope, defualt values, declaration vs expression--------->

// decllaration vs expression

//declaration fn
// greeting()
function greeting() {
	return console.log('Hello my love')
}
// greeting()

//expression fn
const getGreeting = function greeting() {
	return console.log('Hello my love, her name is Sveta')
}
// getGreeting()

// const getNewGreeting = () => {
// 	return console.log('I love sveta very much, go sex with me')
// }
// console.log(getNewGreeting())

// -----Scope-----
const name1 = 'ilya'
{
	const name2 = 'Katya'
	// console.log(name2) // а тут все видно, локальная же облатсь
	var name3 = 'Elena' // нельзя юзать, исключение да и все
}

// console.log(name1)
//console.log(name2) // так не получится ес че типа область видимости глобальная не видит локальную область видимости
// console.log(name3)

function showScopeExample() {
	const number4 = 21 + 30

	function nestedFn(sum1) {
		const number5 = 30
		return console.log(sum1 + number5)
	}

	return console.log(number4), nestedFn(10)
}

// showScopeExample()

//Значение по умолчанию

function formatGreeting(name, emoji = '👋') {
	return `Hello ${name}, ${emoji}`
}

const getFormatGreeting = formatGreeting

console.log(getFormatGreeting('Ilya'))

//3:32:00

/// <-----------function callback ----------->

function confession() {
	return console.log('I love sveta')
}

function showConfession(callback) {
	return callback()
}

showConfession(confession)

// Secon example ----

function getInfo(name, age) {
	return `name: ${name}, age: ${age}`
}

function getInfoWhithDate(callback) {
	const date = new Date()
	console.log(`Today is ${date.toUTCString()}, \n ${callback('ilya', 20)}`)
}

getInfoWhithDate(getInfo)

// Встроенная функция confirm

function survive(question, agreefn, disagreefn) {
	if (confirm(question)) {
		agreefn()
	} else {
		disagreefn()
	}
}

// survive(
// 	'Are you sure?',
// 	() => console.log('You are alive (dolbaeb 😘)'),
// 	() => console.log('You are dead (pidoras) 🫡')
// )

const getSum = (a, b) => console.log(a * b)
// getSum(4, 5)
// getSum(5, 5)

//// <------------Call Stack---------->

const one = () => {
	console.log('one')
	two()
}

const two = () => {
	console.log('two')
	three()
}

const three = () => {
	console.log('three')
}

one()
