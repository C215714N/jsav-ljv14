const d = document;;
const searchInput = d.querySelector('#searchInput');
const suggestion = d.querySelector('#suggestion');
const searchButton = d.querySelector('#searchButton');
const searchForm = d.querySelector('#searchForm');
const main = d.querySelector('main');

let links = [
    'users',
    'contact',
    'posts',
    'comments',
    'todos',
    'albums'
]


searchInput.addEventListener('input', (e) => {
    let term = e.target.value.toLowerCase();
    term.length >= 2 ?
    renderResults(term, links, suggestion) : null
} )

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    Array.from(e.target.elements).forEach(
        field => console.log(field)
    )
} )

function renderResults(word, array, tag){
    tag.innerHTML = ''
    array.forEach( r => {
        r = r.toLowerCase();
        if( r.startsWith(word) ){
            tag.innerHTML +=`<option value="${value}">${value}</option>`;
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
        data += `<td>${th}</td>`
    }
    return data
}
function renderCells(rows){
    let data = '';
    for (let row of rows){
        let cell = ''
        let cells = Object.keys(row)
        for(td of cells){
            cell += `<td>${
                row[td] != '[object Object]' ?  row[td] : '' }
            </td>`
        }
        data += `<tr>${cell}</tr>`
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
// main.innerHTML = renderTable();

async function getData(url) {
    try{
        let data = await fetch(url);
        data = await data.json();
        return data
    } catch(e){
        console.log(e)
    }
}

d.addEventListener('click', async(e) => {
    let el = e.target
    let url;
    if (el.classList.contains('remote')){
        url = 'https://jsonplaceholder.typicode.com'
        let data = await getData(`${url}/${el.id}`);
        main.innerHTML = renderTable(data)
    }
} )