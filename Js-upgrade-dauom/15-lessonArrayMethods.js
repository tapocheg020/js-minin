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
// log(filteredSkills)
const eventNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12].filter(
	num => num % 2 == 0
)
// log(eventNumbers)

const clients = [
	{ id: 1, level: 3, name: 'Ilya', status: 'offline' },
	{ id: 2, level: 1, name: 'Sveta', status: 'offline' },
	{ id: 3, level: 5, name: 'Katya', status: 'offline' },
	{ id: 4, level: 8, name: 'Nastya', status: 'online' },
	{ id: 5, level: 2, name: 'Sergey', status: 'offline' },
	{ id: 6, level: 6, name: 'Pasha', status: 'online' },
	{ id: 7, level: 5, name: 'Zhenya', status: 'online' },
]

const onlineClients = clients.filter(
	client => client.status === 'online' && client.level >= 5
)

// for (let i = 0; i < onlineClients.length; i++) {
// 	console.group('Client number ' + (i + 1))
// 	console.log(`id - ${onlineClients[i].id}`)
// 	console.log(onlineClients[i].name)
// 	console.log(onlineClients[i].level)
// 	console.log(onlineClients[i].status)

// 	console.groupEnd()
// } //типа старый материал вспоминаю

// log(onlineClients)

// 5:37:44

// <----------------------Метод Slice----------------->

const newUsers = users.slice(0, 4)
// log(newUsers)

// delete users[admUserIndex]
// log(users)//удаляет но остается пусто вместо элемента в массиве

/*
--------Splice-------
*/

// log(users.splice(admUserIndex, 1))
// log(users)//удаляет элемент, сохраняет его и делает массив чистым

// log(users.splice(2, 0, { id: 3, name: 'Ilya' }))
// log(users)// вставляет элементы в массив под определенным индексом

const users2025 = users.toSpliced(3, 1, { id: 4, name: 'Sveta' }) //не меняет старый массив   ES2023
// log(users2025) // вставляет элементы в массив под определенным индексом
// log(users)

const str = 'Anastasia'
// log(str.split('').reverse().join(''))

/*
<----------Map-------->
Часто используемый метод для обработки массивов

map вызывает функцию каждого элемента массива и возвращает массив результатов выполнения этой функции
*/

const clientsName = clients.map(client => client.name) //пиши return если не в одну строку
// log(clientsName)

const clientsNameAndStatus = clients
	.map(client => {
		return {
			name: client.name,
			status: client.status,
			isVzrosliy: true,
		}
	})
	.map(client => {
		if (client.status === 'online') {
			client.status = 'online 😎😎'
		} else {
			client.status = 'offline 😴😴'
		}
		return client
	})
	.filter(onlik => onlik.status.startsWith('online'))
// log(clientsNameAndStatus)

//5:48

//    Метод reduce
/*
		reduce используется для вычисления единого значения на основе массива
		arr.reduce((accumulator, item, index, array) => {
			//....
		},[initial])

//Accumulator - результат предыдущего вызова этой функции, равен initial при первом вызове (если передан initial)
//Item - текущий элемент массива
//Index - индекс текущего элемента
//Array - массив
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// log(numbers.reduce((acc, cur) => acc + cur, 0))

const carsBrand = [
	{
		id: 1,
		brand: 'BMW',
		model: '3 series',
		color: 'black',
		price: 1_500_000,
	},
	{
		id: 2,
		brand: 'Audi',
		model: 'A4',
		color: 'brown',
		price: 1_200_000,
	},
	{
		id: 3,
		brand: 'Mersedes',
		model: 'C class',
		color: 'silver',
		price: 1_700_000,
	},
	{
		id: 4,
		brand: 'Skoda',
		model: 'Octavia',
		color: 'White',
		price: 1_200_000,
	},
]

const totalPriceCars = carsBrand.reduce((acc, cur) => acc + cur.price, 0)
// log(totalPriceCars)

let brandCount = 0
const brandMaps = carsBrand.reduce((acc, cur) => {
	if (cur.brand in acc) {
		acc[cur.brand]++
	} else {
		acc[cur.brand] = 1
		brandCount++
	}//сначала идет в else  и создает acc, потом идет в if
	return acc
}, {})

// log(brandMaps)
// log(brandCount)

// 5:58:08