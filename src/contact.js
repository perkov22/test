export default async (req, res) => {
  require('dotenv').config();

  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,

    auth: {
      user: 'info@immense.agency',
      pass: 'Fico_1994',
    },

    secure: true,
  });
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Server is ready to take our messages');
        resolve(success);
      }
    });
  });

  const mailData = {
    from: 'info@immense.agency',
    to: 'info@immense.agency',
    subject: `From ${req.body.name}`,

    html: `<div>
    <p>Ime: <b>${req.body.name} </b></p>
   
   <p>Buđžet: <b>${req.body.budget}</b></p>
    <p>Opis: <b>${req.body.message}</b></p>
        <p>Kontakt: <b>${req.body.phone}</b></p>
    </div><p>Sent from: <b>${req.body.email}</b></p>`,
  };
  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
  console.log(req.body);
  res.send('success');
};
