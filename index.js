const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000

const uri = "mongodb+srv://admin:Password!@prisioners-dilemma-db.ehrz6.mongodb.net/prisioners-dilemma-db?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB connection established!");
});

const responseRouter = require('./routes/response');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .engine('html', require('ejs').renderFile)
  // .set('view engine', 'ejs')
  .use(bodyParser.json())
  .use('/response', responseRouter)
  .get('/', (req, res) => res.render('pages/index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
