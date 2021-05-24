import express from "express"
import * as authController from "./../controllers/authController.js"

let router = express.Router();

// Rutas Autenticación
//inicio de sesion
router.post("/auth/login", authController.ingresar2);
router.post("/registro", authController.registroUsuario2);



//Exporta la unica funcion que se tiene
export default router;