export const validarCampos = async(req, res, next) => {
    const {nombre, email, contraseña, rol} = req.body;

    if (!nombre, !email, !contraseña, !rol) {
        return res.status(400).json({
            mensaje: "Todos los campos son obligatorio"
        });
    };

    req.body.nombre = nombre.trim();
    req.body.email = email.trim().toLowerCase();
    req.body.contraseña = contraseña.trim();
    req.body.rol = rol.trim();

    const emailLimpio = req.body.email;

    if (!emailLimpio.includes("@") || !emailLimpio.includes(".")) {
        return res.status(400).json({
            mensaje: "Email invalido"
        });
    };

    next();
}