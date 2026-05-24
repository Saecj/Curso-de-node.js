import express from "express";
import cors from "cors";

const app = express();

import usuarioRouter from "./router/usuarios.route.js";

app.use(cors());
app.use(express.json());

app.use("/api", usuarioRouter);

export default app;