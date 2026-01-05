// const nodemailer = require("nodemailer")

// const mailer = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//         user: process.env.MAIL_SENDER,
//         pass: process.env.MAIL_PASSWORD
//     },
// })
// module.exports = mailer

const nodemailer = require("nodemailer");

const mailer = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // MUST be true for 465
  auth: {
    user: process.env.MAIL_SENDER,
    pass: process.env.MAIL_PASSWORD, // App Password only
  },
});

module.exports = mailer;
