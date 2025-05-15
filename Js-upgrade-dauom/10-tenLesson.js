//3:00:00

// Switch case if else

const num1 = 5 + 10

switch (num1) {
	case 5:
		console.log('5')
		break
	case 13:
		console.log('huita popala')
		break
	default:
		console.log('ebala')
		break
}

// ------------
// const num2 = 33
// const casual = prompt('Введи число хуйлан бля нах ')

// if (num2 == 33) {
// 	console.log(casual)
// } else {
// 	console.log('proverka gamna33')
// }

// switch (casual) {
// 	case '22':
// 		console.log('44 СЮДА гамилтон менталити')
// 		break
// 	case '33':
// 		console.log('LEGENDA MAX VRESTAPHEEEEN')
// 		break
// 	default:
// 		console.log('nah, opyat zalupa')
// 		break
// }

// --- practic

// const today = new Date(2025, 4, 13)
// const month = today.getMonth()

// switch (month) {
// 	case 0:
// 	case 1:
// 	case 11:
// 		console.log('зима нах')
// 		break
// 	case 2:
// 	case 3:
// 	case 4:
// 		console.log('весна нах')
// 		break
// 	case 5:
// 	case 6:
// 	case 7:
// 		console.log('лето нах')
// 		break
// 	case 8:
// 	case 9:
// 	case 10:
// 		console.log('осень накхуй')
// 		break
// }

// ----- PRACTIC 3 ----

const newDate = new Date()
const getHour = newDate.getHours()
console.log(getHour)

switch (true) {
	case getHour < 12:
		console.log('Первая половина раб дня нах')
		break
	case getHour < 18:
		console.log('Вторая половина раб дня нах')
		break
	case getHour < 22:
		console.log('Ну тут уже дома тут раслабон нах')
		break
	default:
		console.log('хуй пойми спишь наверное нах')
		break
}
