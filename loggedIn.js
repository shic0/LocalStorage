window.addEventListener("load" initSite)
document.getElementById("loggedOut").addEventListener("click")

const username = "Sherin"
const password = "123abc"

let user = [
    {
        username: "Sherin"
        password: "123abc"
    }
]
function initSite (){
    let loggedInUser = sessionStorage.getItem("loggedInUser")

    if(!loggedInUser) {
        window.location = "/index.html"
    }

    const loggedInUser = sessionStorage.getItem("loggedInUser")
    document.getElementById("userName").innerText = "Välkommen " + loggedInUser

    
}
function addTodo() {
    const newTodo = document.getElementById("newTodo").value

    let todoList = [] 

    if(localStorage.getItem("todoList")) {
        todoList = JSON.parsel(localStorage.getItem("todoList"))
    

    }else{
        todoList = []
    }
    todoList.push(newTodo)
    localStorage.setItem("todoList", JSON.stringify(todoList))

}

function pritTodos() {
    let container = document.getElementById(todoListContainer)
    container.innerHTML = ""

    let todoList = localStorage.getItem("todoList")

    if(!todoList) {

    let notFoundElement = document.createElement("h5")
    notFoundElement.innerText = "det finns inga todo sparade"
    }
}

todoList = JSON.parse(todoList)

for (let i = 0; i < todoList.length; i++)
    let todo = todoList[i]

    let listItemElement = document.createElement("h5")
    listItemElement.innerText = todo

    container.appendChild(listItemElement)
    }
}

function logOut() {

    sessionStorage.removeItem("loggedInUser")
    window.location = "/index.html"
}