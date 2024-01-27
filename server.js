const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000; // Выберите подходящий порт

app.use(bodyParser.json());

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
    from: 'namlunsasha@gmail.com', // Ваша почта
    to: 'musasim@list.ru', // Почта получателя
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

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
