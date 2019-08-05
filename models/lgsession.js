const mongoose = require('mongoose')

const lgsessionSchema = mongoose.Schema({
    lgsessionId: Number,
    lgaId: Number,
    leads: [
        {
            business_name: String,
            business_contact: String,
            phone_number: String,
            email_address: String,
            website_url: String,
            note: String
        }
    ]
}, {
        timestamps: true
    })

const LGSession = mongoose.model('lgsession', lgsessionSchema)

module.exports = LGSession