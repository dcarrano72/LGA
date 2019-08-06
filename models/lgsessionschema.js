const mongoose = require('mongoose');
const Schema = mongoose.Schema

const LeadSchema = new Schema({
    business_name: String,
    business_contact: String,
    business_phone: String,
    business_email: String,
    website_url: String,
    note: String
})

const LGSessionSchema = new Schema({
    lg_session_id: Number,
    lga_id: Number,
    leads: [LeadSchema]
})

const LGSession = mongoose.model('lgsession', LGSessionSchema);

module.exports = LGSession