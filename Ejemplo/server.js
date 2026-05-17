import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import pool from "./src/config/db.js";
import app from "./src/app.js"

const PORT = 3000;

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const iniciarServidor = async () => {

    try {
        const sql = fs.readFileSync(
            path.join(_dirname, "src/models/usuario.sql")
        ).toString();

        await pool.query(sql);

        console.log("Tabla creado/verificada");

        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto: ${PORT}`);
        });

    } catch (error) {

        console.log(error);

    }
}

iniciarServidor();
