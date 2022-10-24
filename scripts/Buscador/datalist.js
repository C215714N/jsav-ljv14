export const renderResults = (word, array, tag) => {
    tag.innerHTML = ''
    array.forEach( result => {
        result = result.toLowerCase();
        if( result.startsWith(word) ){
            tag.innerHTML +=`<option value="${result}">${result}</option>`;
        }        
    } ) ;
}