var metaTag = document.querySelector('meta[name="description"]');

if (metaTag) {

    metaTag.setAttribute('content', 'Новый текст описания для магазина внутриигровых товаров проекта WAYRUST.');


  console.log('Описание успешно изменено!');
} else {
  console.log('Метатег description не найден.');
}