export const loginCampo = async(req, res, next) => {
    let { email, contraseña} = req.body;

    if (!email.trim() || !contraseña.trim()) {
        return res.status(400).json({
            mensaje: "Todos los campos son obligatorios"
        });
    };

    req.body.email = email.trim().toLowerCase();
    req.body.contraseña = contraseña.trim();

    next();
}