//<-----		Логические операторы		-----> // if else
// let a = 13

// if (a % 5 == 2) {
// 	console.log('a is odd')
// } else if (a % 5 == 0) {
// 	console.log('Takogo ne budet')
// } else {
// 	a = a * 10
// 	console.log(`idi ti nahui, da ${a}`)
// }

//<---------Тернарные операторы---------->
let num = 25

// num % 4 == 2 ? console.log('vo gamno') : console.log('vo gamno ne')

// || - Логическое ИЛИ
// Возвращает первое положительное truthy значение или последнее значение
// Находит первое истинное значение или переходит к следующему и т.д.

let sin

sin = 1 || 2
sin = 0 || 2

sin = true || false
sin = false || true
sin = false || false

// console.log(sin)

const age = 25

if (age == 20 || age <= 24) {
	console.log('vo parasha')
} else {
	// console.log('nu tak i dolzhno bit')
}

//---------------------
//&& - Логическое И
//&& - при проверках возвращает  true, если оба аргумента истинны, а иначе - false
// или возвращает первое ложное значение или последнее значение любое
// Разница между && и || в том, что && - возвращает первое ложное значение, а ИЛИ - первое истинное

let b
if (0 && 3) {
	console.log('это сообщение не будет видно')
}

b = 0 && 3
// b = true && 'hello'
// console.log(b)

isLoading = true
// {
// 	isLoading && console.log('Loading...')
// }

const proverochka = 10 && 20 && 2 && 'sasal?' // идет проверка на выискивание ложного значения, если есть его выведет, если нет то ласт значение

// console.log(proverochka)

const hour = 10

// if (hour % 4 == 2 && 'hello') {
// 	console.log('hello pidor')
// } else {
// 	console.log('hello ne pidor')
// }

// ---!--- Логическое отрицание. По сути меняет значение на противоположное
// !! просто приносит к true или false выводит, по сути бесполезный оператор сравнения

let c

c = !true
c = !false
c = 'hello'
c = !c

console.log(c)
