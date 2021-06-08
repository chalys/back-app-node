import express from "express";
let router = express.Router();
import {verificaAuth} from "./../middlewares/authMiddleware"

import * as authController from "./../controllers/authController.js"
import * as catController  from "./../controllers/categoriaController.js"

// Rutas Autenticación
//inicio de sesion
router.post("/auth/login", authController.ingresar2);

router.post("/registro",verificaAuth, authController.registroUsuario2);


//rutas de categorias

router.get("/categoria", catController.lista);
router.post("/categoria", catController.guardar);

// module.exports = router;
export default router;