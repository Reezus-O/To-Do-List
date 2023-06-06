let toDo = document.querySelector(".to-do");
let add = document.querySelector(".add-btn");
let list = document.querySelector(".to-do-list");
let date = document.querySelector(".to-do-date");
let deleteBtn = document.querySelector(".delete-btn");
let toDoList = [];
let html;

function renderList(array) {
    let listHtml = "";
    for (let i = 0; i < array.length; i++) {
        let { itemName, itemDate } = array[i];
        html = `<p class="to-do-items">${itemName}</p>
            <p class="to-do-items">${itemDate}</p>
            <button class="delete-btn" onclick="deleteItem(${i})">Delete</button>`;
        listHtml += html;
    }
    list.innerHTML = listHtml;
}

function deleteItem(index) {
    toDoList.splice(index, 1);
    renderList(toDoList);
}

function fillList(itemName, itemDate) {
    let toDoObject = {
        itemName,
        itemDate,
    };
    toDoList.push(toDoObject);
    renderList(toDoList);
    toDo.value = "";
    date.value = "";
    console.log(toDoList);
}

add.addEventListener("click", function () {
    fillList(toDo.value, date.value);
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        fillList(toDo.value, date.value);
    }
});
