import pool from "../config/db.js";

export const obtenerUsuarios = async (req, res)=> {
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
