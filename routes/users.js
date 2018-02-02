/* eslint-disable */

const app = require('express').Router();

module.exports = app

app.get('/', (req, res, next) => {
  res.render('users', {title: 'Users'})
})

app.post('/:name', (req, res, next) => {
  res.redirect('/users')
})
