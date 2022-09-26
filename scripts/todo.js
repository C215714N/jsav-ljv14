const toDoInput = document.querySelector('#todo_input');
const toDoButton = document.querySelector('#todo_button');
const toDoList = document.querySelector('.todo_list');

toDoInput.addEventListener('input', function () {
    if (this.value.length >= 5) {
        toDoButton.disabled = false;
    }
    else {
        toDoButton.disabled = true;
    }
}   );

toDoButton.addEventListener('click', function () {
    toDoList.innerHTML +=`<li>${toDoInput.value}</li>`
}   );
