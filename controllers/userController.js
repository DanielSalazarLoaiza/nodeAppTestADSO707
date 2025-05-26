// Enlazamos el servicio(el servicio es la capa) del usuario
const userService = require('../services/userService');

// Controller test User Api
const testUserAPI = (req, res) => {
    console.log('TestUserAPI');
    resp.status(200).send({
        "status": "Ok",
        "message": "API User state: available"
    });
}

// Controller para traer todos los usuarios 
const getAllUsers = async (req, res) => {
    const allUsers = await userService.getAllUsers();
    if(allUsers) {
    res.status(200).send({ status: "Ok", data : allUsers });
    } else {
        res.status(400).send( { status: "Failed", data : null} );
    }
};

// Controller para recibir un usuario en específico
const getUserById = async (req, res) => {
    const id = req.params.id;
    const user = await userService.getUserById(id);
    // Cuando se usa una sola linea de código no es necesario poner las llaves del if y else
    if(user) 
        res.status(200).send({ status: "Ok", data : user });
    else
        res.status(400).send({ status: "Failed", data : null });
};

// Controller para Crear un usuario 
const createUser = async (req, res) => {
    const { body } = req;
    const createdUser = await userService.createUser(body.name, body.email, body.password);
    if (createdUser) {
        res.status(201).send({ status: "Ok", data : createdUser });
    } else {
        res.status(400).send({ status: "Failed", data : null });
    }
};

// Controller para Actualizar un usuario 
const updateUser = async (req, res) => {
    const id = req.params.id;
    const {name, email, password} = req.body;
    const update = await userService.updateUser(id, name, email, password);
    if (update) {
        res.status(200).send({ status: "Ok", data : update });
    } else {
        res.status(400).send({ status: "Failed", data : null });
    }
};

// Controller para Eliminar un usuario 
const deleteUser = async (req, res) => {
    const id = req.params.id;
    const deletedUser = await userService.deleteUser(id);
    if (deletedUser) {
        res.status(200).send({ status: "Ok", data : deletedUser });
    } else {
        res.status(400).send({ status: "Failed", data : null });
    }
};

// Llamado a todos los controllers
module.exports =  {
    testUserAPI,
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};