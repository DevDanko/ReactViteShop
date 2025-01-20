# App Component

## Описание
Корневой компонент приложения, который управляет состоянием и навигацией между страницами.

## Props
Компонент не принимает props.

## State
```javascript
{
  currentPage: string,    // Текущая активная страница ('home', 'products', 'cart', 'product-details')
  cart: Array,           // Массив товаров в корзине
  products: Array,       // Массив всех товаров
  selectedProductId: number // ID выбранного товара для детального просмотра
}
```

## Методы
### `handlePageChange(page: string)`
Обработчик смены страницы.

### `handleProductSelect(productId: number)`
Обработчик выбора товара для просмотра деталей.

### `addToCart(product: Object)`
Добавление товара в корзину.

### `renderPage()`
Метод рендеринга текущей активной страницы.
