function message(text){
    console.log(text)
    console.log('funcion message');
}

let myMessage = function(text, callback){
    console.log(text)
    console.log('funcion myMessage');
    setTimeout( () => callback(text), 5000)
}

const newMessage = (text) => {
    console.log(text)
    console.log('funcion newMessage');
}

// Orden de ejecucion
setTimeout(() => message('primera'), 3000 )
myMessage('segunda', message);
newMessage('ultima');