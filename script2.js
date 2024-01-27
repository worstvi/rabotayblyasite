// script2.js
document.addEventListener('DOMContentLoaded', () => {
  function sendEmailNotification(activity) {
    fetch('http://localhost:3000/send-notification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ activity }),
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
    // Здесь вы можете добавить код для дополнительных действий, связанных с выбором деятельности.
  }

  // Добавьте обработку события или вызов функций по необходимости.
});
