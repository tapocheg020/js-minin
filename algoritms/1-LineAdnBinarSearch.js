const array = [1, 4, 3, 8, 6, 9, 14, 43]
let count = 0
const lineSearch = (array, item) => {
	for (let i = 0; i < array.length; i++) {
		count += 1
		if (array[i] === item) {
			return i
		}
	}
}

// console.log(lineSearch(array, 8), `count = ${count}`)

const arrayBin = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let count2 = 0

const binarySearch = (array, item) => {
	let start = 0
	let end = array.length - 1
	let middle
	let found = false
	let position = -1

	while (found === false && start <= end) {
		middle = Math.floor((start + end) / 2)
		count2 += 1
		if (array[middle] === item) {
			found = true
			position = middle
			return position
		} else if (item < array[middle]) {
			end = middle - 1
		} else {
			start = middle + 1
		}
	}
	return position
}

console.log(binarySearch(arrayBin, 9), `count = ${count2}`)
