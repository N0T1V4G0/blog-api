const express = require('express');
const morgan = require('morgan');
const errorMiddleware = require('./middlewares/error');
const createCategoryController = require('./modules/Category/useCases');
const createUserController = require('./modules/Users/useCases/CreateUser');

// ...

const app = express();

app.use(express.json());
app.use(morgan('dev'));

// ...
app.post('/user', (req, res, next) => {
  createUserController.handle(req, res, next);
});

app.post('/categories', (req, res, next) => {
  createCategoryController.handle(req, res, next);
});

app.post('/categories', (req, res, next) => {
  createCategoryController.handle(req, res, next);
});

app.use(errorMiddleware);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
