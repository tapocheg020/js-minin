//Продолжение работы со строками символами и тд

const str = 'Hello "world"'
const str2 = 'Hello \n"world"'

// console.log(str2)

const firstNameEzh = `peregaric
 - mihail
 - huila
 - perdun
`
// console.log(`это в это д и г ${firstNameEzh}`)

// ---------- <-->
const textExample = 'BMW 3 series '

// console.log(textExample.length)
// console.log(textExample.toLowerCase())
// console.log(textExample.toUpperCase())
// console.log(textExample.repeat(4))

// console.log(textExample[0])
// console.log(textExample[1])
// console.log(textExample.at(-11))
// console.log(
// 	`I am gangsta epta ${
// 		textExample.at(0) + textExample.at(7) + textExample.at(6)
// 	}`
// )

let stringAwesome = '      JavaScript the best       '
// console.log(stringAwesome.replace('Script', '').trim())

// console.log(stringAwesome.trimStart())//ток вначале
// console.log(stringAwesome.trimEnd())//ток вконце
// console.log(stringAwesome.trim())//слева и справа удаляет пробелы

// console.log(stringAwesome.indexOf('J'))//регистр важен если речь идет о типе  string

// stringAwesome = 'JavaScript the best'
// if(stringAwesome.indexOf('J') !== -1) {
// 	console.log('Мы попадем в эту ветку босс')
// } else {
// 	console.log('Ну видать чет хуйню проверку сделал')
// }

//-------------------------
const newParameter = 'Ilya will buy a BMW before he is 25'
// console.log(newParameter.includes('BMW'))
// console.log(newParameter.startsWith('Ilya'))
// console.log(newParameter.endsWith('BMW'))

//-----------------
const newVariable = 'hardcore_01_02'
// console.log(newVariable.substring(0, 4))//вырезает то что не находится в этом
// console.log(newVariable.substring(4))//наоборот
// console.log(newVariable.substring(8, 4))//(4, 8) если старт больше конца, меняет местами

// console.log(newVariable.slice(0, 4))//вырезает то что не находится в этом
// console.log(newVariable.slice(8, 4))//хуево работает со строками

console.log(newVariable.padStart(18, "8"))//добор символов вначале
console.log(newVariable.padEnd(18, "6"))//добор символов вконце
