const log = console.log

//Работа с json

const car = {
	name: 'Mercedes',
	color: 'black',
	year: new Date(2025, 5, 27),
	power: 4.5,
	engine: {
		type: 'V8',
	},
	getInfo: () => log('Info'), // не воспринимает такой формат
	isExpensive: undefined, // не воспринимает такой формат
}
const carJson = JSON.stringify(car)

// const carObject = JSON.parse(JSON.stringify(car))
const carObject = JSON.parse(carJson, (key, value) => {
	if (key === 'year') {
		return new Date(value)
	}
	return value
})

// log(carObject)

// log(carObject.year.getFullYear())

//local storage, session storage

localStorage.setItem('car', carJson)
localStorage.setItem('name', 'Ilya')
// localStorage.clear('car', )//удаляет
// localStorage.removeItem('car')
localStorage.getItem('car') //берез данные от слова гет

// log(localStorage.length)
// log(localStorage.key(1))

const clients = [
	{ id: 1, level: 3, name: 'Ilya', status: 'offline' },
	{ id: 2, level: 1, name: 'Sveta', status: 'offline' },
	{ id: 3, level: 5, name: 'Katya', status: 'offline' },
	{ id: 4, level: 8, name: 'Nastya', status: 'online' },
	{ id: 5, level: 2, name: 'Sergey', status: 'offline' },
	{ id: 6, level: 6, name: 'Pasha', status: 'online' },
	{ id: 7, level: 5, name: 'Zhenya', status: 'online' },
]

const clientsJson = JSON.stringify(clients)
const clientsLocalObject = JSON.parse(localStorage.getItem('clients', clientsJson))

log(clientsLocalObject)