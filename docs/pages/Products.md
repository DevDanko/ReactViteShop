# Products Page

## Описание
Страница отображения списка товаров в виде сетки карточек.

## Props
```javascript
{
  products: Array,           // Массив товаров для отображения
  addToCart: function,      // Функция добавления товара в корзину
  onProductSelect: function // Функция выбора товара для просмотра деталей
}
```

## Функциональность
- Отображение товаров в виде сетки
- Каждая карточка товара содержит:
  - Изображение
  - Название
  - Цену
  - Кнопку добавления в корзину
- При клике на карточку происходит переход к детальному просмотру товара
- При наведении на карточку применяется эффект поднятия

## Методы
### `handleAddToCart(e: Event, product: Object)`
Обработчик добавления товара в корзину с предотвращением всплытия события.
