// server.js
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();

app.use(cors()); // Разрешить все запросы
app.use(express.json());

app.post('/send-notification', (req, res) => {
  const { activity } = req.body;

  // Отправка уведомления на почту
  sendEmailNotification(activity);

  res.json({ success: true });
});

function sendEmailNotification(activity) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'namlunsasha@gmail.com', // Ваша почта
      pass: 'namsa99221710', // Ваш пароль от почты
    },
  });

  const mailOptions = {
    from: 'namlunsasha@gmail.com',
    to: 'musasim@list.ru',
    subject: 'Уведомление о выборе',
    text: `Пользователь выбрал: ${activity}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Ошибка отправки уведомления:', error);
    } else {
      console.log('Уведомление отправлено:', info.response);
    }
  });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер слушает на порту ${PORT}`);
});
