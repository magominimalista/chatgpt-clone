const express = require('express')
const promptController = require('../controllers/prompt-controller')
const routes = express.Router()

routes.post('/api/prompt', promptController.sendText)
routes.get('/', (req, res) => {
    // Aqui você pode adicionar a lógica para lidar com a solicitação GET
    res.send('Rota GET para /api/prompt');
});

module.exports = routes