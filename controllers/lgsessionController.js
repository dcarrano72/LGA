// DEPENDENCIES
const express = require('express')
const lgsession = express.Router()

// SCHEMA
const LGSession = require('../models/lgsessionschema.js');

const seedData = require('../models/seed.js');

// seed route
lgsession.get('/seed', (req, res) => {
    LGSession.create(seedData, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.render('index.ejs')
        }
    })
})

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

lgsession.get('/active_session/:id', (req, res) => {
    res.render('active_session.ejs', {
        sessionId: req.params.id
    })
    // display session id
    // display lg id
    // display form to enter new lead
})

lgsession.post('/make_new_session', (req, res) => {
    LGSession.create(req.body, (err, createdLead) => {
        if (err) {
            console.log(err)
        }
        console.log('added lead to database')
        res.redirect('/lgsession/active_session/' + createdLead._id);
    })
})

lgsession.get('/new', (req, res) => {
    res.render('new.ejs')
    // add new lead to current lgsession in database
})

lgsession.put('/add_new_lead/:id', (req, res) => {
    LGSession.findByIdAndUpdate(req.params.id, { $push: { leads: req.body } }, (err, addedLead) => {
        res.redirect(`/lgsession/active_session/${req.params.id}`)
    })
})




lgsession.put('/active_session/:id', (req, res) => {
    res.redirect('/active_session')
})

lgsession.delete('/active_session/:id', (req, res) => {
    LGSession.findById(req.params.id, (err, item) => {
        if (err) {
            console.log(err)

        }
        console.log('successfully removed', item)
        item.remove()
        res.redirect('/lgsession/show_leads')
    })

})

lgsession.get('/show_leads', (req, res) => {
    LGSession.find({}, (err, foundSession) => {
        if (err) {
            console.log('DB error', err)
        } else {
            console.log('successfully found', foundSession)
            res.render('show_leads.ejs', {
                sessionData: foundSession
            })
        }
    })
})

lgsession.get('/session_ended', (req, res) => {
    res.render('session_ended.ejs')
})


module.exports = lgsession


