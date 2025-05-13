let date = new Date()
date = new Date(0)
date = Date.now()

date = new Date(2025, 4, 10, 20, 20)
date = new Date('2025-04-10T20:24:20')

date = date.getTime()

date = Math.round(Date.now() / 1000 / 60 / 60 / 24 / 365)

// console.log(date)

// -------Методы-------

date = Date.parse('2025-08-11T20:24:20')

date = new Date()

// -------------Сетторы (установщики)------------
// date.setDate(4)
// date.setDate(-3)

date.setHours(20, 31, 0)
// date.setMinutes(00)
// date.setSeconds(00)
date.setFullYear(2025, 3, 10)

let newDate = new Date()

// console.log(
// 	Math.ceil(newDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24
// )

// ----------Геттеры(получатели)----------

// console.log(
// 	date.getDate(),
// 	date.getFullYear(),
// 	date.getMinutes(),
// 	date.valueOf()
// )

//------------Представление даты---------
date = new Date()

let dateNew = Intl.DateTimeFormat('ru-RU', {
	day: 'numeric',
	month: 'long',
	year: 'numeric',
}).format(date)

dateNew = date.toLocaleString('ru-RU', {
	day: 'numeric',
	minute: '2-digit',
	hour: 'numeric',
	month: 'long',
	year: 'numeric',
	timeZone: 'Europe/Moscow',
})

console.log(dateNew)

//-------- UTC & ISO

const now = new Date()

console.group('UTC & ISO')
console.log(now.toUTCString())
console.log(now.toISOString())
console.groupEnd()

