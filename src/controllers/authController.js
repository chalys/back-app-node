//import usuario from "./../models/usuario.js"
import models from "./../models/"  // se puede agregar o no el index

/**
 * Permite autenticarme
 * @param {*} req petición cliente
 * @param {*} res respuesta servidor
 */
export const ingresar = function(req, res){
    models.Usuario.findAll({
        where:{
            email:req.body.email
        }
    }).then(user =>{
        console.log(user)
        if (user.length == 0){
            res.json({mensaje: "El usuario no existe", error: true})
        } else{
            if(req.body.password == user[0].password){
                res.json({mensaje:"Bienvenido", data: user, error:false})
            } else{
                res.json({mensaje:"La contraseña es incorrecta", error: true})
            }
        }
    }).catch(error =>{
        console.log(error);
        res.json({mensaje: "Error al autenticar", error: true});
    })
    // lógica
    //res.send("Bienvenido Usuario");
    //res.json({mensaje: "Bienvenido usuario",error:false});
}

/**
 * Permite registrar a un nuevo usuario
 * @param {*} req petición cliente
 * @param {*} res respuesta servidor
 */
export const registroUsuario = function(req, res){
    console.log(req.body);
    //res.send("Registrando...");
    //res.json(req.body);
    models.Usuario.create(req.body).then((user)=>{ //Promesas
        res.json({mensaje:"Usuario Registrado", error: false})
    }).catch(error =>{
        console.log(error);
        res.json({mensaje: "Error al registrar el usuario", error: true});
    })

}