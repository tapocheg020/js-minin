//<- -----Step 1------ ->
let operators

operators = 4 + 4 // сложение
operators = 4 - 4 // вычитание
operators = 4 * 4 // умножение
operators = 4 / 4 // деление
operators = 5 % 3 // остаток от деления будет 2, потому что в пятерке только одна тройка

// console.log(operators)

//<- -----Step 2------ ->
//ДЕКРЕМЕНТ это вычитание а ИНКРЕМЕНТ это сложение
//ПРЕФИКСНЫЙ это сложение или вычитание ДО самой переменной(значения)
//ПОСТФИКСНЫЙ это сложение или вычитание ПОСЛЕ самой переменной(значения)

let number
number = 2
number = number - 1 // number++
number = number + 1 // number--

number = (number - 1 + 11) % 5 // будет остаток ОТ ДЕЛЕНИЯ 2, понял да неуч
// console.log(number)

let first = 10
//Постфиксный инкремент
let second = first++ //тут мы присвоили значание 10 second, и увеличили переменную first на 1 в переменной second (ебать гемор)
console.log(second, first)//(10,11)

//Постфиксный декремент
// let second = first--

//Префиксный инкремент
let third = ++first // тут мы увеличили оба значения и присвоили им одинаково +1
console.log(third, first)//12

//Префиксный декремент
// let third = --first

// console.log(second, third, first)

//<- -----Step 3------ -> //Операторы присваивания

let a = 17

a += 2 // сложение
a -= 3 // вычитание
a *= 3 // умножение
a /= 2 // деление
a %= 5 // остаток от деления
a **= 4 // возведение в степень

// console.log(a)

//<- -----Step 4------ -> //Операторы сравнения

const fabric = 4
// ==, ===, !=, !==,
// >, <, >=, <=

// console.log(fabric == 4)

//<- -----Step 5------ -> // Конкатенация(объединение)

const greeting = 'Hello, ' + 'Pidorasina' + '!'
const name = 'TVOY(dadada tvoy)'
// console.log(greeting + ` YA ${name} ROT EBAL`)
// console.log(1 + '1') //11 конкатенация по джабоскриптовскому синтаксису
