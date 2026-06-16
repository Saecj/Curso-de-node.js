import { Router } from "express";

const router = Router();

import {
    obtenerUsuarios,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
} from "../controllers/usuarios.controller.js";
import { validarCampos } from "../middlewares/validarCampos.validator";

router.get("/usuarios", obtenerUsuarios);
router.post("/usuarios", validarCampos, crearUsuario);
router.put("/usuarios/:id", validarCampos, actualizarUsuario);
router.delete("/usuarios/:id", eliminarUsuario);

export default router;