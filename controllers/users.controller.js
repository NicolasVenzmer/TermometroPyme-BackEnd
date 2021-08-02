var UserService = require('../services/user.service');

_this = this;

// Traigo usuarios
exports.getUsers = async function (req, res, next) {

    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 1000;
    try {
        var Users = await UserService.getUsers({}, page, limit)
        return res.status(200).json({ status: 200, data: Users, message: "Usuarios recuperados exitosamente" });
    } catch (e) {

        return res.status(400).json({ status: 400, message: e.message });
    }
}

// Creacion de usuarios
exports.createUser = async function (req, res, next) {

    var User = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        lastname: req.body.lastname,
        dni: req.body.dni,
        root: req.body.root

    }
    try {
        var createdUser = await UserService.createUser(User)
        return res.status(201).json({ createdUser, message: "Usuario generado existosamente" })
    } catch (e) {
        console.log(e)
        return res.status(400).json({ status: 400, message: "Usuario no puedo generarse" })
    }
}

// Actualizacion de usuarios
exports.updateUser = async function (req, res, next) {

    if (!req.body.dni) {
        return res.status(400).json({ status: 400., message: "DNI debe estar presente" })
    }
    var User = {

        name: req.body.name ? req.body.name : null,
        lastname: req.body.lastname ? req.body.lastname : null,
        email: req.body.email ? req.body.email : null,
        dni: req.body.dni ? req.body.dni : null,
        password: req.body.password ? req.body.password : null,
        root: req.body.root ? req.body.root : "N"
    }
    try {
        var updatedUser = await UserService.updateUser(User)
        return res.status(200).json({ status: 200, data: updatedUser, message: "Usuario actualizado exitosamente" })
    } catch (e) {
        return res.status(400).json({ status: 400., message: e.message })
    }
}

// Eliminar usuarios
exports.removeUser = async function (req, res, next) {

    var id = req.body.id;
    try {
        var deleted = await UserService.deleteUser(id);
        return res.status(200).send("Usuario eliminado exitosamente");
    } catch (e) {
        console.log(e)
        return res.status(400).json({ status: 400, message: e.message })
    }
}

// Login usuarios
exports.loginUser = async function (req, res, next) {

    var User = {
        email: req.body.email,
        password: req.body.password
    }
    try {

        var loginUser = await UserService.loginUser(User);
        return res.status(201).json({ loginUser, message: "login exitoso" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: "Usuario/Contraseña invalido" })
    }
}