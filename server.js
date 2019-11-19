const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const events = require('./routes/api/events');



const app = express();

// body parser
app.use(bodyParser.json());

// db config

const db = require('./config/keys').mongoURI;
// connect to mongo
mongoose.connect(db)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

// routing
app.use('/api/events', events);

const port = process.env.PORT || 5000

app.listen(port, () => console.log(
  `Server started on port: ${port}`
))
