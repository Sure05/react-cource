const { Router } = require('express');

const echoRouter = Router();

echoRouter.get('/', (req, res) => {
  const { q, name } = req.query;
  res.send(`${q}, ${name || 'Anon'}`);
});

module.exports = echoRouter;
