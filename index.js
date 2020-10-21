const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000

const uri = process.env.DB_URI;     // to be added to environment variables
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB connection established!");
});

const responseRouter = require('./routes/response');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .engine('html', require('ejs').renderFile)
  .use(bodyParser.json())
  .use('/response', responseRouter)
  .get('/', (req, res) => res.render('pages/home.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
