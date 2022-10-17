// Objeto que recibe 2 funciones como parametros
let promise = new Promise( (resolve, reject) => 
setTimeout( () => { 
    let data = Math.random() * 10
    if (data >= 5){
        resolve(`la repuesta fue exitosa y fue ${data}`)
    } else{
        reject(`no se ha cumplido la promesa debido a que fue ${data}`)
    }
} , 3000)
)
console.log(promise);
promise
    // Que sucede con el resultado una vez obtenido
    .then( resultado => console.log(resultado))
    // Que sucede en caso que no se cumpla 
    .catch( inconveniente => console.log(inconveniente))
    // Que sucede cuando finalizaron todas las acciones
    .finally( termino => console.log(`promesa finalizada`))

// API Fetch (Consultas HTTP)
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// Funciones Asincronas
async function fetchAPI(url){
    try{
        let results = await fetch(`${url}users`) // 1 - Espero la respuesta del servidor
        setTimeout( async() => { // 2 Tarda en llegar la respuesta y continua el codigo
            results = await results.json() // 4 Espero a que termine de parsear el string JSON
            console.log(results) // 5 Cuando se resuelva results muestra el resultado
        }, 1500)
        console.log(results) // 3 Continua con la respuesta de results
        /* no se puede resolver */
        let posts = await fetch(`${url}posts?userId=${ results[0] ? results[0].id : 1}`); //4 Al no saber cuales son los resultados, no se puede utilizar el parametro
        posts = await posts.json() // 5 No se puede convertir algo undefined
        console.log(posts); // 6 Imprime algo
    } catch( error){ 
        console.log(error) // finalmente captura error
    }
}
fetchAPI('https://jsonplaceholder.typicode.com/')