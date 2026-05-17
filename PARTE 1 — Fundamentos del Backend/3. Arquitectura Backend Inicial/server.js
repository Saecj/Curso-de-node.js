import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import app from "./src/app.js";
import pool from "./src/config/db.js";

const PORT = 3000;

const _filname = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filname);

const iniciarServidor = async () =>{ 
    
    try {

        console.log("Se conecto correctamente a la base de datos")
        
        const sql = fs.readFileSync(
            path.join(_dirname, "src/model/usuarioModel.sql")
        ).toString();

        await pool.query(sql);

        console.log("Tabla creada/verificada");

        app.listen(PORT, ()=>{
            console.log(`El servidor corriendo en el puerto ${PORT}`);
        });

    } catch (error) {
        
        console.log(error)
    }
}

iniciarServidor();
