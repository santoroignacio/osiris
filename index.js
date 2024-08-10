// Imports
const express = require("express");
const app = express()
// Puerto
const PORT = 3000
// Middlewares
app.use(express.json())

/* app.get('/', (req, res) => {
    return res.status(200).send({ message: 'Mensaje de respuesta' })
})
// Arrancar Servidor
app.listen(PORT, () => {
    console.log(`Server is running. http://localhost:${PORT}`)
})
 */
module.exports = app;
