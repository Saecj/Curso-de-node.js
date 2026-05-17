import express from "express";
import cors from "cors";

import usuarioRoutes from "./routes/usuario.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", usuarioRoutes)

export default app;