// ARRAY массивы
const styles = 'background: lightsalmon'
const log = console.log

const numbers = [20, 24, 21, 27, 25]
// log(numbers)
// log(numbers[0], numbers[1])
// log(numbers[0] + numbers[1])

const arrayMix = [
	20,
	'Ilya',
	21,
	'Lina',
	25,
	'Sveta',
	Boolean,
	undefined,
	{},
	[], //массив в массиве называют двухмерным массивом
]

// log(arrayMix)

numbers[0] = 21
// log(numbers[0])

const newArray = [1, 2, 3, 4, 'hello']
const newArray2 = newArray
// log(newArray === newArray2)
newArray[0] = 10
// log(newArray === newArray2, newArray[0], newArray2[0])

//<-----------Методы для обработки массива------------->
numbers.unshift(666)
numbers.push(777)
numbers.push(888)

// log(numbers)
numbers.pop() // если обозначить метод в переменную то он будет сохранен в ей, а в массиве удалит последний элемент
// log(numbers)

/*
//// <-----------------Циклы for while ------------------>
*/

const arrCars = ['BMW', 'AUDI', 'TOYOTA', 'MERCEDES', 'HONDA']
// log('1: ', arrCars[0])
// log('2: ', arrCars[1])
// log('3: ', arrCars[2])
// log('4: ', arrCars[3])
// log('5: ', arrCars[4])

/* for(стартовое выражение(начало цикла); условное выражение(условие); инкремент или декремент (на каждом шаге (итерации)) ) {
    // логика на каждом шаге итерации
}*/

// for (let i = 0; i < arrCars.length; i++) {
// 	log(arrCars[i])
// } // идет массив сначала вконец

// for (let i = arrCars.length - 1; i >= 0; i--) {
// 	log(`${i + 1}: ${arrCars[i]}`)
// } // по сути перевернули массив в другую последовательность

// for (let i = 0; i < arrCars.length; i++) {
// 	if (arrCars[i] === 'TOYOTA') continue
// 	log(arrCars[i])
// } // пропускает элемент если он равен TOYOTA

// for (let i = 0; i < arrCars.length; i++) {
// 	if (arrCars[i] === 'TOYOTA') break //останавливает цикл
// 	log(arrCars[i])
// }

//4:29:40

//// <-----------Обработка массива обьектов--------------->

const carsBrend = [
	{
		id: 1,
		brend: 'BMW',
		model: '3 series',
		color: 'black',
		price: 1_500_000,
	},
	{
		id: 2,
		brend: 'Audi',
		model: 'A4',
		color: 'brown',
		price: 1_300_000,
	},
	{
		id: 3,
		brend: 'Mersedes',
		model: 'C class',
		color: 'silver',
		price: 1_700_000,
	},
	{
		id: 4,
		brend: 'Skoda',
		model: 'Octavia',
		color: 'White',
		price: 1_200_000,
	},
]

// for (let i = 0; i < carsBrend.length; i++) {
// 	console.group(`Car number ${i + 1}`)
// 	console.log(carsBrend[i].brend)
// 	console.log(carsBrend[i].model)
// 	console.log(carsBrend[i].color)
// 	console.log(carsBrend[i].price)
// 	console.groupEnd()
// }

// let sum = 0
// for (let i = 0; i < carsBrend.length; i++) {
// 	sum += carsBrend[i].id
// }
// log(sum)

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let eventcount = 0

// for (i = 0; i < numbers2.length; i++) {
// 	if (numbers2[i] % 2 === 0) {
// 		eventcount++
// 	}
// }
// log(eventcount)

// for (let i = 0; i < 3; i++) {
// 	log(`%c${i + 1} - loop [1]`, styles)

// 	for (j = 0; j < 3; j++) {
// 		log(`%c${j + 1} - loop [2]`, styles)
// 	}
// }

let i = 0

// while (i < carsBrend.length) {
// 	log(carsBrend[i].brend)
// 	i++
// }

// while (true) {
// 	log('while(true)')
// 	if (i > 10) {
// 		log(`i = ${i}`)
// 		break
// 	}
// 	i++
// }

//4:41:00

const arrayNum = [3, 44, 33, 1]
// log(arrayNum)

for (let j = 0; j < arrayNum.length; j++) {
	// log(`Hui pimesh - loop[1] - ${j + 1}`)
	for (let i = 0; i < arrayNum.length - 1 - j; i++) {
		// log(`Hui pimesh - loop[2] - ${arrayNum[i]} > ${arrayNum[i + 1]}`)

		if (arrayNum[i] > arrayNum[i + 1]) {
			const temp = arrayNum[i]
			arrayNum[i] = arrayNum[i + 1]
			arrayNum[i + 1] = temp
		}
	}
}

// log(arrayNum)

// log(arrayNum.sort((a, b) => a - b))
// log(arrayNum.sort((a, b) => b - a)) // или сделать a - b вместе с reverse()

//4:53:00

for (car of carsBrend) {
	// log(`Car name -> ${car.brend}, ${car.model}, ${car.color} `)
}
