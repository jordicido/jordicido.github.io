var idCounter = 0


async function getTodoItems() {
    let todoItems = await fetch('http://localhost:8080/todoItems')
    let response = await todoItems.json()
    return response
}

getTodoItems().then( response => printItems(response))


function printItems(response) {
    var todoList = document.getElementById("todo-list")
    var doneList = document.getElementById("done-list")
    var todoItems = response.filter( it => it.done == false)
    var doneItems = response.filter( it => it.done == true)
    console.log(todoItems)
    todoItems.forEach(item => {
        var li = document.createElement("li")
        li.classList.add("todo-item")
        var check = document.createElement("input")
        check.type = 'checkbox'
        var p = document.createElement("p")
        var text = document.createTextNode(item.text)
        p.appendChild(text)
        li.appendChild(check)
        li.appendChild(p)
        li.id = item.id
        li.onclick = changeCheckState
        todoList.appendChild(li)
    });
    doneItems.forEach(item => {
        var li = document.createElement("li")
        li.classList.add("done-item")
        var check = document.createElement("input")
        check.type = 'checkbox'
        var p = document.createElement("p")
        var text = document.createTextNode(item.text)
        p.appendChild(text)
        li.appendChild(check)
        li.appendChild(p)
        li.id = item.id
        li.onclick = changeCheckState
        li.firstElementChild.checked = true
        doneList.appendChild(li)
    });
}

function addTask(event) {
    var todoList = document.getElementById("todo-list")
    var inputText = document.getElementById("input-task")
    if (event.key === "Enter") {
        var li = document.createElement("li")
        li.classList.add("todo-item")
        var check = document.createElement("input")
        check.type = 'checkbox'
        var p = document.createElement("p")
        var text = document.createTextNode(inputText.value)
        p.appendChild(text)
        li.appendChild(check)
        li.appendChild(p)
        li.id = "#"+idCounter++
        li.onclick = changeCheckState
        todoList.appendChild(li)
        clearInputText(inputText)
    }
}

function clearInputText(inputText) {
    inputText.value = ''
}

function changeCheckState() {
    var ID = this.id
    var todoList = document.getElementById("todo-list")
    var doneList = document.getElementById("done-list")
    var selectedLi = document.getElementById(ID)
    if (selectedLi.parentElement == todoList) {
        todoList.removeChild(selectedLi)
        selectedLi.className = "done-item"
        selectedLi.firstElementChild.checked = true
        doneList.appendChild(selectedLi)
    } else {
        doneList.removeChild(selectedLi)
        selectedLi.className = "todo-item"
        selectedLi.firstElementChild.checked = false
        todoList.appendChild(selectedLi)
    }
}