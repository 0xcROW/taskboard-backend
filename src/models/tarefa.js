const mongoose = require('mongoose');

const tarefa = new mongoose.Schema({
    posicao: {
        type: Number,
        required: 'é obrigatoria a posição',
        default: 0
    },
    titulo: {
        type: String,
        trim: true,
        default: 'Nova tarefa'
    },
    descricao: {
        type: String,
        required: 'é obrigatoria a descrição',
        trim: true
    },
    status: {
        type: String,
        required: 'é obrigatoria o status',
        enum: ['pendente', 'em andamento', 'concluida'],
        default: 'pendente'
    },
    dataEntrega: {
        type: Date,
        required: 'é obrigatoria a data de entrega'
    },
    concluida: {
        type: Boolean,
        default: false
    },
    dono: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Usuario'
    }
}, {
    timestamps: true
});

const EsquemaTarefa = mongoose.models.Tarefa || mongoose.model('Tarefa', tarefa);
module.exports = EsquemaTarefa;