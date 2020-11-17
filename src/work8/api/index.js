const { Router } = require('express');

const users = require('./users');
const echo = require('./echo');

const apiRouter = Router();



apiRouter.use('/users', users);
apiRouter.use('/echo', echo);

module.exports = apiRouter;
