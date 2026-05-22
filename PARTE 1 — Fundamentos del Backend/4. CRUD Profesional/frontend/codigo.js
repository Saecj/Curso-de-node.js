const contenido = document.getElementById("datos");
const mensaje = document.getElementById("mensaje");
const inpNombre = document.getElementById("inp-nombre");
const inpEmail = document.getElementById("inp-email");
const inpEdad = document.getElementById("inp-edad");
const register = document.getElementById("register");
const btnRegister = document.getElementById("btn-register");

const apiUrl = "http://localhost:3000/api/usuarios";

let usuarioEditandoId = null;

// =======================
// UTILIDADES
// =======================

function mostrarMensaje(texto, tipo = "success") {
    mensaje.textContent = texto;
    mensaje.style.color = tipo === "success" ? "#22ae21" : "#f00";
}

function limpiarMensaje() {
    mensaje.textContent = "";
}

function cambiarEstadoBoton(cargando, texto = "Registrarse") {
    btnRegister.disabled = cargando;
    btnRegister.textContent = cargando ? "Procesando..." : texto;
}

function obtenerMensajeError(error, mensajeDefault) {
    return error.response?.data?.mensaje || error.message || mensajeDefault;
}

// =======================
// VALIDACIONES
// =======================

function validarCampos(nombre, email, edad) {
    const nombreTrim = nombre.trim();
    const emailTrim = email.trim().toLowerCase();
    const edadTrim = edad.trim();

    if (!nombreTrim || !emailTrim || !edadTrim) {
        throw new Error("Los campos no pueden estar vacíos");
    }

    if (!emailTrim.includes("@") || !emailTrim.includes(".")) {
        throw new Error("Email inválido");
    }

    const numEdad = Number(edadTrim);

    if (Number.isNaN(numEdad)) {
        throw new Error("Para la edad solo se aceptan números");
    }

    if (numEdad <= 0) {
        throw new Error("No se permiten valores negativos o cero");
    }

    return {
        nombre: nombreTrim,
        email: emailTrim,
        edad: numEdad
    };
}

// =======================
// RENDER
// =======================

function renderizar(datos) {
    contenido.textContent = "";

    if (datos.length === 0) {
        contenido.textContent = "No hay usuarios registrados";
        return;
    }

    datos.forEach((usuario) => {
        const card = document.createElement("div");
        card.classList.add("cont");

        const info = document.createElement("p");
        info.classList.add("fondo");
        info.innerHTML = `<strong>Id:</strong> ${usuario.id} - <strong>Nombre:</strong> ${usuario.nombre} - <strong>Email</strong> ${usuario.email} - <strong>Edad:</strong> ${usuario.edad} - <strong>Fecha:</strong> ${usuario.fecha || "Sin fecha"}`;

        const btnActualizar = document.createElement("button");
        btnActualizar.textContent = "Actualizar";

        btnActualizar.addEventListener("click", () => {
            cargarUsuarioEnFormulario(usuario);
        });

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";

        btnEliminar.addEventListener("click", async () => {
            const confirmar = confirm(`¿Eliminar a ${usuario.nombre}?`);

            if (!confirmar) return;

            await eliminarUsuario(usuario.id);
        });

        card.appendChild(info);
        card.appendChild(btnActualizar);
        card.appendChild(btnEliminar);

        contenido.appendChild(card);
    });
}

function cargarUsuarioEnFormulario(usuario) {
    usuarioEditandoId = usuario.id;

    inpNombre.value = usuario.nombre;
    inpEmail.value = usuario.email;
    inpEdad.value = usuario.edad;

    btnRegister.textContent = "Actualizar usuario";
    mostrarMensaje(`Editando usuario: ${usuario.nombre}`, "success");
}

function limpiarFormulario() {
    register.reset();
    usuarioEditandoId = null;
    btnRegister.textContent = "Registrarse";
}

// =======================
// API CON AXIOS
// =======================

async function obtenerUsuarios() {
    try {
        const { data } = await axios.get(apiUrl);
        renderizar(data);

    } catch (error) {
        mostrarMensaje(
            obtenerMensajeError(error, "Error al buscar usuarios"),
            "error"
        );
    }
}

async function crearUsuario(usuario) {
    const { data } = await axios.post(apiUrl, usuario);
    return data;
}

async function actualizarUsuario(id, usuario) {
    const { data } = await axios.put(`${apiUrl}/${id}`, usuario);
    return data;
}

async function eliminarUsuario(id) {
    try {
        await axios.delete(`${apiUrl}/${id}`);

        mostrarMensaje("Usuario eliminado correctamente", "success");

        await obtenerUsuarios();

    } catch (error) {
        mostrarMensaje(
            obtenerMensajeError(error, "Error al eliminar usuario"),
            "error"
        );
    }
}

// =======================
// EVENTOS
// =======================

register.addEventListener("submit", async (e) => {
    e.preventDefault();
    limpiarMensaje();

    try {
        const usuarioValidado = validarCampos(
            inpNombre.value,
            inpEmail.value,
            inpEdad.value
        );

        cambiarEstadoBoton(true);

        if (usuarioEditandoId) {
            await actualizarUsuario(usuarioEditandoId, usuarioValidado);
            mostrarMensaje("Usuario actualizado correctamente", "success");
        } else {
            await crearUsuario(usuarioValidado);
            mostrarMensaje("Usuario creado correctamente", "success");
        }

        limpiarFormulario();
        await obtenerUsuarios();

    } catch (error) {
        mostrarMensaje(
            obtenerMensajeError(error, error.message),
            "error"
        );
    } finally {
        cambiarEstadoBoton(false, usuarioEditandoId ? "Actualizar usuario" : "Registrarse");
    }
});

// =======================
// INICIO
// =======================

obtenerUsuarios();