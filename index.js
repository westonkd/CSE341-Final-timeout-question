const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongodb = require('./database/connect');
const port = process.env.PORT || 8080;
const app = express();

app
  .use([cors(), bodyParser.json()])
  .use((req, res, next) => {
    next();
  })
  .use('/', require('./routes'));

mongodb.connectDatabase((error) => {
  if (error) {
    console.log(error);
  } else {
    app.listen(port);
    console.log(`App running on http://localhost:${port}`);
  }
});