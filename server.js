const express = require("express");
require('dotenv').config() // init dotenv

const mongoConfig = require('./config/mongoConfig');
const router = require("./routes/contactsRouter")
const contactsRouter = require('./routes/contactsRouter')

const app = express()
const PORT = 3005

//* ====== MIDDLEWARE
app.use(express.json)

//* ====== ROUTERS
app.use('/contacts', contactsRouter)

//* ====== ROOT ROUTE
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hi, there! Welcome'
    })
})

//* ====== LISTENER
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})