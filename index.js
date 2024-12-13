// const now = new Date()

let mode = 'time'
const outputTitle = document.getElementById('output')
const FullBtn = document.getElementById('full')
const DateBtn = document.getElementById('date')
const TimeBtn = document.getElementById('time')

outputTitle.textContent = new Date()

setInterval(() => {
	outputTitle.textContent = formate(mode)
}, 1000)
//5.06.44

const formate = formateMode => {
	const now = new Date()

	switch (formateMode) {
		case 'time':
			return now.toLocaleTimeString()
		case 'date':
			return now.toLocaleDateString()
		case 'full':
			return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
		default:
			return now.toLocaleDateString()
	}
}
