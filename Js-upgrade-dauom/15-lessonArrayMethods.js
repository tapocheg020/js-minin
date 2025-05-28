// Очень нужные скиллы в работе с обьектами и массивами
/*
	Arrays - Methods
	forEach, indexOf, lastIndexOf, find, findIndex,
	some, every, slice, splice, toSplice,
	filter, map, reduce.
*/

// --forEach -перебор массива

const log = console.log

const skills = ['html', 'css', 'js', 'scss', 'git', 'ts', 'react', 'scss']
// skills.forEach((value, index, thisArray) => log( value, index, thisArray))

const logValues = (value, index) => log(value, '-', index)
// skills.forEach(logValues)

// Поиск в массиве элемента - отбор
// log(skills.indexOf('ts'))
// log(skills.indexOf('js', 4)) // отбор с определенного индекса(-1)

// //
// log(skills.indexOf('scss'))
// log(skills.lastIndexOf('scss'))

// log(skills.indexOf('ts'))
// log(skills.lastIndexOf('ts'))

// <------------проверка на наличие чего либо в массиве--------------->
// log(skills.every(skill => skill === 'js'))
// log(skills.some(skill => skill === 'js'))

const users = [
	{ id: 1, name: 'Vasya' },
	{ id: 2, name: 'Petya' },
	{ id: 3, name: 'Masha' },
	{ id: 4, name: 'Nikita' },
]

const everyHasNames = users.every(user => 'name' in user)
const sommeHasNames = users.some(user => 'id' in user)
// log(everyHasNames, sommeHasNames)

const admUser = users.find(user => user.id === 3)
const admUserIndex = users.findIndex(user => user.id === 3)

// log(admUser, admUserIndex)

const filteredSkills = skills.filter(skill => skill.includes('c'))
//Метод filter - отбирает только true элементы и показывает их в массиве
//log(filteredSkills)
const eventNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12].filter(
	num => num % 2 == 0
)
// log(eventNumbers)

const clients = [
	{ id: 1, level: 3, name: 'Pasha', status: 'offline' },
	{ id: 2, level: 1, name: 'Pasha', status: 'offline' },
	{ id: 3, level: 5, name: 'Pasha', status: 'offline' },
	{ id: 4, level: 8, name: 'Pasha', status: 'online' },
	{ id: 5, level: 2, name: 'Pasha', status: 'offline' },
	{ id: 6, level: 6, name: 'Pasha', status: 'online' },
	{ id: 7, level: 5, name: 'Pasha', status: 'online' },
]

const onlineClients = clients.filter(
	client => client.status === 'online' && client.level > 5
)

log(onlineClients)

// 5:34:44