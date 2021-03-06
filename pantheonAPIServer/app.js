//jshint esversion:6, node: true

"use strict";

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database.js');
const SAP = require('./routes/saps');
const events = require('./routes/events');
const applicants = require('./routes/applicants');
const teams = require('./routes/teams');
const announcements = require('./routes/announcements');
const fugiya = require('./routes/fugiya');
const mailTest = require('./routes/mailTest');
const Accomodation = require('./routes/accomodations.js');

// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database');
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

const app = express();

// CORS Middleware
app.use(cors());

// set public as static fetch scource
app.use(express.static('public'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/saps', SAP);
app.use('/events', events);
app.use('/applicants', applicants);
app.use('/teams', teams);
app.use('/announcements', announcements);
app.use('/fugiya', fugiya);
app.use('/mailTest', mailTest);
app.use('/accomodation', Accomodation);

// Index Route
app.get('*', (req, res, next) => {
  res.redirect('http://www.pantheon17.in');
});

// Start Server
app.listen(8000, () => {
  console.log('Server started on port 8000');
});
