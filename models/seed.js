const lgsessionData = [
    {
        lg_session_id: 0001,
        lga_id: 007,
        leads: [
            {
                business_name: 'Business 10',
                business_contact: 'Fred M',
                phone_number: '555-555-5555',
                email_address: 'email@email.com',
                website_url: '',
                note: 'Needs a website'
            },
            {
                business_name: 'Business 11',
                business_contact: 'Frank L',
                phone_number: '555-555-5555',
                email_address: 'email@email.com',
                website_url: '',
                note: 'Needs a website'
            },
            {
                business_name: 'Business 12',
                business_contact: 'Fran R',
                phone_number: '555-555-5555',
                email_address: 'email@email.com',
                website_url: '',
                note: 'Needs a website'
            },
            {
                business_name: 'Business 13',
                business_contact: 'Fez B',
                phone_number: '555-555-5555',
                email_address: 'email@email.com',
                website_url: '',
                note: 'Needs a website'
            }
        ]
    }
]
module.exports = lgsessionData;

// const seedDB = () => {
//     LGSession.insertMany(lgsessionData, (err, collection) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('seeded', collection)
//     })
// }

// seedDB()

// leads: [
//     {
//         business_name: 'Business 10',
//         business_contact: 'Fred M',
//         phone_number: '555-555-5555',
//         email_address: 'email@email.com',
//         website_url: '',
//         note: 'Needs a website'
//     },
//     {
//         business_name: 'Business 11',
//         business_contact: 'Frank L',
//         phone_number: '555-555-5555',
//         email_address: 'email@email.com',
//         website_url: '',
//         note: 'Needs a website'
//     },
//     {
//         business_name: 'Business 12',
//         business_contact: 'Fran R',
//         phone_number: '555-555-5555',
//         email_address: 'email@email.com',
//         website_url: '',
//         note: 'Needs a website'
//     },
//     {
//         business_name: 'Business 13',
//         business_contact: 'Fez B',
//         phone_number: '555-555-5555',
//         email_address: 'email@email.com',
//         website_url: '',
//         note: 'Needs a website'
//     }
// ]