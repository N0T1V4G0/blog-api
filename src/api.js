const express = require('express');
const morgan = require('morgan');
const errorMiddleware = require('./middlewares/error');
const createSessionController = require('./modules/Users/useCases/login');
const categoriesRouter = require('./routes/categories.routes');
const postRouter = require('./routes/posts.routes');
const usersRouter = require('./routes/users.routes');

// ...

const app = express();

app.use(express.json());
app.use(morgan('dev'));

// ...
app.use('/login', (req, res, next) => {
  createSessionController.handle(req, res, next);
});

app.use('/user', usersRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);

app.use(errorMiddleware);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
