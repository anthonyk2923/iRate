console.clear();

const express = require('express');
const db = require('./config/db');
const cors = require('cors');
const cluster = require('cluster');
const bodyParser = require('body-parser');

const path = require('path');

require('colors');
require('dotenv').config();

app = express();

process.on('uncaughtException', function (err) {
  console.log(err);
  console.log('Node NOT Exiting...');
});

app.use(express.static(path.join(__dirname, '/public'))); //frontend

// app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.connectDb();

app.get('/favicon.ico', (req, res) =>
  res.sendFile(__dirname + '/public/favicon.ico')
);

app.use('/api/teachers', require('./routes/teacherRoutes'));
app.use('/api/ratings', require('./routes/ratingRoutes'));

if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'));

  // Handle SPA
  app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));
}
app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`.dim.bold);
});
