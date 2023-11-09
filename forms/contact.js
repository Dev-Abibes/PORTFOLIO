const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false, // TLS
  auth: {
    user: 'example@example.com',
    pass: 'password',
  },
});

const mailOptions = {
  from: 'example@example.com',
  to: 'contact@example.com',
  subject: 'Contact Form Message',
  text: `
    Name: ${req.body.name}
    Email: ${req.body.email}
    Message: ${req.body.message}
  `,
};

transporter.sendMail(mailOptions, function(err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log('Email sent successfully!');
  }
});