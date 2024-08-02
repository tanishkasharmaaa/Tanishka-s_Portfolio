// In your /api/send.js (or .ts) file
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      debug: true, // Enable debug mode
    });
    

    const mailOptions = {
      from: email,
      to: 'anjanasharma8448766174@gmail.com',
      subject: subject,
      text: message,
    };

    console.log('Sending email with:', mailOptions);

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Mail sent:', info);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  }    
}
