import express from "express"
import * as authController from "./../controllers/authController.js"

let router = express.Router();

// Rutas Autenticación
//inicio de sesion
router.post("/auth/login", authController.ingresar);
router.post("/registro", authController.registroUsuario);



//Exporta la unica funcion que se tiene
export default router;