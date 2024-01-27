function sendEmailNotification(activity) {
  fetch('http://localhost:3000/send-notification', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({ activity }),
  })
  .then(response => {
    console.log('Серверный ответ:', response);
  })
  .catch(error => console.error('Ошибка отправки запроса:', error));
}

function selectActivity(activity) {
  alert(`Выбрано: ${activity}`);
  sendEmailNotification(activity);
  // Здесь вы можете добавить код для дополнительных действий, связанных с выбором деятельности.
}
