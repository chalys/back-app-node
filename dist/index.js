"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//importar modulos o dependencias de producción npm (express) framework
//Variables
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0'; //configuracion de dependencias

let app = (0, _express.default)(); //inicializar
//let app = require("express")(); otra forma de inicializar

app.set("puerto", PORT);
app.set("host", HOST); // rutas

app.get("/test", (req, res) => {
  res.send("Hola Bienvenido a mi Pagina con Node.js");
}); //levantar el servidor

app.listen(app.get("puerto"), app.get("host"), () => {
  console.log(`Servidor levantado en http://${app.get("host")}:${app.get("puerto")}`);
});