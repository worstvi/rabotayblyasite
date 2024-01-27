// script2.js
function sendEmailNotification(activity) {
  fetch('http://localhost:3000/send-notification', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ activity }),
    mode: 'cors', // Добавлено для обработки кросс-доменных запросов
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

// Перемещаем функцию в глобальную область видимости
function selectActivity(activity) {
  alert(`Выбрано: ${activity}`);
  sendEmailNotification(activity);
  // Здесь вы можете добавить код для дополнительных действий, связанных с выбором деятельности.
}

document.addEventListener('DOMContentLoaded', () => {
  // Обработчик события DOMContentLoaded
  // Остальной код...
});
