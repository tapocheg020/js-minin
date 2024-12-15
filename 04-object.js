const person = {
	name: 'Ilya',
	age: 20,
	isYoutuber: false,
	languages: ['ru', 'en'],
	address: {
		city: 'Kursk',
		street: 'Dereglazova',
	},
	'complex key': 'value',
	['key_' + 10 * 2]: 'key_value',
	greet() {
		console.log('Hello')
	},
	arrow: () => console.log('Person arrow', this), // не создает свой собственный контекст
	info() {
		console.log(this) //создает контекст в котором они определены
		console.log('Person name:' + this.name)
	},
}

// console.log(person)
// person.greet()
// person.arrow()
// person.info()

// person.languages.push('de')
// console.log(person.languages)

// delete person.address
// console.log(person)

// const age = 21
// const name = 'Katya'
// const { age: personAge, name: firstName, languages } = person
// console.log(personAge, firstName, languages)

// for (let key in person) {
// 	if (person.hasOwnProperty(key)) {
// 		console.log(person[key])
// 	}
// }//метод показывает в какой он среде property либо array либо object

// Object.keys(person).forEach(key => console.log(person[key]))

const logger = {
	keys(withText = true) {
		if (withText) {
			console.log('Object keys:', Object.keys(this))
		} else {
			console.log('OBJECT KEYS:', Object.keys(this))
		}
	},

	keysAndValues() {
		Object.keys(this).forEach(key => {
			console.log('Key:', key)
			console.log('Value:', this[key])
		})
	},
}

// logger.keys.bind(person, true)()

// logger.keys.call(person, true)
// logger.keys.apply(person, [false])

class Human {
	static isHuman = true //статичное свойство не можем спроецировать 

	humanGreet() {
		return 'Я бы выебал катюху'
	}

	toString() {
		return 'toString'
	}
}

class Person extends Human {
	constructor(name, age) {
		super()
		this.name = name ?? 'Undefined name'
		this.age = age ?? 'Undefined age'
	}

	sayHello() {
		console.log(`Привет, ${this.name}, ${this.age} лет`)
	}
	goWalk() {
		console.log(`Привет ${this.name}, пошли погуляем `)
	}
}

const newPerson1 = new Person('Илья', 20)
const newPerson2 = new Person('Катя', 25)

newPerson2.sayHello()
newPerson2.goWalk()

console.log(Human.isHuman)
