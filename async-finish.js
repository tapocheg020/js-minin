// const car = {
// 	model: 'Mersedes',
// 	price: 20_000_000,
// }

// const json = JSON.stringify(car)
// const parsed = JSON.parse(json)

// console.log(json)
// console.log(parsed)

const list = document.getElementById('list')
const filter = document.querySelector('#filter')
let USERS = []

const toHtml = user => {
	return `<li class="list-group-item">${user.name}</li>
	<li class="list-group-item">${user.email}</li>
	<hr>
	`
}

const render = (users = []) => {
	if (users.length == 0) {
		list.innerHTML = 'Not found, try again'
	} else {
		const html = users.map(toHtml).join('')
		list.innerHTML = html
	}
}

const start = async () => {
	list.innerHTML = 'Loading...'
	try {
		const resp = await fetch('https://jsonplaceholder.typicode.com/users')
		const data = await resp.json()
		setTimeout(() => {
			USERS = data
			render(data)
			console.log('Server start!')
		}, 2000)
	} catch (err) {
		list.innerHTML = '404 not found'
	}
}

filter.addEventListener('input', event => {
	const value = event.target.value.toLowerCase()

	const filteredUsers = USERS.filter(user => {
		return (
			user.name.toLowerCase().includes(value) ||
			user.email.toLowerCase().includes(value)
		)
	})

	render(filteredUsers)
})

start()
