function sendEmailNotification(activity) {
  fetch('https://cors.bridged.cc/http://localhost:3000/send-notification', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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
