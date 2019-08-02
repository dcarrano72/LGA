//___________________
//Dependencies
//___________________
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const methodOverride = require('method-override')
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

//___________________
//Middleware
//___________________
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/project2_db'

// Connect to Mongo
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, () => {
    console.log('connected to mongo database')
});

//___________________
// Routes
//___________________
//localhost:3000
app.get('/', (req, res) => {
    res.render('index.ejs');
});



//___________________
//Listener
//___________________
app.listen(PORT, () => console.log('Listening on port:', PORT));

