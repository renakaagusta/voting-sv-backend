var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const cloudinary = require('cloudinary').v2

var app = express();

app.use(cors());
app.options('*', cors());
