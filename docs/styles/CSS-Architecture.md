# Архитектура CSS в проекте

## Структура CSS файлов

В проекте используется модульный подход к организации CSS, который включает в себя:

1. **App.css** - Глобальные стили и базовый layout
2. **index.css** - Стили для корневого уровня приложения
3. **Отдельные CSS файлы** для каждой страницы/компонента

### App.css - Глобальные стили

`App.css` является основным файлом стилей и содержит:

#### 1. Глобальные сбросы стилей
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```
Эти стили обеспечивают консистентное отображение во всех браузерах и предотвращают неожиданное поведение элементов.

#### 2. Базовые стили для body
```css
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}
```
Определяют основной шрифт и фон для всего приложения.

#### 3. Структура layout'а
```css
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 2rem;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
}
```
Эти классы создают базовую структуру приложения с "липким" футером и центрированным контентом.

### CSS для отдельных компонентов

Каждый компонент или страница имеет свой CSS файл, который:
- Содержит только стили, специфичные для данного компонента
- Использует уникальные классы для предотвращения конфликтов
- Может импортировать общие переменные и миксины

## Лучшие практики

### 1. Именование классов
- Используйте осмысленные имена классов
- Следуйте методологии BEM (Block Element Modifier)
- Избегайте излишней вложенности селекторов

Пример:
```css
/* Хорошо */
.product-card__title {
  font-size: 1.2rem;
}

/* Плохо */
.product div h2 {
  font-size: 1.2rem;
}
```

### 2. Организация медиа-запросов
```css
/* Пример адаптивного дизайна */
@media (max-width: 768px) {
  .main-content {
    padding: 1rem;
  }
}
```

### 3. Переиспользование стилей
- Используйте CSS переменные для общих значений
- Создавайте утилитарные классы для часто используемых стилей

## Советы по отладке

1. Используйте инструменты разработчика в браузере для проверки стилей
2. Обращайте внимание на специфичность селекторов
3. Проверяйте наследование стилей

## Рекомендации по производительности

1. Минимизируйте использование !important
2. Избегайте излишней специфичности селекторов
3. Группируйте медиа-запросы для оптимизации

## Дополнительные ресурсы

- [CSS-Tricks](https://css-tricks.com/) - полезные статьи и руководства
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS) - официальная документация по CSS
- [CSS Guidelines](https://cssguidelin.es/) - рекомендации по написанию поддерживаемого CSS
