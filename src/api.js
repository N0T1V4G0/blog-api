const express = require('express');
const morgan = require('morgan');
const errorMiddleware = require('./middlewares/error');
const categoriesRouter = require('./routes/categories.routes');
const usersRouter = require('./routes/users.routes');

// ...

const app = express();

app.use(express.json());
app.use(morgan('dev'));

// ...
app.use('/user', usersRouter);
app.use('/categories', categoriesRouter);

app.use(errorMiddleware);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
