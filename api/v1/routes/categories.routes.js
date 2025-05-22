// Se llama a la Base de datos
const db = require('../../../models');
// Creamos el verbo para poder usar los verbos HTTP
const { Router } = require('express'); // Destructuración

// Se crea el router
const router = Router();
// Se llama al Controller
const categoryController = require('../../../controllers/categoryController');

// req => request => En request llegan los datos del body 
// res => response => Se envían los datos hacia al cliente

router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategory);
router.post('/newCategory', categoryController.createCategory);
router.put('/update/:id', categoryController.updateCategory);
router.delete('/delete/:id', categoryController.deleteCategory);

module.exports = router;