const express = require('express');
const configureMiddleware = require('../config/middleware');

const dishRouter = require('../routes/dishsRoutes');
const recipesRouter = require('../routes/recipesRoutes');
const ingredientsRouter = require('../routes/ingredientsRoutes');

const server = express();

configureMiddleware(server);

server.use('/api/dishes', dishRouter);
server.use('/api/ingredients', ingredientsRouter);
server.use('/api/recipes', recipesRouter);

module.exports = server;