const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const testRouter = require('./routes/test');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test', testRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
// const express = require('express');
// const app = express();
// app.all('/', (req, res) => {
//   res.send("Hola Mundo!");
// });

// app.get("/usuarios", (req, res) => {
//   res.send("Método GET");
// });

// app.post("/usuarios", (req, res) => {
//   res.send("Método POST");
// });

// app.delete("/usuarios", (req, res) => {
//   res.send("Método DELETE");
// });

// app.put("/usuarios", (req, res) => {
//   res.send("Método PUT");
// });

// const PORT = 3000;
// const server = app.listen(PORT, ()=>{});