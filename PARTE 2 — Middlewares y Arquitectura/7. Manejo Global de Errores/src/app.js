import express from "express";
import cors from "cors";
import routerUsuario from "./routes/usuarios.routes";
import { manejoError } from "./middlewares/manejoError.middleware";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routerUsuario);
app.use(manejoError)

export default routerUsuario;