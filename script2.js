function sendEmailNotification(activity) {
  fetch('http://localhost:3000/send-notification', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ activity }),
    mode: 'cors',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      return response.json();
    })
    .then(data => console.log('Серверный ответ:', data))
    .catch(error => console.error('Ошибка отправки запроса:', error));
}

function selectActivity(activity) {
  alert(`Выбрано: ${activity}`);
  sendEmailNotification(activity);
}

document.addEventListener('DOMContentLoaded', () => {
});
