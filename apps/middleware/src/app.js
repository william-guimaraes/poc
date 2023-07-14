require("dotenv").config();
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const authRoutes = require('./routes/auth')
const eventsRoutes = require('./routes/events')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.use('/auth', authRoutes.router)
app.use('/events', eventsRoutes.router)

exports.app = app
