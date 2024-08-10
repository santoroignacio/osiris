// Imports
const express = require("express");
const app = express()
// Puerto
const PORT = 3000
// Middlewares
app.use(express.json())

module.exports = app;
