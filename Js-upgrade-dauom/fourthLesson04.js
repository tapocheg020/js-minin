// Преобразование типов епта
let value = 10

// <- ПРЕОБРАЗОВАНИЕ ЧИСЛО В СТРОКУ ->
// value = value + ''
// value = String(value)

// console.log(value.toString())//метод преобразования из number в String
// console.log(String(value))//метод преобразования из number в String

// <- ПРЕОБРАЗОВАНИЕ СТРОКУ В ЧИСЛО ->
let stringName = '22'

stringName = Number(stringName)
stringName = +stringName

stringName = '22add'
stringName = parseInt(stringName)

// console.log(stringName)

//////
numSum = 20.44334
numSum = parseFloat(numSum) //чтоб число выводилось с плавающей точкой
numSum = +numSum.toFixed(2) //чтоб выводилось определенное кло-во знаков после точки
numSum = Number(numSum.toFixed(2)) //чтоб выводилось определенное кло-во знаков после точки

// console.log(numSum)

//Casting  // ХУЙ ПОЙМИ КАК ЭТО ПОЛУЧАЕТСЯ ТАК НО ТОЛЬКО СЛОЖЕНИЕ НЕ КАСТИТСА НУ ТИПА ЧИСЛО ПЛЮС СТРОКА БУДЕТ СТРОКА
value = 10 + '10'
value = 10 * '10'
value = 10 - '10'
value = 10 / '10'
value = 10 % '3'

// value = 10 ** '4'

//bad практика
value = 10 + true //11 пиздец да джабаскрипт нахуй
value = 10 + false //10 пиздец да джабаскрипт нахуй
value = 10 + null //huita

console.log(value)



// 1:13:20 js 1/2