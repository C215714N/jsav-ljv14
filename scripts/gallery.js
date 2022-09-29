const d = document;

// Ejemplo Galeria Unica

const gallery = d.querySelectorAll('.gallery li');
const btnPrev = d.querySelector('#header .icon-prev');
const btnNext = d.querySelector('#header .icon-next');

// Eventos
btnPrev.addEventListener( 'click', () => getItem(gallery,'prev')

);

btnNext.addEventListener( 'click', () => getItem(gallery,'next'));

// Funciones
function getItem(array, type, className = 'active',) {
    for(i = 0; i < array.length; i++){
        if (array[i].classList.contains(className)){
            array[i].classList.remove(className);
            changeItem(type, array, i);
        }
    }
    newItem.classList.add(className);
}

function changeItem(type, array, i) {
    switch (type){
    case 'next':
        newItem = array[i + 1];
    break;
    case 'prev':
        newItem = array[i - 1];
    break;
    }
    return
}

// Ejemplo Multiples Galerias