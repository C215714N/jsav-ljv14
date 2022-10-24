"use strict";
import { 
    d,
    url,
    getData,
    searchInput,
    suggestion,
    searchForm,
    main
} from "./constants.js"

import { renderResults } from "./Buscador/datalist.js";
import { renderTable } from "./Tablas/table.js";
import { getActions } from "./Tablas/actions.js";
import { renderGallery } from "./Galeria/gallery.js";
import { renderProfile } from "./Perfil/profile.js";
import {setMode} from "./Modos/mode.js";
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

d.addEventListener('click', async(e) => {
    let el = e.target
    if (el.classList.contains('remote')){
        let data = await getData(`${url}/${el.id}`);
        console.log(data[0])
        main.innerHTML = renderTable(data)
        getActions();
    }
    if(el.id == 'profile'){
        if (sessionStorage.getItem("userId") ) {
            let userId = sessionStorage.getItem('userId');
            let data = await getData(`${url}/users/${userId}`)
            main.innerHTML = renderProfile(data)
        }
    }
    if(el.id == 'mode'){
        let mode = localStorage.getItem("mode");
        setMode("mode", mode === 'true' ? 'false' : 'true');
    }
} )
})()