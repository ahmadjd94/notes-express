const express = require('express');
const notes = require('./controllers/notes')

const routes = express.Router();
routes.use('/notes', notes);

module.exports = routes;