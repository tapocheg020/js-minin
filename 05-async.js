// const timeout = setTimeout(() => {
// 	console.log('After 2 seconds')
// }, 2000)

// clearTimeout(timeout)

// setTimeout(() => {
// 	console.log('After 3 seconds')
// }, 3000)

// let counter = 0
// const countInterval = setInterval(() => console.log(+Math.random().toFixed(2), ++counter), 1000)

const delay = (time = 1000) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([1, 2, 3])
			// reject(new Error('Error is delay'))
		}, time)
	})
	return promise
}

// delay(2500)
// 	.then(data => {
// 		console.log('Timeout', data)
// 		return data.map(item => item ** 2)
// 	})
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err))
// 	.finally(() => console.log('Server is fiend'))

//6:24:30

const getData = () => new Promise(resolve => resolve([1, 2, 3]))

// getData().then(array => console.log(array))

const asyncExample = async () => {
	try {
		await delay(3000)
		const data = await getData()
		console.log(data)
	} catch (error) {
		console.log(error)
	} finally {
		console.log('Server is fiend')
	}
}

asyncExample()
