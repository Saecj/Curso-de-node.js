// Implementacion de los metodos CRUD

import pool from "../config/db.js"

export const obtenerUsuarios = async (req, res) => {
    
    try {
        
        const result = await pool.query(
        "SELECT * FROM usuarios"
    );

    res.json(result.rows);

    } catch (error) {
        
        console.log(error);

        res.status(500).json({
            mensaje: "Error"
        });
    }
};

export const crearUsuario = async (req, res) => {

    try {
        
        const result = await pool.query(
            `INSERT INTO usuario(nombre, email, edad) 
            VALUE($1, $2, $3)
            RETURNING *
            `,
            [nombre, email, edad]
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
        
        const result = await pool.query(
            `UPDATE usuarios
            SET nombre = $1
                edad = $2
            WHERE id = $4
            RETURNING *
            `,
            [nombre, email, edad, id]
        );
        
        if (result.rows.length === 0) {
            return req.status(404).json({
                mensaje: "Usuario no encontrado"
            });
        }

        res.json(result.rows[0]) ;

    } catch (error) {
        
        console.log(error);

        res.status(500).json({
            mensaje: "Error al actualizar usuario"
        });
    }
}

export const eliminarUsuario = async (req, res) => {

    try {
        
        const { id } = req.params;

        const result = await pool.query(
            `DELETE FROM usuarios
            WHERE id = $1
            RETURNING *
            `,
            [id]
        );

        if (result.rows.length === 0) {
            return res.satus(404).json({
                mensaje: "Usuario no encontrado"
            });
        }

    } catch (error) {
        
        console.log(error);

        res.status(500).json({
            mensaje: "Error al eliminar usuario"
        });
    }
}