var EncuestaService = require('../services/encuesta.service');

_this = this;

// Creacion de encuestas
exports.createEncuesta = async function (req, res, next) {

    var Encuesta = {
        titulo: req.body.titulo,
        sector: req.body.sector,
        tamaño: req.body.tamaño,

        pregunta1: req.body.pregunta1,
        P1respuesta1: req.body.P1respuesta1,
        P1opcion1: req.body.P1opcion1,
        P1respuesta2: req.body.P1respuesta2,
        P1opcion2: req.body.P1opcion2,
        P1respuesta3: req.body.P1respuesta3,
        P1opcion3: req.body.P1opcion3,
        P1respuesta4: req.body.P1respuesta4,
        P1opcion4: req.body.P1opcion4,
        P1respuesta5: req.body.P1respuesta5,
        P1opcion5: req.body.P1opcion5,
        P1valorref1: req.body.P1valorref1,

        pregunta2: req.body.pregunta2,
        P2respuesta1: req.body.P2respuesta1,
        P2opcion1: req.body.P2opcion1,
        P2respuesta2: req.body.P2respuesta2,
        P2opcion2: req.body.P2opcion2,
        P2respuesta3: req.body.P2respuesta3,
        P2opcion3: req.body.P2opcion3,
        P2respuesta4: req.body.P2respuesta4,
        P2opcion4: req.body.P2opcion4,
        P2respuesta5: req.body.P2respuesta5,
        P2opcion5: req.body.P2opcion5,
        P2valorref1: req.body.P2valorref1,

        pregunta3: req.body.pregunta3,
        P3respuesta1: req.body.P3respuesta1,
        P3opcion1: req.body.P3opcion1,
        P3respuesta2: req.body.P3respuesta2,
        P3opcion2: req.body.P3opcion2,
        P3respuesta3: req.body.P3respuesta3,
        P3opcion3: req.body.P3opcion3,
        P3respuesta4: req.body.P3respuesta4,
        P3opcion4: req.body.P3opcion4,
        P3respuesta5: req.body.P3respuesta5,
        P3opcion5: req.body.P3opcion5,
        P3valorref1: req.body.P3valorref1,

        pregunta4: req.body.pregunta4,
        P4respuesta1: req.body.P4respuesta1,
        P4opcion1: req.body.P4opcion1,
        P4respuesta2: req.body.P4respuesta2,
        P4opcion2: req.body.P4opcion2,
        P4respuesta3: req.body.P4respuesta3,
        P4opcion3: req.body.P4opcion3,
        P4respuesta4: req.body.P4respuesta4,
        P4opcion4: req.body.P4opcion4,
        P4respuesta5: req.body.P4respuesta5,
        P4opcion5: req.body.P4opcion5,
        P4valorref1: req.body.P4valorref1,

        pregunta5: req.body.pregunta5,
        P5respuesta1: req.body.P5respuesta1,
        P5opcion1: req.body.P5opcion1,
        P5respuesta2: req.body.P5respuesta2,
        P5opcion2: req.body.P5opcion2,
        P5respuesta3: req.body.P5respuesta3,
        P5opcion3: req.body.P5opcion3,
        P5respuesta4: req.body.P5respuesta4,
        P5opcion4: req.body.P5opcion4,
        P5respuesta5: req.body.P5respuesta5,
        P5opcion5: req.body.P5opcion5,
        P5valorref1: req.body.P5valorref1,

    }
    try {

        var createdEncuesta = await EncuestaService.createEncuesta(Encuesta)
        return res.status(201).json({ createdEncuesta, message: "Encuesta creada exitosamente" })
    } catch (e) {
        console.log(e)
        return res.status(400).json({ status: 400, message: "Encuesta no pudo ser creada" })
    }
}

// Creacion de encuestas de respuesta
exports.createEncuestaResp = async function (req, res, next) {

    var Encuesta = {
        titulo: req.body.titulo,
        sector: req.body.sector,
        tamaño: req.body.tamaño,
        idbusqueda: req.body.idbusqueda,

        pregunta1: req.body.pregunta1,
        P1respuesta: req.body.P1respuesta,
        P1valorref: req.body.P1valorref,

        pregunta2: req.body.pregunta2,
        P2respuesta: req.body.P2respuesta,
        P2valorref: req.body.P2valorref,

        pregunta3: req.body.pregunta3,
        P3respuesta: req.body.P3respuesta,
        P3valorref: req.body.P3valorref,

        pregunta4: req.body.pregunta4,
        P4respuesta: req.body.P4respuesta,
        P4valorref: req.body.P4valorref,

        pregunta5: req.body.pregunta5,
        P5respuesta: req.body.P5respuesta,
        P5valorref: req.body.P5valorref,

    }
    try {

        var createdEncuesta = await EncuestaService.createEncuestaResp(Encuesta)
        return res.status(201).json({ createdEncuesta, message: "Encuesta de respuesta creada exitosamente" })
    } catch (e) {
        console.log(e)
        return res.status(400).json({ status: 400, message: "Encuesta de respuesta no pudo ser creada" })
    }
}

// Traigo encuestas
exports.getEncuesta = async function (req, res, next) {

    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 1000;
    try {
        var Encuesta = await EncuestaService.getEncuesta({}, page, limit)
        return res.status(200).json({ status: 200, data: Encuesta, message: "Encuestas recuperadas exitosamente" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

// Traigo encuestas por ID
exports.getEncuestaID = async function (req, res, next) {

    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 1000;

    var filtro = {
        _id: req.body._id
    }
    try {
        var Encuesta = await EncuestaService.getEncuesta(filtro, page, limit)

        if (Encuesta.total === 0)
            return res.status(201).json({ status: 201, data: Encuesta, message: "No existe la encuesta por ID" });
        else
            return res.status(200).json({ status: 200, data: Encuesta, message: "Encuesta por ID recuperada exitosamente" });
    } catch (e) {

        console.log(e)
        return res.status(400).json({ status: 400, message: e.message });
    }
} 


// Traigo encuestas resueltas por ID
exports.getEncuestaRespID = async function (req, res, next) {

    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 1000;

    var filtro = {
        idbusqueda: req.body.idbusqueda
    }
    try {
        var Encuesta = await EncuestaService.getEncuestaID(filtro, page, limit)

        if (Encuesta.total === 0)
            return res.status(201).json({ status: 201, data: Encuesta, message: "No existe la encuesta por ID" });
        else
            return res.status(200).json({ status: 200, data: Encuesta, message: "Encuesta por ID recuperada exitosamente" });
    } catch (e) {

        console.log(e)
        return res.status(400).json({ status: 400, message: e.message });
    }
} 

// Eliminar encuestas
exports.removeEncuesta = async function (req, res, next) {
    var id = req.body.id;

    try {
        var deleted = await EncuestaService.deleteEncuesta(id);
        return res.status(200).send("Encuesta eliminada existosamente");


    } catch (e) {
        console.log(e)
        return res.status(400).json({ status: 400, message: e.message })
    }
}