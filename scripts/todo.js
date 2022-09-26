const forms = document.querySelectorAll('form');
const toDoInput = document.querySelector('#todo_input');
const toDoButton = document.querySelector('#todo_button');
const toDoList = document.querySelector('.todo_list');

let toDoItems = document.querySelectorAll('.todo_list li');

// Evitamos la recarga del Navegador
forms.forEach( form => form.addEventListener( 'submit', 
    function (event) {
        event.preventDefault();
    }
)   )

// Habilita el boton para agregar la tarea
toDoInput.addEventListener('input', function () {
    if (this.value.length >= 5) {
        toDoButton.disabled = false;
    }
    else {
        toDoButton.disabled = true;
    }
}   );

// Agrega la tarea a lista si esta habilitado
toDoButton.addEventListener('click', function () {
    toDoList.innerHTML +=`<li>${toDoInput.value}</li>`
    toDoInput.value = '';
}   );

// Identificacion de elementos Hijo
toDoList.addEventListener('mouseover', function () {
    const items = this.querySelectorAll('li');
    items.forEach( (item, i) => {
        item.addEventListener('click', function () {
            item.classList.toggle('check')
            console.log(`presionaste el item ${i} que dice ${item.innerHTML}`)
    }   )  }
)   }   );