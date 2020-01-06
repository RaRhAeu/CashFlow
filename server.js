const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const events = require('./routes/api/events');
const expenses = require('./routes/api/expenses');
const payments = require('./routes/api/payments');


const app = express();

// body parser middleware
app.use(bodyParser.json());

// db config
const db = require('./config/keys').mongoURI;
// connection to mongodb
mongoose.connect(db)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// routing
app.use('/api/events', events);
app.use('/api/expenses', expenses);
app.use('/api/payments', payments);

// static files
// app.use(express.static('client/build'))
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

  })
}

const port = process.env.PORT || 5000;

// prod env settings
// app.disable('x-powered-by');

app.listen(port, () => console.log(
  `Server started on port: ${port}`
))
