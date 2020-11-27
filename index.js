const express = require('express');
const app = express();
const morgan = require('morgan');
const dishRouter = require('./routes/dishRouter');

app.use(morgan('dev'));
app.use('/dishes', dishRouter);

app.listen(3000, () => {
  console.log('Server started at port 3000');
});
