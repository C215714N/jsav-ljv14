let buttons = d.querySelectorAll('#XHR button')
let article = d.querySelector('#result');

buttons.forEach( btn => {
    btn.addEventListener( 'click', (e) =>{
        // Instancia de la Clase
        let xhr = new XMLHttpRequest();
        // Carga de la Solicitud
        xhr.open('get',`docs/${e.target.id}.txt`)
        // Envio de la Solicitud
        xhr.send();
        // Manipulacion del DOM
        xhr.addEventListener('readystatechange', () => {
            article.innerHTML = xhr.response;
        })
    })
});