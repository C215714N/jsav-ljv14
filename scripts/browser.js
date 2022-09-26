const browserSize = document.querySelector('#browser-size button');
const browserChange = document.querySelector('#browser-size button:last-child')
const inputs = document.querySelectorAll('#browser-size input')
const sizes = ['innerWidth', 'innerHeight', 'outerWidth', 'outerHeight']

// Calcular las dimensiones del Navegador
browserSize.addEventListener('click', () => changeValues('formAssign'))

// Cambiar las dimensiones del Navegador
browserChange.addEventListener('click', () => changeValues()) 

function changeValues(type){
    inputs.forEach((input, i) => {
        if (type == 'formAssign'){
            input.value = window[sizes[i]]
        } 
        else {
            window[sizes[i]] = input.value
        }
    }   );
}