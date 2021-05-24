//import usuario from "./../models/usuario.js"
import models, { sequelize } from "./../models/"  // se puede agregar o no el index
import bcrypt from "bcrypt"

var BCRYPT_SALT_ROUNDS = 12;
/**
 * Permite autenticarme
 * @param {*} req petición cliente
 * @param {*} res respuesta servidor
 */
export const ingresar = function(req, res){
    //select * from usuarios where email = req.body.email
    //sequelize.query(`select * from usuarios wherer email = ${req.body.email}`)
    
    models.Usuario.findOne({
        where:{
            email:req.body.email
        }
    }).then((user) =>{
        console.log(user)
        if (!user){
            res.json({mensaje: "El usuario no existe", error: true})
        } else{
            if(req.body.password == user.password){
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

//ASync await

export const ingresar2 = async function (req, res){

    try {
        let user = await models.Usuario.findOne({
            where:{
                email:req.body.email
            }
        });
    
        if (!user){
            res.json({mensaje: "El usuario no existe", error: true})
        }else{
            let verif = await bcrypt.compare(req.body.password,user.password) 
            if(verif){
                res.json({mensaje:"Bienvenido", data: user, error:false})
            } else{
                res.json({mensaje:"La contraseña es incorrecta", error: true})
            }
        }
    } catch (error) {
        console.log(error);
        res.json({mensaje: "Error al autenticar", error: true});
    }
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

export const registroUsuario2 = async function(req, res){
    //validar si es correcto, si no existe, si es unico
    try{
        let hashedPassword = await bcrypt.hash(req.body.password, BCRYPT_SALT_ROUNDS)
        req.body.password = hashedPassword
        console.log("***********",hashedPassword)
        
        let user = await models.Usuario.findOne({
            where:{
                email:req.body.email
            }
        });

        if(user){
            res.json({mensaje:"El correo ya esta registrado", error: true})
        }else{
            let user = await models.Usuario.create(req.body)
            console.log(user)
            res.json({mensaje:"Usuario Registrado",dato: user, error: false})
        }

    }catch(error){
        console.log(error);
        res.json({mensaje: "Error al registrar el usuario", error: true}); 
    }
}