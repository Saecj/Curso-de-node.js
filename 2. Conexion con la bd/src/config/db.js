// pg: Es para postgres
// mysql2: Es para conectarse con mysql
// mongoose o mongodb: Es para mongodb
// sqlite3: Es para SQLite
// mariadb: Es para MariaDB


import pg from "pg"; // Nos permite conectarse a postgres
import "dotenv/config"; // Nos permite cargar automaticamente las variables que estan en .env

const { Pool } = pg; // Extraemos pool que es una clase, que permite menejar un conjunto de conexiones a la BD

// Se crea la conexion con la base de datos
const pool = new Pool({ 
    host: process.env.DB_HOST, // Dirección del servidor de la BD
    port: process.env.DB_PORT, // El puerto del servidor de la BD
    user: process.env.DB_USER, // El usuario del servidor de la BD
    password: process.env.DB_PASSWORD, // La contraseña del servidor de la BD
    database: process.env.DB_NAME // El nombre de la BD
});

export default pool; // Con esto permitimos utilizar la conexion de de pool para usarlo en otros archivos