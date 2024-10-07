const transporter = require('../config/mail');

const sendEmail = (req, res) => {
  const { nome, email, mensagem } = req.body;

  const mailOptions = {
    from: `${email} <rafinha.head@gmail.com>`,
    replyTo: email,
    to: process.env.MAIL_RECEIVER,
    subject: `Mensagem de: ${nome}`,
    text: mensagem,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: 'Erro ao enviar e-mail.' });
    } else {
      console.log('E-mail enviado: ' + info.response);
      return res.status(200).json({ message: 'E-mail enviado com sucesso!' });
    }
  });
};

module.exports = { sendEmail };
