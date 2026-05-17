const contenido = document.getElementById("contenido");

function renderizar(datos){
    contenido.textContent = "";

    datos.forEach((d)=>{
        const p = document.createElement("p");
        p.textContent = `ID: ${d.id} - Nombre: ${d.nombre} - Email: ${d.email} - Edad: ${d.edad}`;

        contenido.appendChild(p);
    });
}

async function obtenerUsuario() {

    try {
        const { data } = await axios.get("http://localhost:3000/api/usuarios");
        console.log(data)

    } catch (error) {
        
        console.error("Error al obtener el usuario")
    }
}

obtenerUsuario();