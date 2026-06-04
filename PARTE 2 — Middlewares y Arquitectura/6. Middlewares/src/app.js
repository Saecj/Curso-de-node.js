import express from "express";
import cors from "cors";
import routerUsuario from "./routes/usuarios.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routerUsuario);

export default app;