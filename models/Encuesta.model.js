var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var EncuestaSchema = new mongoose.Schema({
    titulo: String,
    sector: String,
    tamaño: String,

    pregunta1: String,
    P1respuesta1: String,
    P1opcion1: String,
    P1respuesta2: String,
    P1opcion2: String,
    P1respuesta3: String,
    P1opcion3: String,
    P1respuesta4: String,
    P1opcion4: String,
    P1respuesta5: String,
    P1opcion5: String,
    P1valorref1: String,


    pregunta2: String,
    P2respuesta1: String,
    P2opcion1: String,
    P2respuesta2: String,
    P2opcion2: String,
    P2respuesta3: String,
    P2opcion3: String,
    P2respuesta4: String,
    P2opcion4: String,
    P2respuesta5: String,
    P2opcion5: String,
    P2valorref1: String,

    pregunta3: String,
    P3respuesta1: String,
    P3opcion1: String,
    P3respuesta2: String,
    P3opcion2: String,
    P3respuesta3: String,
    P3opcion3: String,
    P3respuesta4: String,
    P3opcion4: String,
    P3respuesta5: String,
    P3opcion5: String,
    P3valorref1: String,

    pregunta4: String,
    P4respuesta1: String,
    P4opcion1: String,
    P4respuesta2: String,
    P4opcion2: String,
    P4respuesta3: String,
    P4opcion3: String,
    P4respuesta4: String,
    P4opcion4: String,
    P4respuesta5: String,
    P4opcion5: String,
    P4valorref1: String,

    pregunta5: String,
    P5respuesta1: String,
    P5opcion1: String,
    P5respuesta2: String,
    P5opcion2: String,
    P5respuesta3: String,
    P5opcion3: String,
    P5respuesta4: String,
    P5opcion4: String,
    P5respuesta5: String,
    P5opcion5: String,
    P5valorref1: String,

    date: Date

})

EncuestaSchema.plugin(mongoosePaginate)
const Encuesta = mongoose.model('Encuesta', EncuestaSchema)

module.exports = Encuesta;