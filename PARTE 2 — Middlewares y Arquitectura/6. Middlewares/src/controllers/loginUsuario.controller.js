import pool from "../config/db.js";

export const inicioSesion = async(req, res) => {
    try {
        
        let { email, contraseña} = req.body;

        const result = await pool.query(
            `SELECT * FROM usuarios WHERE email = $1`, [email]
        );

        if (result.rows.length === 0) {
            return res.status(401).json({
                mensaje: "Email no encontrado"
            });
        };

        const usuario = result.rows[0];

        if (usuario.contraseña !== contraseña) {
            return res.status(401).json({
                mensaje: "Contraseña incorrecta"
            });
        };

        res.status(200).json({
            mensaje: "login exitoso",
            usuario: {
                id: usuario.id,
                email: usuario.email,
                contraseña: usuario.contraseña,
                rol: usuario.rol
            }
        });

    } catch (error) {
        
        console.log(error);

        res.status(500).json({
            mensaje: "Error al intentar loguear"
        });
    }
};