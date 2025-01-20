# React E-commerce Project Documentation

## Обзор проекта
Это простой e-commerce проект, разработанный с использованием React и Vite. Проект демонстрирует базовую функциональность интернет-магазина без использования маршрутизации и хуков React.

## Структура проекта
```
src/
├── components/     # Переиспользуемые компоненты
│   └── Navbar/     # Навигационная панель
├── pages/         # Компоненты страниц
│   ├── Home/      # Домашняя страница
│   ├── Products/  # Страница списка товаров
│   ├── Cart/      # Корзина
│   └── ProductDetails/ # Детальная страница товара
└── App.jsx        # Корневой компонент приложения
```

## Основные функции
1. Просмотр списка товаров
2. Просмотр детальной информации о товаре
3. Добавление товаров в корзину
4. Просмотр корзины с подсчетом общей суммы

## Компоненты
- [App Component](./components/App.md)
- [Navbar Component](./components/Navbar.md)
- [Home Page](./pages/Home.md)
- [Products Page](./pages/Products.md)
- [Product Details Page](./pages/ProductDetails.md)
- [Cart Page](./pages/Cart.md)

## API
Проект использует [Fake Store API](https://fakestoreapi.com/) для получения данных о товарах:
- GET /products - получение списка всех товаров
- GET /products/{id} - получение информации о конкретном товаре

## Управление состоянием
Управление состоянием реализовано через React Component State без использования дополнительных библиотек управления состоянием.
