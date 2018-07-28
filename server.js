const express = require('express');
const next = require('next');
const body = require('body-parser');
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
    const server = express();

    server.use(body.json());

    server.post('/add_email', (req, res) => {
      console.log('Here is the email request body dude.', req.body);
      const { email } = req.body;

      const user = new User({
        email,
      });

      console.log(' ')
  
      user.save(function(err) {
        if (err) throw err;
        console.log('User saved successfully!');
      });

      return res.status(200).send({ dude: user });
    });

    server.get('*', (req, res) => {
      return handle(req, res)
    });

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    });
  })