// portfolio-backend/server.js

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

app.post('/api/contact', (req, res) => {
  console.log('--- Contact route hit ---'); 
  const { name, email, message } = req.body;
  console.log('Received data:', req.body); 


  console.log('ENV check - User:', process.env.EMAIL_USER);
  console.log('ENV check - Pass:', process.env.EMAIL_PASS ? '*** Password Loaded ***' : '!!! NO PASSWORD !!!');

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER,
    subject: `New Message from Portfolio Contact Form from ${name}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  console.log('Attempting to send email...');

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('!!! NODEMAILER ERROR !!!:', error); 
      return res.status(500).send('Error sending message.');
    }
    console.log('Email sent successfully: ' + info.response);
    res.status(200).send('Message sent successfully!');
  });
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});