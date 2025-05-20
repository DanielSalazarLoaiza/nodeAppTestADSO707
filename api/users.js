const db = require('../models');
const {Router} = require('express');

// Creamos el router para poder usar los verbos HTTP
const router = Router(); // Llamamos al método Router de Express

// req => request => En request llegan los datos del body
// res => response => Se envían los datos hacia al cliente
router.get('/', (req, res) => {
    res.send({
        Title: 'Hello ADSO!'
    });
});

// Ruta para crear un nuevo usuario 
router.post('/new', async (req, res) => {
    let nombre = req.body.nombre;
    let email = req.body.email;
    let password = req.body.password;
    try {
        await db.User.create({
            nombre,
            email,
            password
        });
        res.status(200).send('Usuario creado');
    } catch (error) {
        res.status(400).send('Usuario no pudo ser creado');
    }
});

// Ruta para obtener todos los usuarios
router.get('/all', async (req, res) => {
    try {
        let users = await db.User.findAll();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send('No se pudieron obtener los usuarios');
    }
});

// Ruta para obtener un usuario en especifico
router.get('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let users = await db.User.findByPk(id);
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send('No se pudo obtener el usuario.');
    }
});

// Ruta para actualizar un usuario en específico
router.put('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let { nombre, email, password} = req.body;
        await db.User.update(
            { nombre, email, password},
            {
                where:{
                    id
                }
            }
        );
        res.status(200).send('Usuario actualizado correctamente.');
    } catch (error) {
        res.status(400).send('No se pudo actualizar el usuario.')
    }
});

// Ruta para eliminar un usuario en específico 
router.delete('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        await db.User.destroy({
            where:{
                id
            }
        });
        res.status(200).send('Usuario eliminado correctamente.')
    } catch (error) {
        res.status(400).send('El usuario no se pudo eliminar.')
    }
});

module.exports = router;