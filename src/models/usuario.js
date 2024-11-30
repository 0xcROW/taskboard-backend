const mongoose = require('mongoose');
const validator = require('validator');

const usuario = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: 'é obrigatoria o email',
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
        if (!validator.isEmail(value)) {
            throw new Error('Email is invalid');
        }
        }
    },
    password: {
        type: String,
        required: 'é obrigatoria a senha',
        select: false,
        trim: true,
        minlength: 7,
        validate(value) {
        if (value.toLowerCase().includes('password')) {
            throw new Error('Password cannot contain "password"');
        }
        }
    }
}, {
    timestamps: true
});

const EsquemaUsuario = mongoose.models.Usuario || mongoose.model('Usuario', usuario);
module.exports = EsquemaUsuario;
