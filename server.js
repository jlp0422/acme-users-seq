/* eslint-disable */

const express = require('express');
const app = express();
const path = require('path');
const nunjucks = require('nunjucks');
const db = require('./db');
app.use(require('method-override')('_method'));
app.use(require('body-parser').urlencoded());


nunjucks.configure({ noCache: true })

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use((req, res, next) => {
  res.locals.path = req.url
  next();
})

app.use('/users', require('./routes/users'))

app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use('/vendor', express.static(path.join(__dirname, 'images')));


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));

app.get('/', (req, res, next) => {
  res.render('index', {title: 'Home'});
})

app.get('/error', (req, res, next) => {
  // res.status(404);
  res.render('error', { title: 'ERROR' });
})

db.sync()
  .then(()=> db.seed());
