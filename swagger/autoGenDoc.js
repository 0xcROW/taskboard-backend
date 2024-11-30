const mongooseToSwagger = require('mongoose-to-swagger');
const EsquemaTarefa = require('../src/models/tarefa.js');
const EsquemaUsuario = require('../src/models/usuario.js');
const swaggerAutogen = require('swagger-autogen')({
    openapi: '3.0.0',
    language: 'pt-BR',
});

const outputFile = './swagger-output.json';
const endpointsFiles = ['../index.js', '../src/routes.js'];

let doc = {
    paths: {},
    components: {
        schemas: {
            Tarefa: mongooseToSwagger(EsquemaTarefa),
            Usuario: mongooseToSwagger(EsquemaUsuario)
        },
    },
    info: {
        title: 'API de Tarefas',
        description: 'API para manipulação de tarefas',
        version: '1.0.0',
    },
    servers: [{
        url: 'http://localhost:3000',
        description: 'Servidor Local'
    },
    {
        url: 'https://back-board-dimi-dev.vercel.app/',
        description: 'Servidor de Produção'
    }],
    consumes: ['application/json'],
    produces: ['application/json'],
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    if (process.env.NODE_ENV !== 'production'){
        require('../index.js');
    }
});