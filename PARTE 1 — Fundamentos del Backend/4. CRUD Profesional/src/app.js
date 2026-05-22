import express from "express";
import cors from "cors";

import usuarioRoutes from "./routes/usuario.routes.js";

const app = express();

app.use(cors()); // Se configura los cors para poder resiver las peticiones del frontend
app.use(express.json()); // Enciende el lector de JSON para el req.body

app.use("/api", usuarioRoutes); // Conecta al mapa de rutas con un prefijo

export default app;