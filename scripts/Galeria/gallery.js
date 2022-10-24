export const renderGallery = (images) => {
    let data = '';
    for (let img of images){
        data +=`
        <figure class="card text-light bg-dark">
        <img class="card-header"
            src="${img.thumbnailUrl}" 
            alt="${img.title}"/>
        <figcaption class="card-footer">${img.title}</figcaption>
        </figure>`
    }
    return data
}