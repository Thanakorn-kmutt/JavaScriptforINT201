const todoInput = document.getElementById('todoInput')
const addButton = document.getElementById('addButton')
const todoList = document.getElementById('todoList')


function init() {
    addButton.addEventListener('click', addTask)
}

function addTask() {
    const task = todoInput.value
    const listItem = document.createElement('li')
    listItem.textContent = task
    todoList.appendChild(listItem)
    todoInput.value = ''

    
}


init()