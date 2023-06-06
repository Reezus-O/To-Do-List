let toDo = document.querySelector(".to-do")
let add = document.querySelector(".add-btn")
let list = document.querySelector(".to-do-list")
let date = document.querySelector(".to-do-date")
let deleteBtn = document.querySelector(".delete-btn")
let toDoList = [];
let html;

function fillList(itemName, itemDate, array) {
    let toDoObject = {
        itemName,
        itemDate
    }
    array.push(toDoObject)
    let listHtml = ""; /*Note: this resets the list, so everytime the function is called, the list gets reset and a new list is built from scratch */
    for (let i = 0; i < array.length; i++) {
        let { itemName, itemDate } = toDoObject
        html = `<p class="to-do-items">${itemName}</p>
        <p class="to-do-items">${itemDate}</p>
        <button class="delete-btn" 
        onclick="fillList(${itemName}, ${itemDate}, toDoList.splice(${i}, 1))"
        >Delete</button>`
        listHtml = listHtml + html
    }
    list.innerHTML = listHtml
    toDo.value = ""
    date.value = ""
    console.log(listHtml)
}

add.addEventListener("click", function () {
    fillList(toDo.value, date.value, toDoList)
})

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        fillList(toDo.value, date.value, toDoList)
    } else {

    }
})