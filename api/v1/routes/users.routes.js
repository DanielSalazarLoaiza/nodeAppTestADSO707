const db = require('../../../models'); // Se llama a la Base de Datos 
const { Router } = require('express'); // Destructuración 

// Se crea el router
const router = Router();
// Se llama al controller
const userController = require('../../../controllers/userController');

// Prueba
router.get('/testUserAPI', (req, res) => {
    res.send({
        "status": 200,
        "message": "Hello from Users"
    });
});

// Rutas del usuario con los verbos HTTP
router.get('/', userController.getAllUsers); // Para todos los usuarios
router.get('/:id', userController.getUserById); // Para solo un usuario 
router.post('/newUser', userController.createUser); // Para crear un usuario 
router.put('/updateUser/:id', userController.updateUser); // Para actualizar un usuario 
router.delete('/deleteUser/:id', userController.deleteUser); // Para eliminar un usuario

// Se llama el Router
module.exports = router;