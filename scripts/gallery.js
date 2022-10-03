const d = document;
// Ejemplo Galeria Unica
const gallery = d.querySelectorAll('.gallery li');
const btnPrev = d.querySelector('#header .icon-prev');
const btnNext = d.querySelector('#header .icon-next');
// Funciones
const changeItem = (type, array, i) => {
    switch (type){
    case 'next':
        newItem = array[i + 1] || array[0];
    break;
    case 'prev':
        newItem = array[i - 1] || array[array.length - 1];
    break;
    }
}
const getItem = (array, type, className = 'active',) => {
    for(i = 0; i < array.length; i++){
        if (array[i].classList.contains(className)){
            array[i].classList.remove(className);
            changeItem(type, array, i);
        }
    }
    newItem.classList.add(className);
}
// Eventos
btnPrev.addEventListener( 'click', () => getItem(gallery,'prev'));
btnNext.addEventListener( 'click', () => getItem(gallery,'next'));
window.setInterval( () => btnNext.click(), 15000);
// Ejemplo Multiples Galerias

