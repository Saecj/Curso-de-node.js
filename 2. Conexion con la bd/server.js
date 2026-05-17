import pool from "./src/config/db.js"; // Importamos pool que contiene la conexión a PostgreSQL que se creo

try {

    const respt = await pool.query("SELECT NOW()"); // Ejecuta un SQL en postgres para obtener la fecha y hora actual del servidor

    console.log("Conectado correctamente con la base de datos", respt.rows[0]);

} catch (error) {

    console.error("Error al conectarse a la bd", error.message)
}