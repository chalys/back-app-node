//importar modulos o dependencias de producción npm (express) framework
import express from "express"
import routes from "./routes/index.js";

//Variables
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0'

//configuracion de dependencias
let app = express(); //inicializar

//let app = require("express")(); otra forma de inicializar
app.set("puerto", PORT);
app.set("host", HOST);

//json(req.body)
app.use(express.json())// for parsing application/jso
app.use(express.urlencoded({extended: true})) //for parsing application/x-www-form-urlencoded

//CORS
app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin','*');

    res.setHeader('Access-Control-Allow-Headers','content-type');

    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');

    next();
})

// config rutas
app.use("/api",routes);

// rutas
app.get("/test", (req,res)=>{
    res.send("Hola Bienvenido a mi Pagina con Node.js")
})

app.get("/", (req,res)=>{
    res.send("Saludos Humanos -!!")
})

//levantar el servidor
app.listen(app.get("puerto"), app.get("host"), ()=>{
    console.log(`Servidor levantado en http://${app.get("host")}:${app.get("puerto")}`)
})