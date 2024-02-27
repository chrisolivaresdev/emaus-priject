const express = require('express');
const cors = require('cors');
require('dotenv').config();
const {dbConecction} = require('./database/config');

//Crear servidor de express
const app = express();

//Configurar CORS
app.use(cors())

//lectura y parseo del body
app.use(express.json())

//Base de datos 
dbConecction()

//Rutas
app.use('/api/login', require('./routes/auth'))
app.use('/api/usuarios', require('./routes/usuario'))
//emaus
app.use('/api/retiro', require('./routes/retiro'))
app.use('/api/caminantes', require('./routes/caminante'))
app.use('/api/servidores', require('./routes/servidor'))
//samuel
app.use('/api/retiroSamuel', require('./routes/retiroSamuel'))
app.use('/api/caminantesSamuel', require('./routes/caminanteSamuel'))
app.use('/api/servidoresSamuel', require('./routes/servidorSamuel'))
//Serafin
app.use('/api/retiroSerafin', require('./routes/retiroSerafin'))
app.use('/api/caminantesSerafin', require('./routes/caminanteSerafin'))
app.use('/api/servidoresSerafin', require('./routes/servidorSerafin'))
//Semillita
app.use('/api/retiroSemillita', require('./routes/retiroSemillita'))
app.use('/api/caminantesSemillita', require('./routes/caminanteSemillita'))
app.use('/api/servidoresSemillita', require('./routes/servidorSemillita'))
//imagenes
app.use('/api/uploads', require('./routes/uploads'))

app.listen( process.env.PORT, ()=> {
    console.log('servidor corriendo en el puerto ' + process.env.PORT)
} );

