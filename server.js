const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const User = require('./models/index.js');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const mongoDB = 'mongodb://127.0.0.1/my_database';

mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
// Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.prepare()
  .then(() => {
    const server = express()

    server.get('/add_email', (req, res) => {
      const { email } = req.body;

      const user = new User({
        email,
      });
  
      user.save(function(err) {
        if (err) throw err;
        console.log('User saved successfully!');
      });
      
      return res.status(400).send({ dude: 'sah'});
    });

    server.get('*', (req, res) => {
      return handle(req, res)
    });

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    });
  })