// parte inicio Sesion
const btnEndLogin = document.getElementById("btn-end");
const loginEmail = document.getElementById("login-email");
const loginPass = document.getElementById("login-pass");
const btnLoginForm = document.getElementById("form-login");
const mensajeLogin = document.getElementById("msj-login");
const btnLogin = document.getElementById("btn-login");
const contLogin = document.getElementById("cont-login");

const contForm = document.getElementById("cont-form-usuarios");
const contGeneral = document.getElementById("cont-general");

const apiUrlLogin = "http://localhost:3000/api/auth";

let usuarioRol = "";

function mostrarMensajeLogin(text, tipo = "success") {
    mensajeLogin.textContent = text;
    mensajeLogin.style.color = tipo === "success" ? "#21ae22" : "#f00";
}

function validarDatoLogin(email, contraseña) {
    return {
        email: email,
        contraseña: contraseña
    };
}

async function inicioSesion(datoLogin) {
    const { data } = await axios.post(apiUrlLogin, datoLogin);
    return data;
}




btnLoginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {

        const datosValidados = validarDatoLogin(loginEmail.value, loginPass.value);

        const respst = await inicioSesion(datosValidados);


        usuarioRol = respst.usuario.rol;

        if (usuarioRol === "Cliente") {
            contForm.style.display = "none"
        };

        if (usuarioRol !== "Cliente" || usuarioRol !== "Admin") {
            contGeneral.style.display = "none";
            const msjUsuarioDistinto = document.createElement("p");
            msjUsuarioDistinto.textContent = "Usted esta fuera de la lista";
            msjUsuarioDistinto.style.color = "#f00";
            document.body.appendChild(msjUsuarioDistinto);
            return;
        }


        await obtenerUsuarios();
        mostrarMensajeUsuario("Usuarios obtenidos correctamente", "success");

        contLogin.style.display = "none";

        mostrarMensajeLogin("login exitoso", "success");

    } catch (error) {

        const msgFinal = error.response?.data?.mensaje || error.message;
        mostrarMensajeLogin(msgFinal, "error");
    };
});

btnEndLogin.addEventListener("dblclick", (e) => {
    contLogin.style.display = "none";
})
// Usuario

const contFormUsuario = document.getElementById("cont-form-usuarios");

const inpNombre = document.getElementById("inp-nombre");
const inpEmail = document.getElementById("inp-email");
const inpPass = document.getElementById("inp-pass");
const inpRol = document.getElementById("inp-rol");
const btnAgregar = document.getElementById("form-usuarios");

const mensajeUsuario = document.getElementById("mensaje-usuario");
const contenido = document.getElementById("contenido");
const btnAgregarClick = document.getElementById("btn-agregar");

const apiUrlUsuario = "http://localhost:3000/api/usuarios";

let usuarioEditado = null;

function mostrarMensajeUsuario(text, tipo = "success") {
    mensajeUsuario.textContent = text;
    mensajeUsuario.style.color = tipo === "success" ? "#21ae22" : "#f00";
};

function validarCampos(nombre, email, contraseña, rol) {
    return {
        nombre: nombre.trim(),
        email: email.trim().toLowerCase(),
        contraseña: contraseña.trim(),
        rol: rol.trim()
    };
}

function actualizarForm() {
    btnAgregar.reset();
    usuarioEditado = null;
    btnAgregarClick.textContent = "Agregar usuario"
}

function renderizar(datos) {
    contenido.textContent = "";

    datos.forEach((d) => {
        const div = document.createElement("div");
        div.innerHTML = `<P class="p-cont"> Id: ${d.id} - Nombre: ${d.nombre} - Email: ${d.email} - Contraseña: ${d.contraseña} - Rol: ${d.rol}</P>`;
        div.classList.toggle("content-usuario");

        if (usuarioRol === "Admin") {
            const btnActualizar = document.createElement("button");
            btnActualizar.textContent = "Actualizar";
            btnActualizar.classList.toggle("btnActualizar");

            btnActualizar.addEventListener("click", () => mostrarFormUsuario(d));

            const btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Eliminar";
            btnEliminar.classList.toggle("btnEliminar");

            btnEliminar.addEventListener("click", async () => {
                const confirmar = confirm(`Seguro que quiere eliminar al usuario ${d.nombre}`);

                if (!confirmar) return;

                await eliminarUsuario(d.id)
            });

            div.appendChild(btnActualizar);
            div.appendChild(btnEliminar);
        }
        contenido.appendChild(div);
    });
};

function mostrarFormUsuario(datoUsuario) {
    usuarioEditado = datoUsuario.id;

    inpNombre.value = datoUsuario.nombre;
    inpEmail.value = datoUsuario.email;
    inpPass.value = datoUsuario.contraseña;
    inpRol.value = datoUsuario.rol;

    btnAgregarClick.textContent = "Actualizar Cliente";
    mostrarMensajeUsuario(`Usuario ${datoUsuario.nombre} fue actualizado exitosamente`, "success")
}

async function obtenerUsuarios() {
    try {
        const { data } = await axios.get(apiUrlUsuario, {
            headers: {
                "x-user-rol": usuarioRol
            }
        });

        renderizar(data.usuarios);

    } catch (error) {
        const msgFinal = error.response?.data?.mensaje || error.message;
        mostrarMensajeUsuario(msgFinal, "error");
    }
};

async function crearUsuario(datoUsuario) {
    const { data } = await axios.post(apiUrlUsuario, datoUsuario, {
        headers: {
            "x-user-rol": usuarioRol
        }
    });
    return data;
}

async function actualizarUsuario(id, datoUsuario) {
    const { data } = await axios.put(`${apiUrlUsuario}/${id}`, datoUsuario, {
        headers: {
            "x-user-rol": usuarioRol
        }
    });
    return data;
};

async function eliminarUsuario(id) {
    try {

        const { data } = await axios.delete(`${apiUrlUsuario}/${id}`, {
            headers: {
                "x-user-rol": usuarioRol
            }
        });

        mostrarMensajeUsuario("Se elimino correctamente al usuario", "success");

        await obtenerUsuarios();

    } catch (error) {
        mostrarMensajeUsuario(error.message, "error");
    };
};

btnAgregar.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {

        const datosValidados = validarCampos(inpNombre.value, inpEmail.value, inpPass.value, inpRol.value);
        if (usuarioEditado) {
            await actualizarUsuario(usuarioEditado, datosValidados);
            mostrarMensajeUsuario("El usuario fue actualizado correctamente", "success");
        } else {
            await crearUsuario(datosValidados);
            mostrarMensajeUsuario("Se creo usuario correctamente");
        }

        actualizarForm();

        await obtenerUsuarios();
        mostrarMensajeUsuario("Usuarios obtenidos correctamente", "success");

    } catch (error) {
        const msgFinal = error.response?.data?.mensaje || error.message;
        mostrarMensajeUsuario(msgFinal, "error");
    }
});

