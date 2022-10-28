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