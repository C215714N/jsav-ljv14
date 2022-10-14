const d = document;
const w = window;
const main = d.querySelector('main');
const posts = d.querySelector('#posts')

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

function AJAX(req){
    // State 0
    let xhr = new XMLHttpRequest();
    // State 1
    xhr.open(req.method, req.url)
    // State 2 - 3
    xhr.send();
    // State 4
    xhr.addEventListener('load', () => {
        if (xhr.readyState == 4){
        xhr.status == 200 ? 
        req.callback(JSON.parse(xhr.response)) : 
        AJAX( {
            method: 'get',
            url: 'router/404.html',
            callback: (e) => console.log(e)
        } )
        }
    } )
}

function render (link, element) {
    if ( 
        link.length > 1 && // Largo mayor 1
        link.toLowerCase() != 'home' // debe ser distinto a home
    ) {
        AJAX({
            method: 'get',
            url: `router/${link}.html`,
            callback: (e) => insert(e, element),
        });
    }
}

function insert(response, element){
    element.innerHTML = response
}

// Callback HELL
let backend = 'https://jsonplaceholder.typicode.com';

AJAX({
    method: 'get',
    url: `${backend}/users`,
    callback: (e) => AJAX({
        method: 'get',
        url: `${backend}/posts?userId=${e[0].id}`,
        callback: (e) => e.forEach( post => AJAX({
            method: 'get',
            url: `${backend}/comments?postId=${post['id']}`,
            callback: (e) => e.forEach( post => {
                let article = document.createElement('article')
                article.id = post.id;
                article.setAttribute('target', post.postId);
                article.className = 'post';
                article.innerHTML = `
                <h2>${post.name}</h2>
                <p>${post.body}</p>
                <address>
                    email: <a href="${post.email}">${post.email}</a>
                    en respuesta a la publicacion ${post.postId}
                </address>`
                posts.appendChild(article);
            })
        })
        )
    })
})