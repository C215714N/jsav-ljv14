const d = document;
const w = window;
const backend = 'https://jsonplaceholder.typicode.com';
const main = d.querySelector('main');
const posts = d.querySelector('#posts')

d.addEventListener( 'click', (e) => {
    e.stopPropagation();
    let tag = e.target;
    let link = tag.tagName === 'A' ? tag.href.split('#')[1] : '';
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

function AJAX(req){
    // State 0
    let xhr = new XMLHttpRequest();
    xhr.responseType = req.type;
    // State 1
    xhr.open(req.method, req.url)
    // State 2 - 3
    xhr.send();
    // State 4
    xhr.addEventListener('load', () => {
        let data;
        if (xhr.readyState == 4){
            console.log(xhr.response)

            req.type == 'blob' ? 
            data = URL.createObjectURL(xhr.response) :
            data = xhr.response

            xhr.status == 200 ? 
            req.callback(data) : 
            AJAX( {
                method: 'get',
                url: 'router/404.html',
                callback: (e) => console.log(e)
            } )
        }
    } )
    xhr.addEventListener('progress', (e) => {
        if (e.lengthComputable){
            insert(`<h2>${e.loaded}/${e.total}</h2>`, main)
        }
    })   
}

function render (link, element) {
    if ( 
        link.length > 1 && // Largo mayor 1
        link.toLowerCase() != 'home' // debe ser distinto a home
    ) {
        AJAX({
            method: 'get',
            url: `router/${link}.html`,
            type: 'text',
            callback: (e) => insert(e, element),
        } );
    }
}

function insert(response, element){
    element.innerHTML = response
}

// Callback HELL | Pyramid of DOOM
function getUsers(){
    AJAX({
        method: 'get',
        url: `${backend}/users`,
        type: 'json',
        callback: (response) => getUsuario(response)
    })
}
function getUsuario(user){
    AJAX({
        method: 'get',
        url: `${backend}/posts?userId=${user[0].id}`,
        type: 'json',
        callback: (response) => Array.from(response).forEach( post => getPublicaciones(post) )
    } )
}
function getPublicaciones(post){
    AJAX({
        method: 'get',
        url: `${backend}/comments?postId=${post['id']}`,
        type: 'json',
        callback: (response) => Array.from(response).forEach( comment => 
            getComentarios(comment))
    })
}
function getComentarios(element){
    let article = document.createElement('article')
    Object.assign(article, {
        id: element.id,
        className: 'post',
        target: element.postId,
        innerHTML: 
            `<h2>${element.name}</h2>
            <p>${element.body}</p>
            <address>
                email: <a href="${element.email}">${element.email}</a>
                en respuesta a la publicacion ${element.postId}
            </address>`
    })
    posts.appendChild(article);
}

function wetSand(){
    AJAX({
        method: 'get',
        url: 'assets/wet-sand.webm',
        type: 'blob',
        callback: (e) => {
            console.log(e)
        }
    })
}