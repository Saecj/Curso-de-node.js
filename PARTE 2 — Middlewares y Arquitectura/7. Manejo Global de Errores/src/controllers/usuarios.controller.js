import pool from "../config/db.js";
import { appError } from "../utils/appError.js";

export const obtenerUsuarios = async (req, res, next) => {
    try {

        const result = await pool.query("SELECT * FROM usuarios");

        if (result.rows.length === 0) {
            return next(
                new appError(
                    "Usuarios no registrados",
                    404
                )
            );
        }

        res.status(200).json({
            mensaje: "Usuarios mostrados con exito",
            usuarios: result.rows
        });

    } catch (error) {

        next(error)
    }
}

export const crearUsuario = async(req, res, next) => {
    try {
        
        let { nombre, email, contraseña, rol} = req.body;

        const emailDuplicado = await pool.query(
            `SELECT * FROM usuarios WHERE email = $1`, [email]
        );

        if (emailDuplicado.rows.length > 0 ) {
            return next(
                new appError(
                    "Email registrado",
                    409
                )
            );
        };

        const result = await pool.query(
            `INSERT INTO usuarios(nombre, email, contraseña, rol)
            VALUES($1, $2, $3, $4) RETURNING *`, [nombre, email, contraseña, rol]
        );

        res.status(201).json({
            mensaje: "Usuario creado con exito",
            usuario: result.rows[0]
        });

    } catch (error) {
        
        next(error);
    }
}

export const actualizarUsuario = async(req, res, next) => {
    try {
        
        const { id } = req.params;
        let {nombre, email, contraseña, rol} = req.body;

        const emailDuplicado = await pool.query("SELECT * FROM usuarios WHERE email = $1 and id != $2", [email, id]);

        if (emailDuplicado.rows.length > 0) {
            return next(
                new appError(
                    "Email ya registrado",
                    409
                )
            );
        };

        const result = await pool.query(
            `UPDATE usuarios
            SET nombre = $1, email = $2, contraseña = $3, rol = $4 
            WHERE id = $5 RETURNING *`, [nombre, email, contraseña, rol, id]
        );

        if (result.rows.length === 0) {
            return next(
                new appError(
                    "Usuario no encontrado",
                    404
                )
            );
        };

        res.status(200).json({
            mensaje: "Usuario actualizado correctamente",
            usuario: result.rows[0]
        });

    } catch (error) {

        next(error);

    }
};

export const eliminarUsuario = async(req, res, next) => {
    try {
        
        const { id } = req.params;

        const result = await pool.query(
            `DELETE FROM usuarios WHERE id = $1 RETURNING *`, [id]
        );

        if (result.rows.length === 0) {
            return next(
                new appError(
                    "Usuario no encontrado",
                    404
                )
            );
        };

        res.status(200).json({
            mensaje: "Usuario elimnado correctamente",
            usuario: result.rows[0]
        });

    } catch (error) {
        
        next(error);

    }
}