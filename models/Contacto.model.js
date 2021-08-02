var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var ContactoSchema = new mongoose.Schema({
    razonsocial: String,
    email: String,
    region: String,
    tamaño: String

})

ContactoSchema.plugin(mongoosePaginate)
const Contacto = mongoose.model('Contacto', ContactoSchema)

module.exports = Contacto;