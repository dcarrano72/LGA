// DEPENDENCIES
const express = require('express')
const lgsession = express.Router()

// SCHEMA
const LGSession = require('../models/lgsessionschema.js');

const seedData = require('../models/seed.js');

// seed route
// lgsession.get('/seed', (req, res) => {
//     LGSession.create(seedData, (err, data) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.render('index.ejs')
//         }
//     })
// })

// index route displays start button
lgsession.get('/', (req, res) => {
    res.render('index.ejs')
})

// new session 
lgsession.get('/new_session', (req, res) => {
    res.render('new_session.ejs')
})

lgsession.get('/active_session/:id', (req, res) => {
    LGSession.findById(req.params.id, (err, currentSession) => {
        const something = {
            business_name: "",
            business_contact: "",
            business_phone: "",
            business_email: "",
            website_url: "",
            note: ""
        }
        res.render('active_session.ejs', {
            sessionId: req.params.id,
            currentSession: currentSession,
            currentLead: something
        })
    })
    // display session id
    // display lg id
    // display form to enter new lead
})

lgsession.get('/active_session/:sessionId/:leadId', (req, res) => {
    LGSession.findById(req.params.sessionId, (err, currentSession) => {
        let something = {};

        currentSession.leads.forEach((lead) => {
            if (lead._id == req.params.leadId) {
                something = lead;
            }
        })
        res.render('active_session.ejs', {
            sessionId: req.params.id,
            currentSession: currentSession,
            currentLead: something
        })
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

// lgsession.get('/new', (req, res) => {
//     res.render('new.ejs')
//     // add new lead to current lgsession in database
// })

lgsession.put('/add_new_lead/:id', (req, res) => {
    LGSession.findByIdAndUpdate(req.params.id, { $push: { leads: req.body } }, (err, addedLead) => {
        res.redirect(`/lgsession/active_session/${req.params.id}`)
    })
})



// Update Lead
lgsession.put('/update_lead/:sessionId/:leadId', (req, res) => {
    LGSession.findOneAndUpdate({ 'leads._id': req.params.leadId }, {
        '$set': {
            'leads.$.business_name': req.body.business_name,
            'leads.$.business_contact': req.body.business_contact,
            'leads.$.business_phone': req.body.business_phone,
            'leads.$.business_email': req.body.business_email,
            'leads.$.website_url': req.body.website_url,
            'leads.$.note': req.body.note
        }
    }, (err, foundSession) => {
        if (err) {
            console.log(err)
        } else {
            console.log(foundSession)
            res.redirect(`/lgsession/active_session/${req.params.sessionId}`)
        }
    })
})

// Edit
lgsession.get('/edit/:sessionId/:leadId', (req, res) => {
    LGSession.findById(req.params.sessionId, (err, foundSession) => {
        if (err) {
            console.log('DB error', err)
        } else {
            console.log('successfully found', foundSession)

            let temp = {};

            foundSession.leads.forEach((lead, index) => {
                if (lead._id == req.params.leadId) {
                    temp = lead;
                }
            })

            res.render('edit.ejs', {
                specificLead: temp
                // sessionId: req.params.sessionId
            })
        }
    })
})

lgsession.put('/active_session/:sessionId/:leadId', (req, res) => {
    LGSession.findByIdAndUpdate(req.params.sessionId, { $pull: { leads: { _id: req.params.leadId } } }, (err, activeSession) => {
        if (err) {
            console.log(err)

        }
        console.log('successfully removed', req.params.leadId)
        res.redirect('/lgsession/show_leads')
    })
})

lgsession.delete('/active_session/:sessionId/:leadId', (req, res) => {
    LGSession.findByIdAndUpdate(req.params.sessionId, { $pull: { leads: { _id: req.params.leadId } } }, (err, activeSession) => {
        if (err) {
            console.log(err)

        }
        console.log('successfully removed', req.params.leadId)
        res.redirect('/lgsession/show_leads')
    })
})

lgsession.delete('/delete_session/:sessionId', (req, res) => {
    LGSession.findOneAndDelete(req.params.sessionId, (err, deletedSession) => {
        if (err) {
            console.log(err)
        }
        console.log('successfully removed session', req.params.sessionId)
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


