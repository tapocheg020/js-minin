const inputElement = document.querySelector('#title')
const createBtn = document.querySelector('#create')
const listElement = document.querySelector('#list')

// console.log(inputElement.value)
/*
 const notes = ['Изучить JS', 'Далее React', 'Далее Node.js']

function render() {
	for (let i = 0; notes.length > i; i++) {
		listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
	}
}
render()
*/

/*
function getNoteTemplate(title) {
	return `
	<li class="list-group-item d-flex justify-content-between align-items-center">
		<span>${title}</span>
			<span>
				<span class="btn btn-small btn-success">&check;</span>
				<span class="btn btn-small btn-danger">&times;</span>
			</span>
	</li>`
}*/

// createBtn.onclick = function () {
// 	if (inputElement.value.length === 0) {
// 		return
// 	}
// 	listElement.insertAdjacentHTML(
// 		'beforeend',
// 		getNoteTemplate(inputElement.value)
// 	)
// 	inputElement.value = ''
// }

const notes = [
	{
		title: 'Изучить JS',
		isCompleted: false,
	},
	{
		title: 'Далее React',
		isCompleted: false,
	},
]

function render() {
	listElement.innerHTML = ''
	if (notes.length === 0) {
		listElement.innerHTML = '<li class="list-group-item">Список пуст</li>'
	} else {
		for (let i = 0; notes.length > i; i++) {
			listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
		}
	}
}

render()

listElement.onclick = function (event) {
	if (event.target.dataset.index) {
		const index = parseInt(event.target.dataset.index)
		const type = event.target.dataset.type

		if (type === 'toggle') {
			notes[index].isCompleted = !notes[index].isCompleted
		} else if (type === 'remove') {
			notes.splice(index, 1)
		}

		render()
	}
}

function getNoteTemplate(notes, index) {
	return `
	<li class="list-group-item d-flex justify-content-between align-items-center">
		<span class='${notes.isCompleted ? 'text-decoration-line-through' : ''}' >${
		notes.title
	}</span> 
			<span>
				<span class="btn btn-small btn-${
					notes.isCompleted ? 'warning' : 'success'
				}" data-index="${index}" data-type="toggle" >&check;</span>
				<span class="btn btn-small btn-danger" data-type="remove" data-index="${index}">&times;</span>
			</span>
	</li>`
}

createBtn.onclick = function () {
	if (inputElement.value.length === 0) {
		return
	}
	const newNote = {
		title: inputElement.value,
		isCompleted: false,
	}
	notes.push(newNote)
	render()
	inputElement.value = ''
}
