const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'parkeraydowning@gmail.com',
    from: 'parkeraydowning@gmail.com',
    subject: 'This is my first creation!',
    text: 'I hope this one actually get to you.'
})
