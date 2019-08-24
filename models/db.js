const mongoose = require('mongoose');
const config = require('../config');

const notes = require('./note')
const user = require('./user')


mongoose.connect(`mongodb://${config.DB_USER}:${config.DB_PASSWORD}@${config.DB_HOST}:${config.PORT}/${config.DB_NAME}`, {useNewUrlParser: true});


const models = {};
models.Notes = mongoose.model('notes', notes.notesSchema);
models.Users = mongoose.model('users', user.usersSchema);

module.exports = models;