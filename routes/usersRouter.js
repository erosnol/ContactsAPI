const express = require('express')
const UserModel = require('../Models/userSchema')
// pulls out the two function we need from express validator 
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcrypt');

// * Create a Router
const router = express.Router()

//* Create a new User
router.post('/', [

    check('username', "Username is required! from Middleware").notEmpty(),
    check('email', "Please use a valid email!! from Middleware").isEmail(),
    check("password", "Please enter a password").notEmpty(),
    check("password", "Please enter a password with six or more characters!!").isLength({min: 6})

] ,async (req, res) => {
    const userData = req.body

    const errors = validationResult(req)

    if (!errors.isEmpty()){
        return res.json(errors.array())
    }

    try {
        // checking if there is a user with this email in the DB
        const user = await UserModel.findOne({email: userData.email})
        // if user exists output the message 
        if (userExist){
            return res.json({msg: "User already exists!"})
        }

        // create SALT
        const SALT = await bcrypt.genSalt(10)
        // use the salt to create a hash with the user's password
        const hashedPassword = await bcrypt.hash(userData.password, SALT)
        // assign the hashed password to the userData
        userData.password = hashedPassword

    } catch (error) {
        console.log(error)
        res.status(400).json('Bad request!!!!!')
    }
})

module.exports = router