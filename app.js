require('./DATABASE/database');
const createError= require('http-errors');
const express= require('express');
const path= require('path');
const cookieParser= require('cookie-parser');
const logger= require('morgan');
const cors= require('cors')

// Routes Location
const menuRouter= require('./routes/menu');
const usersRouter= require('./routes/users');
const forumRouter= require('./routes/forum');
const reservationRouter= require('./routes/reservations');
const supportRouter= require('./routes/technical-support');
const commentsRouter= require('./routes/comments');
const wantedRouter= require('./routes/wanted');
const orderRouter= require('./routes/order');
const menuOrderingPrices= require('./routes/menuOrderingPrices');

const app= express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get('/', (req,res)=>{
  res.send('hello from main')
})
// My Routes:
app.use('/menu', menuRouter);
app.use('/users', usersRouter);
app.use('/forum', forumRouter);
app.use('/reservations', reservationRouter);
app.use('/technicalsupport', supportRouter);
app.use('/comments', commentsRouter);
app.use('/wanted', wantedRouter);
app.use('/order', orderRouter);
app.use('/menuOrderingPrices', menuOrderingPrices);

// catch 404 and forward to error handler
app.use(function(req, res, next){
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next){
  // set locals, only providing error in development
  res.locals.message= err.message;
  res.locals.error= req.app.get('env')=== 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(process.env.PORT || 3000, ()=> {console.log('Server Is Online...');})
module.exports = app;
