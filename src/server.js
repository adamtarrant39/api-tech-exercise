const express = require('express');
const { respondWithUserTransactions } = require('./controllers/transactions');

const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/users/:userId/transactions', respondWithUserTransactions);

module.exports = app;
