lgsession.get('/seed', (req, res) => {
    LGSession.create([
        {
            lgsessionId: 0001,
            lgaId: 007,
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
                },

            ]
        },
        {
            lgsessionId: 0002,
            lgaId: 009,
            leads: [
                {
                    business_name: 'Business 14',
                    business_contact: 'Rich M',
                    phone_number: '555-555-5555',
                    email_address: 'email@email.com',
                    website_url: '',
                    note: 'Needs a website'
                },
                {
                    business_name: 'Business 15',
                    business_contact: 'Red T',
                    phone_number: '555-555-5555',
                    email_address: 'email@email.com',
                    website_url: '',
                    note: 'Needs a website'
                },
                {
                    business_name: 'Business 16',
                    business_contact: 'Marlo B',
                    phone_number: '555-555-5555',
                    email_address: 'email@email.com',
                    website_url: '',
                    note: 'Needs a website'
                },
                {
                    business_name: 'Business 17',
                    business_contact: 'Zeb D',
                    phone_number: '555-555-5555',
                    email_address: 'email@email.com',
                    website_url: '',
                    note: 'Needs a website'
                },

            ]
        }
    ], (err, data) => {
        res.redirect('/');
    })
});