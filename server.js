const express = require("express");
require('dotenv').config() // init dotenv

const morgan = require('morgan')
const helmet = require('helmet')



const mongoConfig = require('./config/mongoConfig');
const contactsRouter = require('./routes/contactsRouter')
const usersRouter = require("./routes/usersRouter")
const authRouter = require("./routes/authRouter")

const app = express()
const PORT = 9000

//* ====== MIDDLEWARE
app.use(express.json())
app.use(morgan('dev'))
app.use(helmet())

//* ====== ROUTERS
app.use('/contacts', contactsRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter)

//* ====== ROOT ROUTE
app.get('/', (req, res) => {
    res.status(200).json("Welcome to my API!")
})

//* ====== LISTENER
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    mongoConfig()
})