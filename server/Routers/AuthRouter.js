const express = require('express');
const { sineUp, login, deleteUser, tokenIsValid } = require('../Controllers/AuthController');
const { auth } = require('../Middleware/Auth');

const authRouter = express.Router();

authRouter.post('/sineUp', sineUp);

authRouter.post('/login', login);

authRouter.delete('/delete', auth, deleteUser);

authRouter.get('/tokenIsValid', tokenIsValid);

module.exports = authRouter;
