import express from "express";
import cors from "cors";

import usuarioRouter from "./routers/usuario.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", usuarioRouter);

export default app;