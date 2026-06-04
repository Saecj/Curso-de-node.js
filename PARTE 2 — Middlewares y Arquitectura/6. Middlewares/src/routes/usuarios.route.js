import { Router} from "express";

const router = Router();

import {
    obtenerUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
} from "../controllers/usuarios.controller.js";

import { validarCampos } from "../middleware/usuarioCampo.validator.js";

import { loginCampo } from "../middleware/loginCampo.validator.js";
import { inicioSesion } from "../controllers/loginUsuario.controller.js";
import { restringirA } from "../middleware/restringirA.validator.js";


router.get("/usuarios", restringirA("Admin", "Cliente"), obtenerUsuario);
router.post("/usuarios", validarCampos, restringirA("Admin"), crearUsuario);
router.put("/usuarios/:id", validarCampos, restringirA("Admin"), actualizarUsuario);
router.delete("/usuarios/:id", restringirA("Admin"), eliminarUsuario);

router.post("/auth", loginCampo, inicioSesion);

export default router;