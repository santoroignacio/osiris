const app =  require ('./index')
const mongoose = require("mongoose");
require('dotenv').config();

const PORT = 3000
const MONGO_URL_COMPASS_MONGOOSE = process.env.MONGO_URL_COMPASS_MONGOOSE


const server = app.listen(PORT)/* , ()=>{
    console.log(`Servidor escuchando en http://127.0.0.1:${PORT}`)
});
 */
server.on('listening', ()=>{
    console.log(`Servidor escuchando en http://127.0.0.1:${PORT}`)
});

server.on('error', (error)=>{
    console.log(`Error en el servidor: ${error}`)
});

const conectarMongoose = async()=>{
    try {
        await mongoose.connect(MONGO_URL_COMPASS_MONGOOSE)
        console.log(`Se conectó a la base de datos con Mongoose: ${MONGO_URL_COMPASS_MONGOOSE}`)
    } catch (error) {
        console.log(`No se conectó , error: ${error}`)
    }
}

conectarMongoose()


