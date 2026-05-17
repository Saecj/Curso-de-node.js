import { Router } from "express";

const router = Router();

import {
    obtenerUsuarios
} from "../controllers/usuario.controller.js";

router.get("/usuarios", obtenerUsuarios);

export default router;