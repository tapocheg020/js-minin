//-обекты, деструктуризация, методы

const log = console.log

const myLove = {
	id: 1,
	name: 'Sveta',
	age: 24,
	isBeautiful: true,
	positionJob: 'hrDepartment',
	adress: {
		city: 'Kursk',
		job: 'Grinn',
	},
}

// for (const obj in myLove) {
// 	if (myLove.isBeautiful) {
// 		log(`My love -> ${obj}: ${myLove[obj]}`)
// 	}
// }

// for (const obj of Object.keys(myLove)) {
// 	if (myLove.isBeautiful) {
// 		log(`My love -> ${obj}: ${myLove[obj]}`)
// 	}
// }

//-----------> деструктуризация

const { name, age, ...restProperty } = myLove
// log(name, age, restProperty)

const newMyLove = {
	...myLove,
}
// log(newMyLove === myLove)
newMyLove.name = 'Dasha'
newMyLove.age = 21

// delete newMyLove.adress.city
// delete newMyLove.adress.job
// log(newMyLove, myLove)

const obj1 = { a: 10, b: 20 }
const obj2 = { b: 30, c: 40 }
const obj3 = { ...obj1, ...obj2, a: 100, e: 50 } //порядок записи важен тк если перезаписывать элемент раньше, то нечего не получится
log(obj3)

let z = Object.keys(myLove)
log(z)
x = Object.values(myLove)
x = Object.entries(myLove)
log(x)

//6: 13: 00
