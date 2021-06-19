import express from "express";
let router = express.Router();
import {verificaAuth} from "./../middlewares/authMiddleware"

import * as authController from "./../controllers/authController.js"
import * as catController from "./../controllers/categoriaController.js"
import * as provController from "./../controllers/proveedorController.js" 

// Rutas Autenticación
//inicio de sesion
router.post("/auth/login", authController.ingresar2);

router.post("/registro",verificaAuth, authController.registroUsuario2);


//rutas de categorias

router.get("/categoria", catController.lista);
router.post("/categoria", catController.guardar);
router.put("/categoria/:id", catController.modificar);
router.delete("/categoria/:id", catController.eliminar);

//rutas de proveedor

router.get("/proveedor", provController.lista);
router.post("/proveedor", provController.guardar);
//router.put("/proveedor/:id", provController.modificar);
router.delete("/proveedor/:id", provController.eliminar);
 

//rutas de proveedor
/* 
router.get("/proveedor", catController.lista);
router.post("/proveedor", catController.guardar);
router.put("/proveedor/:id", catController.modificar);
router.delete("/proveedor/:id", catController.eliminar);
 */

// module.exports = router;
export default router;