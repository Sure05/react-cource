const express = require('express');
const apiRouter = require('./api');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('./build'));

app.use('/api', apiRouter);

app.use((req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.use((err, req, res, next) => {
  res
    .status(500)
    .send(`Something broke: ${err.message}`)
});


app.listen(3005, () => {
  console.log('Server is running on 3005 port')
});



