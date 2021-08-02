var ContactoService = require('../services/contacto.service');

_this = this;

exports.createContacto = async function (req, res, next) {

    var Contacto = {
        razonsocial: req.body.razonsocial,
        email: req.body.email,
        region: req.body.region,
        tamaño: req.body.tamaño

    }
    try {

        var createdContacto = await ContactoService.createContacto(Contacto)
        return res.status(201).json({ createdContacto, message: "Contacto creado existosamente" })
    } catch (e) {

        console.log(e)
        return res.status(400).json({ status: 400, message: "Contacto no pudo crearse" })
    }
}