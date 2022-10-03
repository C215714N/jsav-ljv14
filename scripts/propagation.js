li = d.querySelectorAll('#propagation li');

/**  
 * Bubbling: La captura de eventos se hace desde el objetivo hasta la raiz
 * Capturing: La captura de eventos se hace desde la raiz hacia el objetivo
 * 
 * */
li.forEach( l => l.addEventListener(
    'click', (e) =>{ 
    // Previente que los otros elementos Padre devuelvan una respuesta
        e.stopPropagation();
    // Contenido de la etiquetas
        console.log(e.target.innerHTML)
    // Etiqueta padre del contenido
        console.log(e.target.parentNode)
    // Etiqueta anterior o Primera Etiqueta Hijo del Padre
        console.log(
            e.target.previousElementSibling || 
            e.target.parentNode.firstElementChild)
    // Etiqueta siguiente o Ultima Etiqueta Hijo del Padre
        console.log(
            e.target.nextElementSibling || 
            e.target.parentNode.lastElementChild 
        )
}   )   )