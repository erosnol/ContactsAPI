const express = require("express");
const ContactsModel = require('../Models/contactsSchema')

//* ====== Create Router
const router = express.Router()

//* ====== GET CONTACTS
router.get('/', async (req, res) => {
    try {
        const contacts = await ContactsModel.find()
        res.status(200).json(contacts)
    } catch (error) {
        console.log(error);
    }
})


//* ===== CREATE CONTACTS
router.post('/', async (req, res) => {
    const contactsData = req.body

    try {
        const contacts = await ContactsModel.create(contactsData) //create the contacts in the DB
        //send back the response 
        res.status(201).json(contacts)
    } catch (error) {
        console.log(error);
        res.status(400).json('Bad request!!!!')
    }
})


//* ====== GET CONTACTS BY ID
router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const contacts = await ContactsModel.findById(id)
        res.status(200).json(contacts)
    } catch (error) {
        console.log(error);
    }
})

//* ==== UPDATE CONTACTS BY ID
router.put('/:id', async (req, res) => {
    const id = req.params.id
    const newContactsData = req.body

    try {
        //* find the contact by id
        const contacts = await ContactsModel.findByIdAndUpdate(id, newContactsData, {
            new: true
        })
        res.status(202).json(contacts)
    } catch (error) {
        console.log(error);
    }

})

//! ==== DELETE A CONTACT
router.delete('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const contacts = await ContactsModel.findByIdAndDelete

        res.status(200).json('Contact was deleted!')
    } catch (error) {
        console.log(error);
    }
})

module.exports = router