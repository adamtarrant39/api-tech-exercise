const express = require('express');

const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/users/:userId/transactions', (req, res) => {
    res.sendStatus(501)
});

module.exports = app;
