//															/*<- Типы данных в JavaScript ->*/							

// String строковый тип данных
const name = 'Ilya'
console.log(name, typeof name)

// Number числовой тип данных
const age = 19
console.log(age, typeof age)

// bigInt большое кол-во чисел в переменных
const bigInt = 3242343412343214321432143414n
console.log(bigInt, typeof bigInt)

// Boolean булевой тип данных, либо true либо false
const isBoolean = true
const isNotBoolean = false
console.log(typeof isBoolean, 'hui raskidal', isBoolean, isNotBoolean)

// null пустое значение пустота тип данных в console = object
const city = null
console.log(typeof city, city)

//undefined
let isUndefined
console.log(typeof isUndefined, isUndefined)

// идентификатор symbol редко используется, но есть такая тема
const id = Symbol('hui blya')
console.log(id, typeof id)

//Ссылочные типы данных
//object
const person = {
	name,
	age,
	isBoolean,
	autoCatalog: ['Mercedes', 'Bmw', 'Audi'],
	firstName: 'Shwed',
	id,
}

person.age = 20
person.isBoolean = false

person.autoCatalog.push('Honda', 'Lexus')
console.log(person)

// Array массив тип данных
const numArray = [1, 2, 3, 4, 5]
console.log(typeof numArray, numArray)

//function это тоже объект, тип данных это объект
function Alfi() {
	return numArray
}
console.log(typeof Alfi())

// JAVASCRIPT ЭТО ЧЕРТОВ ОБЪЕКТ
