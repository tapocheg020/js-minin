const hobbyCar = 'hobby'
const id = 'wer#qr3234tfsd'

const aboutCar = {
	nameCar: 'Audi',
	yearCar: 2015,
	engineCar: '1.8 TFSI',
	isPrestigious: true,

	[hobbyCar]: 'sport, lubitel',
	id,

	volume: {
		one: 1.8,
		two: 1.6,
		three: 1.4,
		four: 2.0,
	},
	modifications: ['A', 'S', 'RS'],

	0: 'just zero',
	'first car': 'granata',

	greet: (name, age) => {
		return `Hello - ${name}, age - ${age}`
	},

	showGreet: callback => {
		const firstNum = 12
		const secondNum = 13
		return console.log(
			`result sum - ${firstNum + secondNum}, and now he stood - ${callback(
				'ilya',
				20
			)}`
		)
	},
}

console.log(aboutCar.engineCar)
console.log(aboutCar.nameCar)
console.log(aboutCar.isPrestigious)
console.log(aboutCar.modifications)

console.log(
	aboutCar.volume.one,
	aboutCar.volume.two,
	aboutCar.volume.three,
	aboutCar.volume.four.toFixed(1)
)

console.log(aboutCar[0], aboutCar['0'])
console.log(aboutCar['first car'])

delete aboutCar[0]
// console.log(aboutCar[0])

///<------------------------------------ >

aboutCar.showGreet(aboutCar.greet)

const prevNameCar = aboutCar.nameCar

aboutCar.nameCar = 'Volkswagen'
console.log(aboutCar.nameCar)
console.log(prevNameCar)

////----------------------------------
console.log(aboutCar.isHobby)
aboutCar.isHobby = true
console.log(aboutCar.isHobby)

console.log(aboutCar[hobbyCar], aboutCar.id)

///// -------------------Ссылочный тип обЪекта, таким методом нельзя создать индивидуальный обЪект на основе старого, будет лишь ссылка и если меняется в новой переменной значение, то и в старом обЪекте поменяется тоже.

const newCar = aboutCar

newCar.nameCar = 'Audi A8 L'
newCar.yearCar = 2020
console.log(aboutCar === newCar)
console.log(aboutCar.nameCar, newCar.nameCar)

// 4:08:08
