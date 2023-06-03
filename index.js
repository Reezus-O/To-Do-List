let toDo = document.querySelector(".to-do")
let add = document.querySelector(".add-button")
let toDoList = [];

function fillList(item, array) {
    array.push(item)
    console.log(array)
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
