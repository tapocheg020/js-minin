//  Переменные это своего рода присваивание, в которых хранятся обазначенные значения или данные которые были присвоены

// Декларирование переменной = let x;
// Инициализация переменной = let x = 100; // const x = 100 \\ var идет нахуй

// Переменным надо давать имена исходя из их значений

/*<----
let first = 20 + 3 - 3 + 10
const second = 23

first = 35
first = first - 12

if (first == second) {
	console.log('huia sebe? da takogo ne bude')
} else {
	console.log('nu tut pravdopodobno')
}
---->*/

// Выходя из области видимости объекта, переменные внутри будут не видны снаружи, а если объявлять переменные снаружи, то внутри объекта или функции или массива будут видны данные

const name = 'Ilya'
const age = 20
const isProgram = false

console.log(typeof name, typeof age, typeof isProgram)
