"use strict";
import { 
    d,
    url,
    links,
    getData,
    searchInput,
    suggestion,
    main
} from "./constants.js"

import { renderResults } from "./Buscador/datalist.js";
import { renderTable } from "./Tablas/table.js";
import { getActions } from "./Tablas/actions.js";
import { renderProfile } from "./Perfil/profile.js";
import { Mode } from "./Modos/classMode.js";
import { ClientID } from "./Perfil/host.js";
import { formEvent } from "./Buscador/form.js";
// Inmediatly Invoked Function Expression
(
    function (){ 
    let myMode = new Mode;
    let connId = new ClientID;
    searchInput.addEventListener('input', (e) => {
        let term = e.target.value.toLowerCase();
        term.length >= 2 ?
        renderResults(term, links, suggestion) : null
    } )
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
        myMode.getMode();
        myMode.setMode("mode", myMode.mode == 'claro' ? 'oscuro' : 'claro');
        myMode.changeMode({
            target: '.mode',
            color: ['light', 'dark'],
            prop: ['text','bg','navbar']
        });
    }
} )
d.addEventListener('DOMContentLoaded', () => {
    myMode.getMode();        
    myMode.changeMode({
        target: '.mode',
        color: ['light', 'dark'],
        prop: ['text','bg','navbar', 'btn', 'link']
    });
})
formEvent();
console.log(`El id de la conexion es : ${connId.getID()}`);
})()