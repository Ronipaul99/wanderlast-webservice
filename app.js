const express = require('express');
const bodyParser = require('body-parser');

const myErrorLogger = require('./src/utilities/ErrorLogger');
const myRequestLogger = require('./src/utilities/RequestLogger');
const userRouter = require('./src/routes/userRouter');
const DestinationRouter = require('./src/routes/DestinationRouter');
const BookingRouter = require('./src/routes/BookingRouter');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(myRequestLogger);

app.use('/user', userRouter);
app.use('/package', DestinationRouter);
app.use('/book', BookingRouter);

app.use(myErrorLogger);

app.listen(3000);
console.log("Server listening in port 3000 ");

module.exports = app;