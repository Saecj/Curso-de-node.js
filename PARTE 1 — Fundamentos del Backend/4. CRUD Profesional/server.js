import fs from "fs"; // Es un modulo nativo de node.js que sirve para leer, crear o modificar archivos reales;
import path from "path"; // Modulo nativo para manejar rutas de carpetas de forma segura, esto evita los errores cuando se utiliza en windos(\) o en linux(/);
import { fileURLToPath } from "url"; // Herramienta de javaScript moderno (ES Modules) para convertir las direcciones web del sistema en rutas de carpetas normales;

import pool from "./src/config/db.js";
import app from "./src/app.js";

const PORT = 3000;

// Estas dos lineas sirven para recrear el __dirname de la versiones anteriores para guardar las rutas absolutas del proyecto, para saber donde esta el archivo SQL
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const iniciarServidor = async() => {

    try {
        // fs.readFileSync: Abre ese archivo sql en tu disco duro y lee todo el contenido, el path.join: Junta la ruta de tu proyecto con la ubicacion exacta de tu archivo sql
        const sql = fs.readFileSync( 
            path.join(_dirname, "src/model/usuario.sql")
        ).toString(); // Convierte esos datos binarios leidos en un texto legible

        await pool.query(sql); // Consultamos a la base de datos para ejecutar los archivos sql

        console.log("tabla creada/verificada");

        // app.listen: donde trae los cors y traducto de JSON configura para decirle en esq puerto esta escuchando
        app.listen(PORT, ()=> {
            console.log(`Servidor corriendo en el puerto: ${PORT}`);
        });

    } catch (error) {
        
        console.log(error)
    }
}
iniciarServidor();