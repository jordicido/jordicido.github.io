var idCounter = 0

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
