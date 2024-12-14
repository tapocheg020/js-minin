// const now = new Date()
let mode = 'full'

const outputTitle = document.getElementById('output')
const FullBtn = document.getElementById('full')
const DateBtn = document.getElementById('date')
const TimeBtn = document.getElementById('time')

const format = formatMode => {
	const now = new Date()

	switch (formatMode) {
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

function update() {
	return (outputTitle.textContent = format(mode))
}

update()
setInterval(() => update(), 1000)

FullBtn.onclick = () => (mode = 'full')
DateBtn.onclick = () => (mode = 'date')
TimeBtn.onclick = () => (mode = 'time')

//5.08.56
