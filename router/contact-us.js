const express = require('express');

const path = require('path');
const rootDir = require('../utils/util');
const contact = express.Router();


contact.get('/contact-us', (req, res , next) => {
  res.sendFile(path.join(rootDir,'views','contact.html'));
})

contact.post('/submit', (req, res , next) => {
  console.log(req.url , req.method , req.body);
  res.sendFile(path.join(rootDir,'views','submit.html'))
  res.redirect('/');

})

module.exports = contact;