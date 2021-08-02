var Contacto = require('../models/Contacto.model');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

_this = this

// creo contacto
exports.createContacto = async function (contacto) {
    var newContacto = new Contacto({
        razonsocial: contacto.razonsocial,
        email: contacto.email,
        region: contacto.region,
        tamaño: contacto.tamaño,
        date: new Date(),

    })

    try {
        var savedContacto = await newContacto.save();
        var token = jwt.sign({
            id: savedContacto._id
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        return token;
    } catch (e) {
        console.log(e)
        throw Error("Error al crear el contacto")
    }
}