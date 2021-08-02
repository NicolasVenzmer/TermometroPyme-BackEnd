var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var EncuestaRespSchema = new mongoose.Schema({
    titulo: String,
    sector: String,
    tamaño: String,
    idbusqueda: String,
    
    pregunta1: String,
    P1respuesta: Number,
    P1valorref: Number,

    pregunta2: String,
    P2respuesta: Number,
    P2valorref: Number,

    pregunta3: String,
    P3respuesta: Number,
    P3valorref: Number,

    pregunta4: String,
    P4respuesta: Number,
    P4valorref: Number,

    pregunta5: String,
    P5respuesta: Number,
    P5valorref: Number,
    
    date: Date

})

EncuestaRespSchema.plugin(mongoosePaginate)
const EncuestaResp = mongoose.model('EncuestaResp', EncuestaRespSchema)

module.exports = EncuestaResp;