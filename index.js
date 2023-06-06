let toDo = document.querySelector(".to-do")
let add = document.querySelector(".add-button")
let list = document.querySelector(".to-do-list")
let toDoList = [];
let html;

function fillList(item, array) {
    array.push(item)
    let listHtml = ""; /*Note: this resets the list, so everytime the function is called, the list gets reset and a new list is built from scratch */
    for (let i = 0; i < array.length; i++) {
        let content = array[i]
        html = `<p>${content}</p>`
        listHtml = listHtml + html
    }
    list.innerHTML = listHtml
    toDo.value = ""
    console.log(listHtml)
}

add.addEventListener("click", function () {
    fillList(toDo.value, toDoList)
})

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        fillList(toDo.value, toDoList)
    } else {

    }
})
