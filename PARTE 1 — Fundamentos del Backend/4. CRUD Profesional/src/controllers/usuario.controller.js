// Error 500: Cuando ocurre un error interno del servidor
// Error 404: El recurso solicitado no existe

import pool from "../config/db.js";

export const obtenerUsuarios = async (req, res) => {

    try {
        
        const result = await pool.query("SELECT * FROM usuarios");

        res.json(result.rows)

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error"
        });
    }
}

export const crearUsuario = async (req, res) => {

    try {

        const { nombre, email, edad} = req.body;
        
        const result = await pool.query(
            `INSERT INTO usuarios(nombre, email, edad)
            VALUES ($1, $2, $3) RETURNING *`, [nombre, email, edad]
        );

        res.json(result.rows[0]);

    } catch (error) {
        

        console.log(error);

        res.status(500).json({
            mensaje: "Error"
        });
    }
};

export const actualizarUsuario = async (req, res) => {

    try {
        
        const { id } = req.params; // req.params: Se usa para capturar valores que viajan directamente incrustados en la barra de direccion. Ejemplo: En router: router.put("/usuarios/:id", actualizarUsuario).
        const {nombre, email, edad} = req.body; // req.body: Se usa para para enviar paquetes de datos grandes o delicados de forma oculta dentro del protocolo HTTP

        const result = await pool.query(
            `UPDATE usuarios
            SET nombre = $1,
            email = $2,
            edad = $3
            WHERE id = $4 RETURNING *`, [nombre, email, edad, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            });
        }

        res.json(result.rows[0]);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error al actualizar usuario"
        });
    }
}

export const eliminarUsuario = async (req, res) => {

    try {
        
        const { id } = req.params; // req.params: Se usa para capturar valores que viajan directamente incrustados en la barra de direccion.

        const result = await pool.query(
            `DELETE FROM usuarios
            WHERE id = $1 RETURNING *`, [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            });
        }

        res.json({
            mensaje: "Error al eliminar usuario",
            usuario: result.rows[0]
        });

    } catch (error) {
        

        console.log(error);

        res.status(500).json({
            mensaje: "Error al eliminar usuario"
        });
    }
}