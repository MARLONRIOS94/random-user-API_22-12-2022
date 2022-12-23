console.log ('Random User API')

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
});

const fetchData = async () => {

    try {
        const resp = await fetch('https://randomuser.me/api/');
        const {results} = await resp.json();
        const data = results[0];
        console.log(data);

        const randomuser = {
        img:data.picture.large,
        nombre:data.name.first,
        apellido:data.name.last,
        correo:data.email,
        direccion:data.location.street.name,
        ciudad:data.location.city,
        estado:data.location.state,
        pais:data.location.country,
        telefono:data.cell,
        }

        pintarcard(randomuser)
    } catch (error) {
        console.log(error);
        
    }
        
}


const pintarcard = (randomuser) => {

    const img = document.querySelector('.img-user').setAttribute('src', randomuser.img);
    const nombre = document.querySelector('.name-user').textContent = randomuser.nombre + ' ' + randomuser.apellido;
    const correo =  document.querySelector('.email').textContent = randomuser.correo;
    const direccion = document.querySelector('.address').textContent = randomuser.direccion + ' - ' + randomuser.ciudad;
    const cuidad = document.querySelector('.state').textContent = randomuser.estado;
    const estado = document.querySelector('.country').textContent = randomuser.pais;
    const telefono = document.querySelector('.phone-number').textContent = randomuser.telefono;

}
