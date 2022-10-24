export const renderHead = (rows) => {
    let data = '';
    let theads = Object.keys(rows[0]);
    for (let th of theads){
        typeof rows[0][th] != 'object' ?
        data += `<td>${th}</td>` : ''
    }
    data+=`<td>Actions</td>`
    return data
}