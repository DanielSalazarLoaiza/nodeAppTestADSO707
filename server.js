// Llamado e Inicialización de Dependencias
const bodyParser = require('body-parser');
const express = require('express'); // Se incluye el Framework Express
const morgan = require('morgan')
const app = express(); // Instancia de Express

// Configuraciones
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extend: false})); // Este se utiliza para recibir datos por POST
app.use(bodyParser.json()); // Este se utiliza para recibir formato JSON

// Configuración de rutas del API
app.use('/api/v1/users', require('./api/v1/routes/users.routes')); // Ruta para users con la version 1 de la API
app.use('/api/v1/articles', require('./api/v1/routes/articles.routes')); // Ruta para articles en la v1 de la API


// Ruta principal
// app.get('/', (req, res) => {
//     res.send({
//         status: 200,
//         message: 'Hello API NodeJs'
//     });
// });

// Ruta de Saludo
// app.get('/saludo', (req, res) => {
//     res.send({
//         status: 200,
//         message: 'Welcome to the API'
//     });
// });

// Ruta para Crear Usuario
// app.post('/testNewUser', (req, res) => {
//     console.log(req.body);
//     const { nombre, email, direccion, empresa} = req.body;
//     console.log(`Nommbre: ${nombre}`);
//     console.log(`Email: ${email}`);
//     console.log(`Dirección: ${direccion}`);
//     console.log(`Empresa: ${empresa}`);
//     res.send({
//         status:201, 
//         message: 'User created successfully'
//     });
// });

// Ruta para usuarios 
// app.use('/api/users', require('./api/users')); 

// Se inicia el servidor en el puerto 4000
app.listen(app.get('port'), ()=> {
    console.log(`Server running on port ${app.get('port')} 🤖`);
});