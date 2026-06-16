import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import pool from "./src/config/db.js";
import app from "../../practica/ManejoError/src/app.js";

const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iniciarServer = async() => {
    try {
        const sql = fs.readFileSync(
            path.join(__dirname, "./src/models/usuarios.sql")
        ).toString();

        await sql;
        console.log("Tabla creado/verificado");

        app.listen(PORT, ()=> {
            console.log(`El servidor corriendo en el puerto ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

iniciarServer();