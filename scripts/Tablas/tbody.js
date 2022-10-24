export const renderCells = (rows) => {
    let data = '';
    for (let row of rows){
        let cell = ''
        let cells = Object.keys(row)
        for(let td of cells){
            typeof row[td] != 'object' ?
            cell += `<td>${ row[td]} </td>` : null
        }
        data += `
        <tr">${cell}
            <td><button class="btn btn-success">select</button></td>
        </tr>`
    }
    return data;
}