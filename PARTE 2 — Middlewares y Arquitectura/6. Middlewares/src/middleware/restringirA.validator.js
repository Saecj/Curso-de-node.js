export const restringirA = (...rolesPermitidos) => {
    return (req, res, next) => {

        const rolUsuario = req.headers["x-user-rol"]

        if (!rolesPermitidos.includes(rolUsuario)) {
            return res.status(403).json({
                mensaje: "No tienes permisos para acceder a este recurso"
            });
        }
        next();

    }

}