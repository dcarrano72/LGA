// DEPENDENCIES
const express = require('express')
const lgsession = express.Router()

// SCHEMA
const LGSession = require('../models/lgsession.js')

// index route displays start button
lgsession.get('/', (req, res) => {
    res.render('index.ejs')
})

// new session 
lgsession.get('/new_session', (req, res) => {
    res.render('new_session.ejs')
    // autogenerate lgsession id 
    // display form enter lg id
    // display button to active session
})

lgsession.get('/active_session', (req, res) => {
    res.render('active_session.ejs')
    // display session id
    // display lg id
    // display form to enter new lead
})

lgsession.post('/active_session', (req, res) => {
    res.redirect('active_session.ejs')
    // add new lead to current lgsession in database
})

lgsession.put('/active_session', (req, res) => {
    res.redirect('/active_session')
})

lgsession.delete('/active_session', (req, res) => {
    res.redirect('/active_session')
})


module.exports = LGSession


