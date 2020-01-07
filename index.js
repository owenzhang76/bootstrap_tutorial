"use strict";
// Express setup
const express = require('express');
const path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var crypto = require('crypto');