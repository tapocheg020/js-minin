let num = '122'

num = Number(num)
num = new Number(num)
number = num.valueOf()

console.log(number)

//<------Методы -------->

const chislo = '20.7343422'

// console.log(Number(chislo.toFixed(3)))
// console.log(+chislo.toFixed(3))
// console.log(+chislo.toPrecision(3))

// console.log(chislo.length)

let x

x = Math.min(2, 43, 1, 323, 0)
x = Math.max(2, 43, 1, 323, 0)

x = Math.ceil(6.1) //округляет в большую сторону ну будет 7
x = Math.floor(6.8) //округляет в меньшую сторону ну будет 6
x = Math.round(6.4) // округляет как получится, к 6 значит 6 к 7 значит 7
x = Math.trunc(99.222)

//<------- ------>

x = Math.pow(2, 3) // 2 в степени 3
x = Math.sqrt(16) // корень числа = 4

x = Math.random()
x = Math.floor(Math.random() * 50 + 1)

console.log(x)
