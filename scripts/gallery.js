const d = document;

// Ejemplo Galeria Unica

const gallery = d.querySelectorAll('.gallery li');
const btnPrev = d.querySelector('#header .icon-prev');
const btnNext = d.querySelector('#header .icon-next');

// Eventos
btnPrev.addEventListener( 'click', () => changeItem('prev', gallery));

btnNext.addEventListener( 'click', () => changeItem('next', gallery));

// Funciones
function getItem(array, className = 'active') {
    for(i = 0; i < array.length; i++){
        if (array[i].classList.contains(className)){
            array[i].classList.remove(className);
            return i
}   }   }

function changeItem(type, array) {
    let newItem;
    let i = getItem(array)
    switch (type){
    case 'next':
        newItem = (
            i < array.length - 1 ? 
            array[i + 1]:
            array[0]
        )
    break;
    case 'prev':
        newItem = (
            i > 0 ? 
            array[i - 1]:
            array[array.length - 1]
        )
    break;
    }
    newItem.classList.add('active')
}

// Ejemplo Multiples Galerias