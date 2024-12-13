// const now = new Date()

const outputTitle = document.getElementById('output')
const FullBtn = document.getElementById('full')
const DateBtn = document.getElementById('date')
const TimeBtn = document.getElementById('time')

outputTitle.textContent = new Date()

setInterval(() => {
	outputTitle.textContent = new Date()
}, 1000)
//5.06.44
