let list = document.getElementById("list")
let msg = document.getElementById("msg")

function show(text){
    msg.textContent = text
}

function addTask(){
    let input = document.getElementById("task")
    let value = input.value.trim()

    if(!value){
        show("Enter a task")
        return
    }

    let li = document.createElement("li")

    let text = document.createElement("span")
    text.textContent = value

    let edit = document.createElement("button")
    edit.textContent = "Edit"

    let del = document.createElement("button")
    del.textContent = "Delete"

    edit.onclick = () => {
        let updated = prompt("Update task", text.textContent)

        if(updated && updated.trim()){
            text.textContent = updated
            show("Task updated")
        }
    }

    del.onclick = () => {
        li.remove()
        show("Task deleted")
    }

    li.append(text, edit, del)
    list.append(li)

    input.value = ""
    show("Task added")
}