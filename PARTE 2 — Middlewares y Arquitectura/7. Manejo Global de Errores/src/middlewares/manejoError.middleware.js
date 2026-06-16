export const manejoError = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    const mensaje = err.message || "Error en el servidor";

    res.status(statusCode).json({
        mensaje
    });

    next();
}