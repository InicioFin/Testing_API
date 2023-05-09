// Ruta para el CRUD de los usuarios
const express = require("express");
const esquemaUsuario = require("../modelo/usuario");

// Creamos el router para los usuarios
const router = express.Router();

// Ruta para crear un usuario de la aplicación
router.post("/usuario", (peticion, respuesta)=>{
    const usuario = esquemaUsuario(peticion.body);
    usuario
        .save()
        .then((datos)=>respuesta.json(datos))
        .catch((error)=>respuesta.json({message: error}));
});

// Ruta para obtener todos los clientes
router.get("/usuario", (peticion, respuesta)=>{
    esquemaUsuario    
        .find()
        .then((datos)=>respuesta.json(datos))
        .catch((error)=>respuesta.json({message: error}));
});

// Ruta para obtener los datos de un cliente
router.get("/usuario/:id", (peticion, respuesta)=>{
    const{id} = peticion.params;
    esquemaUsuario    
        .findById(id)
        .then((datos)=>respuesta.json(datos))
        .catch((error)=>respuesta.json({message: error}));
});


// Ruta para actualizar los datos de un cliente
router.put("/usuario/:id", (peticion, respuesta)=>{
    const{id} = peticion.params;
    const {documento, numero, nombre, barrio, direccion, celular, correo, clave} = peticion.body;
    esquemaUsuario    
        .updateOne({_id:id}, {$set:{documento, numero, nombre, barrio, direccion, celular, correo, clave}})
        .then((datos)=>respuesta.json(datos))
        .catch((error)=>respuesta.json({message: error}));
});

// Ruta para eliminar un cliente
router.delete("/usuario/:id", (peticion, respuesta)=>{
    const { id } = peticion.params;    
    esquemaUsuario    
        .deleteOne({_id:id})
        .then((datos)=>respuesta.json(datos))
        .catch((error)=>respuesta.json({message: error}));
});

// Exportamos el router desde el modulo usuario
module.exports = router;