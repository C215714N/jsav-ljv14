export const d = document,
    modeOption = d.querySelector('#mode'),
    searchInput = d.querySelector('#searchInput'),
    suggestion = d.querySelector('#suggestion'),
    searchButton = d.querySelector('#searchButton'),
    searchForm = d.querySelector('#searchForm'),
    main = d.querySelector('main'),
    url = 'https://jsonplaceholder.typicode.com',
    links = [
        'users',
        'contact',
        'posts',
        'comments',
        'todos',
        'albums'
    ];

export const getData = async (url) =>{
    try{
        let data = await fetch(url);
        data = await data.json();
        return data
    } catch(e){
        console.log(e)
    }
}

export function notFound(error){
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