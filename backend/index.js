console.clear();

const express = require('express');
const db = require('./config/db');
const cors = require('cors');
const cluster = require('cluster');
const path = require('path');

require('colors');
require('dotenv').config();

app = express();

process.on('uncaughtException', function (err) {
  console.log(err);
  console.log('Node NOT Exiting...');
});

app.use(express.static(path.join(__dirname, '/public'))); //frontend

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

db.connectDb();

app.use('/api/teachers', require('./routes/teacherRoutes'));
app.use('/api/ratings', require('./routes/ratingRoutes'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(process.env.PORT || 4444, () =>
  console.log(`Listening on port ${process.env.PORT}`.dim.bold)
);
