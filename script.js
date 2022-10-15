

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
        todoList.appendChild(li)
        clearInputText(inputText)
    }
}

function clearInputText(inputText) {
    inputText.value = ''
}