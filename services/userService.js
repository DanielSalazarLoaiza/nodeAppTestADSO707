// Se llama la Base de Datos 
const db = require('../models');

// Service para recibir todos los usuarios
const getAllUsers = async () => {
    try {
        const users = await db.User.findAll();
        return users;
    } catch (error) {
        throw new Error("Error al traer usuarios "+error.message);
    }
};

// Service para recibir un usuario en específico
const getUserById = async (id) => {
    try {
        const user = await db.User.findByPk(id);
        return user;
    } catch (error) {
        throw new Error("Error al traer el Usuario "+error.message);
    }
};

// Service para Crear un usuario 
const createUser = async (name, email, password) => {
    try {
        let newUser = await db.User.create({ 
            name,
            email,
            password,
        });
        return newUser;
    } catch (error) {
        throw new Error("Error al crear el usuario "+error.message);
        
    }
};

// Service para Actualizar un usuario 
const updateUser = async (id, name, email, password) => {
    try {
        let editUser = await db.User.update({
            name,
            email,
            password
        }, {
            where: {
                id
            }
        });
        return editUser;
    } catch (error) {
        throw new Error("Error al editar el usuario "+error.message);
    }
};

// Service para Eliminar un usuario 
const deleteUser =  async (id) => {
    try {
        let deleted = await db.User.destroy({
            where: {
                id
            }
        });
        return deleted;
    } catch (error) {
        throw new Error("No se pudo eliminar el Usuario "+error.message);
    }
};

// Se exportan todos los Services
module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};