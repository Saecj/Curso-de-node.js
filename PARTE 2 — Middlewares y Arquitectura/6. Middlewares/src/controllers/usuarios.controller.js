import pool from "../config/db.js"; 

export const obtenerUsuario = async(req, res) => {
    try {
        
        const result = await pool.query(
            `SELECT * FROM usuarios`
        );

        if (result.rows.length === 0) {
            return res.json({
                mensaje: "Usuarios no registrados"
            });
        };

        res.status(200).json({
            mensaje: "Usuarios obtenido correctamente",
            usuarios: result.rows
        });

    } catch (error) {
        
        console.log(error);

        res.status(500).json({
            mensaje: "Error del servidor al obtener usuarios"
        });
    }
};

export const crearUsuario = async(req, res) => {
    try {
        
        let { nombre, email, contraseña, rol} = req.body;

        nombre = nombre.trim();
        email = email.trim().toLowerCase();
        contraseña = contraseña.trim();
        rol = rol.trim();

        const emailDuplicado = await pool.query(
            `SELECT * FROM usuarios WHERE email = $1`, [email] 
        );

        if (emailDuplicado.rows.length > 0) {
            return res.status(409).json({
                mensaje: "Email registrado"
            });
        };

        const result = await pool.query(
            `INSERT INTO usuarios(nombre, email, contraseña, rol)
            VALUES($1, $2, $3, $4) RETURNING *`, [nombre, email, contraseña, rol]
        );

        res.status(201).json({
            mensaje: "Usuario creado correctamente",
            usuarios: result.rows[0]
        });

    } catch (error) {
        
        console.log(error);

        res.status(500).json({
            mensaje: "Error al crear usuario"
        });
    }
};

export const actualizarUsuario = async(req, res) => {
    try {
        
        const { id } = req.params;
        let {nombre, email, contraseña, rol} = req.body;
    
        nombre = nombre.trim();
        email = email.trim().toLowerCase();
        contraseña = contraseña.trim();
        rol = rol.trim();

        const emailDuplicado = await pool.query(
            `SELECT * FROM usuarios WHERE email = $1 and id != $2`, [email, id] 
        );

        if (emailDuplicado.rows.length > 0) {
            return res.status(409).json({
                mensaje: "Email registrado"
            });
        };

        const result = await pool.query(
            `UPDATE usuarios
            SET nombre = $1, email = $2, contraseña = $3, rol = $4 WHERE id = $5 RETURNING *`, [nombre, email, contraseña, rol, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            });
        };

        res.status(200).json({
            mensaje: "Usuario actualizado con exito",
            usuario: result.rows[0]
        });

    } catch (error) {
        
        console.log(error);

        res.status(500).json({
            mensaje: "Error al actualizar usuario"
        });
    }
};

export const eliminarUsuario = async(req, res) => {
    try {
        
        const { id } = req.params;

        const result = await pool.query(
            `DELETE FROM usuarios WHERE id = $1 RETURNING *`, [id] 
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            });
        };

        res.status(200).json({
            mensaje: "Usuario eliminado con exito",
            usuario: result.rows[0]
        });

    } catch (error) {
        
        console.log(error);

        res.status(500).json({
            mensaje: "Error al eliminar usuario"
        });
    }
};