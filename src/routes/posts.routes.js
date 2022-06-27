const { Router } = require('express');

const postRouter = Router();

postRouter.use('/', (req, res, _next) =>
  res.status(501).json({ message: 'not implemented' }));

module.exports = postRouter;
