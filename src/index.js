// require('dotenv').config();
// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// app.use(cors()); // Permite requisições de diferentes domínios (caso o front esteja em um servidor diferente)
// app.use(bodyParser.json()); // Para processar dados JSON

// // Configuração do transporte do Nodemailer gmail
// const transporter = nodemailer.createTransport({
//   host: process.env.MAIL_HOST, // ou outro provedor de e-mail
//   port: process.env.MAIL_PORT,
//   secure: true,
//   auth: {
//     user: process.env.MAIL_USER,
//     pass: process.env.MAIL_PASS
//   },
// });

// // Endpoint para envio de e-mails
// app.post('/send', (req, res) => {
//   const { nome, email, mensagem } = req.body;


//   const mailOptions = {//gmail
//     from: `${email} rafinha.head@gmail.com`, // Seu e-mail (autenticado)
//     replyTo: email, // O e-mail da pessoa que enviou o formulário
//     to: process.env.MAIL_RECEIVER, // E-mail que receberá a mensagem
//     subject: `Mensagem de :${nome}`, // Assunto
//     text: mensagem, // Mensagem
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       return res.status(500).json({ error: 'Erro ao enviar e-mail.' }); // Resposta como JSON
//     } else {
//       console.log('E-mail enviado: ' + info.response);
//       return res.status(200).json({ message: 'E-mail enviado com sucesso!' }); // Resposta como JSON
//     }
//   });
// });


// app.listen(process.env.PORT, () => {
//   console.log(`Servidor rodando na porta ${process.env.PORT}`);
// });


require('dotenv').config();
const express = require('express');
const cors = require('cors');
const emailRoutes = require('./routes/emailRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API está funcionando!');
});
app.use('/api', emailRoutes); // Prefixo da rota

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
