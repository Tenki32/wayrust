// 1. Находим элемент meta по атрибуту name="description"
const metaDescription = document.querySelector('meta[name="description"]');

// 2. Проверяем, что элемент найден
if (metaDescription) {
  // 3. Изменяем значение атрибута content
  metaDescription.setAttribute('content', 'Новое описание для метатега description.');

  // Альтернативный способ изменения значения атрибута content:
  // metaDescription.content = 'Другое новое описание.';

  console.log('Описание успешно изменено!');
} else {
  console.log('Метатег description не найден.');
}