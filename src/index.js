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
        let keys = db.createObjectStore('students', { 
            keyPath: 'email'
        } );
        keys.transaction.oncomplete = (e) => {
            // Acceso para lectoescritura
            const access = db.transaction('students', 'readwrite')
            // Rectificacion de la tabla a modificar
            const students = access.objectStore('students');
            // Cargar los datos en la coleccion
            students.add({
                email: 'cristiandracedo@hotmail.com', 
                name: 'cristian'
            })
            // Leer los datos de un indice especifico
            students.get( 'cristiandracedo@hotmail.com')
        }
    }
}