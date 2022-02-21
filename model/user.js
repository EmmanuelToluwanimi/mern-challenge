const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    profile: {
        first_name: {
            type: String,
        },
        last_name: {
            type: String,
        },
        country: {
            type: String,
        },
        phone: {
            type: String,
        },
        personal_statement: {
            type: String,
        },
        org_name: {
            type: String,
        }
    },
    role: {
        type: String,
    },
    email: {
        type: String,
    },
    verified: {
        type: Boolean,
    },
})

module.exports = mongoose.model('User', userSchema)