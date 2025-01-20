import React from 'react'
import './Products.css'

/**
 * Компонент страницы со списком товаров
 * @component
 * @param {Object} props
 * @param {Array} props.products - Массив товаров для отображения
 * @param {Function} props.addToCart - Функция добавления товара в корзину
 * @param {Function} props.onProductSelect - Функция выбора товара для просмотра деталей
 */
class Products extends React.Component {
  /**
   * Обработчик добавления товара в корзину
   * Предотвращает всплытие события, чтобы не срабатывал переход к деталям товара
   * @param {Event} e - Событие клика
   * @param {Object} product - Товар для добавления в корзину
   */
  handleAddToCart = (e, product) => {
    e.stopPropagation()
    this.props.addToCart(product)
  }

  render() {
    const { products, onProductSelect } = this.props

    return (
      <div className="products-grid">
        {products.map(product => (
          <div 
            key={product.id} 
            className="product-card"
            onClick={() => onProductSelect(product.id)}
          >
            <img src={product.image} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button 
              onClick={(e) => this.handleAddToCart(e, product)} 
              className="add-button"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    )
  }
}

export default Products
