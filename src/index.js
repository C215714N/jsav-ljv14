if (indexedDB){
    let request = indexedDB.open('EducacionIT', 1);
    // No se pudo establecer conexion con la DB
    request.onerror = (e) => {
        console.log('Ha ocurrido un error: ', e)
    }
    // Se establecio la conexion con la DB
    request.onsuccess = (e) => {
        console.log("Operacion Finalizada: ", e.target.result)
    }
    // Se realizaron las modificaciones en la DB
    request.onupgradeneeded = (e) => {
        console.log("Cambios realizados: ", e.target.result)
        let db = e.target.result;
        // Creacion de Tabla (Objeto) y clave principal (Indice)
        db.createObjectStore('students', { 
            keyPath: 'email'
        } );
    }
}