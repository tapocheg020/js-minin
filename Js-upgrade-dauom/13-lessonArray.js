// ARRAY массивы

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
//// <-----------------Циклы for while for each------------------>
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

for (let i = 0; i < arrCars.length; i++) {
	log(arrCars[i])
}// идет массив сначала вконец

for (let i = arrCars.length - 1; i >= 0; i--) {
	log(`${i + 1}: ${arrCars[i]}`)
}// по сути перевернули массив в другую последовательность

//4:29:40