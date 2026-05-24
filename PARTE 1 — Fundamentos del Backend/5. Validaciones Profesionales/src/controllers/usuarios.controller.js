import pool from "../config/db.js";

// ======================
// OBTENER USUARIOS
// ======================

export const obtenerUsuarios = async (req, res) => {

    try {

        const result = await pool.query(
            "SELECT * FROM usuarios ORDER BY id ASC"
        );

        res.status(200).json(result.rows);

    } catch (error) {

        console.error("Error obteniendo usuarios:", error.message);

        res.status(500).json({
            mensaje: "Error interno del servidor"
        });
    }
};

// ======================
// CREAR USUARIO
// ======================

export const crearUsuario = async (req, res) => {

    try {

        let { nombre, email, edad } = req.body;

        // ======================
        // VALIDACIONES
        // ======================

        if (!nombre || !email || !edad) {
            return res.status(400).json({
                mensaje: "Todos los campos son obligatorios"
            });
        }

        nombre = nombre.trim();
        email = email.trim().toLowerCase();
        edad = Number(edad);

        if (!email.includes("@") || !email.includes(".")) {
            return res.status(400).json({
                mensaje: "Email inválido"
            });
        }

        if (Number.isNaN(edad)) {
            return res.status(400).json({
                mensaje: "La edad debe ser numérica"
            });
        }

        if (edad <= 0) {
            return res.status(400).json({
                mensaje: "Edad inválida"
            });
        }

        // ======================
        // VALIDAR EMAIL DUPLICADO
        // ======================

        const emailExistente = await pool.query(
            `
            SELECT * FROM usuarios
            WHERE email = $1
            `,
            [email]
        );

        if (emailExistente.rows.length > 0) {
            return res.status(409).json({
                mensaje: "El email ya está registrado"
            });
        }

        // ======================
        // QUERY
        // ======================

        const result = await pool.query(
            `
            INSERT INTO usuarios(nombre, email, edad)
            VALUES($1, $2, $3)
            RETURNING *
            `,
            [nombre, email, edad]
        );

        res.status(201).json({
            mensaje: "Usuario creado correctamente",
            usuario: result.rows[0]
        });

    } catch (error) {

        console.error("Error creando usuario:", error.message);

        res.status(500).json({
            mensaje: "Error interno del servidor"
        });
    }
};



// ======================
// ACTUALIZAR USUARIO
// ======================

export const actualizarUsuario = async (req, res) => {

    try {

        const { id } = req.params;

        let { nombre, email, edad } = req.body;

        // ======================
        // VALIDACIONES
        // ======================

        if (!nombre || !email || !edad) {
            return res.status(400).json({
                mensaje: "Todos los campos son obligatorios"
            });
        }

        nombre = nombre.trim();
        email = email.trim().toLowerCase();
        edad = Number(edad);

        if (!email.includes("@") || !email.includes(".")) {
            return res.status(400).json({
                mensaje: "Email inválido"
            });
        }

        if (Number.isNaN(edad)) {
            return res.status(400).json({
                mensaje: "La edad debe ser numérica"
            });
        }

        if (edad <= 0) {
            return res.status(400).json({
                mensaje: "Edad inválida"
            });
        }

        // ======================
        // VALIDAR EMAIL DUPLICADO
        // ======================

        const emailExistente = await pool.query(
            `
            SELECT * FROM usuarios
            WHERE email = $1
            AND id != $2
            `,
            [email, id]
        );

        if (emailExistente.rows.length > 0) {
            return res.status(409).json({
                mensaje: "El email ya pertenece a otro usuario"
            });
        }

        // ======================
        // QUERY
        // ======================

        const result = await pool.query(
            `
            UPDATE usuarios
            SET nombre = $1,
                email = $2,
                edad = $3
            WHERE id = $4
            RETURNING *
            `,
            [nombre, email, edad, id]
        );

        // ======================
        // VALIDAR EXISTENCIA
        // ======================

        if (result.rows.length === 0) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            });
        }

        res.status(200).json({
            mensaje: "Usuario actualizado correctamente",
            usuario: result.rows[0]
        });

    } catch (error) {

        console.error("Error actualizando usuario:", error.message);

        res.status(500).json({
            mensaje: "Error interno del servidor"
        });
    }
};

// ======================
// ELIMINAR USUARIO
// ======================

export const eliminarUsuario = async (req, res) => {

    try {

        const { id } = req.params;

        const result = await pool.query(
            `
            DELETE FROM usuarios
            WHERE id = $1
            RETURNING *
            `,
            [id]
        );

        // ======================
        // VALIDAR EXISTENCIA
        // ======================

        if (result.rows.length === 0) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            });
        }

        res.status(200).json({
            mensaje: "Usuario eliminado correctamente",
            usuario: result.rows[0]
        });

    } catch (error) {

        console.error("Error eliminando usuario:", error.message);

        res.status(500).json({
            mensaje: "Error interno del servidor"
        });
    }
};