const d = document;
const w = window;
const main = d.querySelector('main');

d.addEventListener( 'click', (e) => {
    let tag = e.target;
    let link = tag.href.split('#')[1];
    if (tag.tagName === 'A') { 
        // Funcion derenderizado
        render(link, main)
    }
} )

w.addEventListener('hashchange', (e) => {
    let window = e.target.location;
    let link = window.href.split('#')[1];
    // Funcion de renderizado
    render(link, main)
})

function AJAX(element, url, m = 'get'){
    // Instancia de la Clase
    let xhr = new XMLHttpRequest();
    // Consulta de Datos
    xhr.open(m, url)
    // Envio y procesamiento
    xhr.send();
    // ejecucion cuando se resuelva
    xhr.addEventListener('load', () => {
        if (xhr.status == 200){
            // Renderizado en la pagina
            element.innerHTML = xhr.response;
        }
        else if(xhr.status == 404){
            // En caso de error
            AJAX(main,'router/404.html')
        }
    }   )
}

function render (link, element) {
    if ( 
        link.length > 1 && // Largo mayor 1
        link.toLowerCase() != 'home' // debe ser distinto a home
    ) {
        AJAX(element, `router/${link}.html`);
    }
}