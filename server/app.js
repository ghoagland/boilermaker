const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log(`Feeling chatty on port ${PORT}`));
const morgan = require('morgan');
const bodyParser = require('body-parser');

// you'll of course want static middleware so your browser can request things like your 'bundle.js'
app.use(express.static(path.join(__dirname, '../public')))
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./apiRoutes')); // matches all requests to /api


// Any routes or other various middlewares should go here!

// Make sure this is right at the end of your server logic!
// The only thing after this might be a piece of middleware to serve up 500 errors for server problems
// (However, if you have middleware to serve up 404s, that go would before this as well)
app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public'));
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
