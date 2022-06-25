const express = require('express');
const bodyParser = require('body-parser');

const myErrorLogger = require('./utilities/ErrorLogger');
const myRequestLogger = require('./utilities/RequestLogger');
const userRouter = require('./routes/userRouter');
// const DestinationRouter = require('./routes/DestinationRouter');
// const BookingRouter = require('./routes/BookingRouter');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(myRequestLogger);

app.use('/user', userRouter);
// app.use('/package', DestinationRouter);
// app.use('/book', BookingRouter);
app.get('/',(req,res)=>{
    res.send("Welcome to wanderlast webservice")
})
app.use(myErrorLogger);

app.listen(4000);
console.log("Server listening in port 4000 ");

module.exports = app;