const log = console.log

const carsBrend = ['Audi', 'BMW', 'Mersedes', 'Skoda']

const number1 = [5, 33, 4, 44, 10]

// log(number1.sort((a, b) => a - b)) //изменяет сам массив и присвает отсаррированный
const number2 = [5, 33, 4, 44, 10]
// log(number2)

const newNumber = number1.toSorted((a, b) => a - b).toReversed() //делает копию но не изменяет сам массив данных
// log(newNumber)

// log(carsBrend)
const newCarsBrend = ['Volkswagen', 'Porshe']
const allCars = carsBrend.concat(newCarsBrend) //добавляет в конец массива новые данные другого массива
// log(allCars)

// log(allCars.toString())//превращает в строку
// log(allCars.join())// то же самое если пустое место оставить в скобках
// log(allCars.join(''))
// log(allCars.join(' - '))

//-----------------------
const nestedArray = [
	[1, 2],
	[3, 4],
	[5, [6, 7]],
	[8, [9], 10],
]
//-------------

// log(nestedArray.flat(2)) //превращает многоуровневый массив в одноуровневый
// log(nestedArray.flat(Infinity)) //превращает многоуровневый массив в одноуровневый (infinity - бесконечность)

// log(allCars.includes('Porshe')) //проверяет наличие определенной строки в массиве
// log(allCars.includes('lada'))

// log(allCars.at(2))
// log(allCars.at(4))

//-------------- static mode---------

const num = '1, 2, 3'

// log(Array.isArray(num))
// log(Array.isArray(allCars))

const arrayOf = 'q 2 1 iblan'
// log(Array.of(arrayOf))

const arrayFrom = Array.from('12131')
// log(arrayFrom)

///------------деструктуризация------------

const names = ['Ilya', 'Mark', 'Ivan']
const names2 = ['Katya', 'Masha']

const [nameOne, nameTwo] = names
const [nameKatya, nameMasha, nameSveta = 'Sveta'] = names2

log(nameOne, nameTwo)
log(nameKatya, nameMasha, nameSveta)

//5:11:00 пусть 00 но по факту 45 сек