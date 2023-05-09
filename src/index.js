// Creación y configuración del servidor y puerto de escucha
const puerto = process.env.PORT || 1981;
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Importamos la ruta de usuario
const usuarioRutas = require("./rutas/usuario");

// Definición de las Rutas
app.get("/", (peticion, respuesta)=>{
    respuesta.send("<h1>Modulo de usuarios</h1>");
});


// Activar el servidor con el puerto asignado
app.listen(puerto, ()=> {
    console.log("Servidor local conectado en el puerto: ", puerto);
});


// Conexión con la base de datos MongoDB
mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=>console.log("Servidor MongoDB conectado."))
    .catch((error)=>console.error(error));

// Convertir los objetos JSon a objetos JS
app.use(express.json());

// Creamos los middleware api para acceder a las rutas
app.use("/api", usuarioRutas);
