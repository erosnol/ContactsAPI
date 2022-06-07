const mongoose = require('mongoose')

const contactsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String
    },

    phone: {
        type: String,
        required: true
    },

    contactType: {
        type: String,
        default: 'personal'
    },

    created_at: {
        type: Date,
        default: Date.now()
    }

});

const usersSchema = mongoose.Schema({
    username: {
        type:String,
        required:true
    },

    email: {
        type:String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Contacts', contactsSchema, usersSchema)