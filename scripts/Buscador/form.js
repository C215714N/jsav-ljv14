import {
    url, 
    getData,
    notFound,
    searchInput,
    searchForm,
    main
} from "../constants.js";

import { renderGallery } from "../Galeria/gallery.js";
import { renderTable } from "../Tablas/table.js";

export const formEvent = () =>{
searchForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    let id = searchInput.value
    let data = await getData(`${url}/${id}`)
    main.innerHTML = (
        Object.keys(data).length == 0 ?
        notFound(data) :
        id == 'photos' || id == 'albums'?
        renderGallery(data) :
        renderTable(data)
    )
    if (id == 'photos' || id == 'albums'){
        main.classList.add('pictures')
        main.classList.remove('overflow')
    } else {
        main.classList.remove('pictures')
        main.classList.add('overflow')
    }
} ) }