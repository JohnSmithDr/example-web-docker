'use strict';

const express = require('express');

let app = express();
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = app;

if (!module.parent) {
  let port = 3000;
  app.listen(port, (err) => {
    if (err) {
      console.error(err);
      process.exit(-1);
    }
    console.log('server started at port', port);
  });
}