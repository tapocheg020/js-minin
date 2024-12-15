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
			return now.toLocaleTimeString() + '.' + now.getMilliseconds()
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

const bindMode = modeReturn => {
	return () => {
		mode = modeReturn
		return update()
	}
}

FullBtn.onclick = bindMode('full')
DateBtn.onclick = bindMode('date')
TimeBtn.onclick = bindMode('time')

//5.08.56
