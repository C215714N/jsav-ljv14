"use strict";
import { 
    d,
    searchInput,
    suggestion,
    searchButton,
    searchForm,
    main
} from "./constants.js"

// Inmediatly Invoked Function Expression
(
    function (){ 

searchInput.addEventListener('input', (e) => {
    let term = e.target.value.toLowerCase();
    term.length >= 2 ?
    renderResults(term, links, suggestion) : null
} )

searchForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    let url = 'https://jsonplaceholder.typicode.com'
    let id = searchInput.value
    let data = await getData(`${url}/${id}`)
    console.log(Object.keys(data).length == 0)
    main.innerHTML = (
        Object.keys(data).length == 0 ?
        notFound(data) :
        id == 'photos' || id == 'albums' ?
        renderGallery(data) :
        renderTable(data)
    )
    main.classList.add('pictures');
} )

function renderResults(word, array, tag){
    tag.innerHTML = ''
    array.forEach( r => {
        r = r.toLowerCase();
        if( r.startsWith(word) ){
            tag.innerHTML +=`<option value="${r}">${r}</option>`;
        }        
    } ) ;
}
function renderTable(rows){
    return `
        <table class="table table-striped table-dark">
            <thead>
                <tr>
                    ${renderHead(rows)}
                </tr>
            </thead>
            <tbody>
                ${renderCells(rows)}
            </tbody>
        </table>`
}
function renderHead(rows){
    let data = '';
    let theads = Object.keys(rows[0]);
    for (let th of theads){
        typeof rows[0][th] != 'object' ?
        data += `<td>${th}</td>` : ''
    }
    data+=`<td>Actions</td>`
    return data
}
function renderCells(rows){
    let data = '';
    for (let row of rows){
        let cell = ''
        let cells = Object.keys(row)
        for(let td of cells){
            typeof row[td] != 'object' ?
            cell += `<td>${ row[td]} </td>` : null
        }
        data += `
        <tr">${cell}
            <td><button class="btn btn-success">select</button></td>
        </tr>`
    }
    return data;
}
function notFound(error){
    let data = ''
    data = `
        <article>
            <h2>ERROR 404</h2>
            <p>
                Lo sentimos pero no encontramos la pagina, pero podes continuar la navegacion regresando al menu principal, desde el siguiente 
                <a href="#">link</a>
            </p>
            <p>
                aqui se detalla una breve descripcion del mismo ${error}
            </p>
        <article>
    `
    return  data;
}
function renderGallery(images){
    let data = '';
    for (let img of images){
        data +=`
        <figure class="card text-light bg-dark">
        <img class="card-header"
            src="${img.thumbnailUrl}" 
            alt="${img.title}"/>
        <figcaption class="card-footer">${img.title}</figcaption>
        </figure>`
    }
    return data
}
function getActions(){
    let buttons = d.querySelectorAll('.btn-success');
    buttons.forEach(btn => btn.addEventListener('click', (e) => {
        let userId = e.target.parentNode.parentNode.firstElementChild.innerText
        window.sessionStorage.setItem("userId",userId.trim());
    } ) )
}
async function getData(url) {
    try{
        let data = await fetch(url);
        data = await data.json();
        return data
    } catch(e){
        console.log(e)
    }
}
function renderProfile(user){
    let generic = "assets/will.png";
    let data = `<article id="user_${user.id}" class="card | col-xl-6 | mx-auto | text-light bg-secondary">
        <header class="card-header | row">
            <img class="col-md-3" src="${user.picture ? user.picture : generic}">
            <div class="col-md-6">
                <h2>${user.name}</h2>
                <p>${user.username}</p>
            </div>
        </header>
        <ul class="card-body row">
            <li class="col-md list-unstyled">
                <strong>Empresa</strong>
                <ul class="list-group-flush">
                    <li class="list-group-item">${user.company.name}</li>
                    <li class="list-group-item">${user.company.catchPhrase}</li>
                    <li class="list-group-item">${user.company.bs}</li>
                </ul>
            </li>
            <li class="col-md list-unstyled">
                <strong>Datos Personales</strong>
                <ul class="list-group-flush">
                    <li class="list-group-item">Calle: ${user.address.street}</li>
                    <li class="list-group-item">Ciudad: ${user.address.city}</li>
                    <li class="list-group-item">CP: ${user.address.zipcode}</li>
                </ul>
            </li>
        </ul>
        <footer class="card-footer">
            <ul class="list-group-flush">
                <li class="list-group-item"><strong>Telefono: </strong>${user.phone}</li>
                <li class="list-group-item active"><strong>Correo: </strong>${user.email}</li>
                <li class="list-group-item"><strong>Sitio Web: </strong>${user.website}</li>
            </ul>
        </footer>
    </article>`
    return data;
}

d.addEventListener('click', async(e) => {
    let el = e.target
    let url;
    if (el.classList.contains('remote')){
        url = 'https://jsonplaceholder.typicode.com'
        let data = await getData(`${url}/${el.id}`);
        console.log(data[0])
        main.innerHTML = renderTable(data)
        getActions();
    }
    if(el.id == 'profile'){
        if (sessionStorage.getItem("userId") ) {
            let userId = sessionStorage.getItem('userId');
            let url = 'https://jsonplaceholder.typicode.com';
            let data = await getData(`${url}/users/${userId}`)
            main.innerHTML = renderProfile(data)
        }
        
    }
} )
})()