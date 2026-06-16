import { appError } from "../utils/appError";

export const validarCampos = (req, res, next) => { 
    const { nombre, email, contraseña, rol} = req.body;

    if (!nombre || !email || !contraseña || !rol) {
        return next(
            new appError(
                "Todos los campos son obligatorio",
                400
            )
        );
    };

    nombre = nombre.trim();
    email = email.trim().toLowerCase();
    contraseña = contraseña.trim();
    rol = rol.trim();

    if (!email.includes("@") || !email.includes(".")) {
        return next(
            new appError(
                "Email invalido",
                400
            )
        );
    }

    req.body.nombre = nombre;
    req.body.email = email;
    req.body.contraseña = contraseña;
    req.body.rol = rol;

    next();
}