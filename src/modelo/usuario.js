const mongoose = require("mongoose");
const esquemaUsuario = mongoose.Schema({
    documento:{
        type: String,
        required: true,
    },
    numero:{
        type: String,
        required: true,
    },
    nombre:{
        type: String,
        required: true,
    },
    barrio:{
        type: String,
        required: true,
    },
    direccion:{
        type: String,
        required: true,
    },
    celular:{
        type: String,
        required: true,
    },
    correo:{
        type: String,
        required: true,
    },
    clave:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Usuario", esquemaUsuario);