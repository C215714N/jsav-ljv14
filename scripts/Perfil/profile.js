export const renderProfile = (user) => {
    let generic = "assets/will.png";
    let data = `<article id="user_${user.id}" class="card | col-xl-6 | mx-auto | text-light bg-secondary">
        <header class="card-header | row">
            <img class="col-md-3" src="${user.picture ? user.picture : generic}">
            <div class="col-md-6">
                <h2>${user.name}</h2>
                <p>${user.username}</p>
            </div>
        </header>
        <ul class="card-body row">
            <li class="col-md list-unstyled">
                <strong>Empresa</strong>
                <ul class="list-group-flush">
                    <li class="list-group-item">${user.company.name}</li>
                    <li class="list-group-item">${user.company.catchPhrase}</li>
                    <li class="list-group-item">${user.company.bs}</li>
                </ul>
            </li>
            <li class="col-md list-unstyled">
                <strong>Datos Personales</strong>
                <ul class="list-group-flush">
                    <li class="list-group-item">Calle: ${user.address.street}</li>
                    <li class="list-group-item">Ciudad: ${user.address.city}</li>
                    <li class="list-group-item">CP: ${user.address.zipcode}</li>
                </ul>
            </li>
        </ul>
        <footer class="card-footer">
            <ul class="list-group-flush">
                <li class="list-group-item"><strong>Telefono: </strong>${user.phone}</li>
                <li class="list-group-item active"><strong>Correo: </strong>${user.email}</li>
                <li class="list-group-item"><strong>Sitio Web: </strong>${user.website}</li>
            </ul>
        </footer>
    </article>`
    return data;
}