import { Router } from "express"

const router = Router();

import {
    obtenerUsuarios,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
} from "../controllers/usuario.controller.js";

// Se crea un mapa de rutas
router.get("/usuarios", obtenerUsuarios)
router.post("/usuarios", crearUsuario)
router.put("/usuarios/:id", actualizarUsuario)
router.delete("/usuarios/:id", eliminarUsuario);

export default router;