import React from 'react'
import './Cart.css'

/**
 * Компонент страницы корзины
 * @component
 * @param {Object} props
 * @param {Array} props.items - Массив товаров в корзине
 */
class Cart extends React.Component {
  /**
   * Подсчет общей суммы товаров в корзине
   * @returns {number} Общая сумма
   */
  calculateTotal() {
    const { items } = this.props
    return items.reduce((sum, item) => sum + item.price, 0).toFixed(2)
  }

  render() {
    const { items } = this.props

    return (
      <div className="cart">
        <h2>Shopping Cart</h2>
        {/* Проверка на пустую корзину */}
        {items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="cart-items">
            {/* Отображение списка товаров */}
            {items.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                </div>
              </div>
            ))}
            {/* Отображение общей суммы */}
            <div className="cart-total">
              <h3>Total: ${this.calculateTotal()}</h3>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Cart
